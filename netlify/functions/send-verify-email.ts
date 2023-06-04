import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import Mailjet, { Client } from 'node-mailjet';
import { SB_serveronly } from '@/lib/utils/dbserveronly';
import { decrypt, encrypt } from '@/lib/utils/serverCrypto';
import crypto from 'crypto';

const mailjet: Client = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY || '',
  process.env.MAILJET_API_SECRET || ''
);

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  if (!event.body)
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid request' })
    };

  const { pausd_email, id } = JSON.parse(event.body);

  if (event.httpMethod === 'POST' || !pausd_email || !id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid request' })
    };
  }

  // Find user in database
  // - Find user in table by name such that id is null
  // - If user if found, note the index and continue
  const { data: people, error } = await SB_serveronly.from('people')
    .select('index,first_name,last_name')
    .eq('pausd_email', pausd_email);

  if (error || !people || people.length === 0) {
    console.log('error not found');
    console.log(error);
    console.log(people);
    return { statusCode: 400, body: JSON.stringify({ message: 'Error' }) };
  }

  // Generate verification ID through secret key
  // - Hash the index with a secret key
  // - Build url with index hash and id to place in database
  const hash = encrypt(people[0].index.toString());
  const url = `https://alumni.gunnhigh.school/.netlify/functions/verify?encryptedData=${hash.encryptedData}&id=${id}&iv=${hash.iv}`;

  fetch(url, { method: 'get' })
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Error with verification' })
      };
    });

  return { statusCode: 200, body: JSON.stringify({ message: 'Email sent' }) };
};
