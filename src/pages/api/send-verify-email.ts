import { NextApiRequest, NextApiResponse } from 'next';
import Mailjet, { Client } from 'node-mailjet';
import { SB_serveronly } from '@/lib/utils/dbserveronly';
import { decrypt, encrypt } from '@/lib/utils/serverCrypto';
import crypto from 'crypto';

const mailjet: Client = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY || '',
  process.env.MAILJET_API_SECRET || ''
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST' || !req.body.pausd_email || !req.body.id) {
    res.status(400).json({ message: 'Invalid request' });
    return;
  }

  // Find user in database
  // - Find user in table by name such that id is null
  // - If user if found, note the index and continue
  const { data: people, error } = await SB_serveronly.from('people')
    .select('index,first_name,last_name')
    .eq('pausd_email', req.body.pausd_email);

  if (error || !people || people.length === 0) {
    console.log('error not found');
    console.log(error);
    console.log(people);
    res.status(400).json({ message: 'Person not found in database' });
    return;
  }

  // Generate verification ID through secret key
  // - Hash the index with a secret key
  // - Build url with index hash and id to place in database
  const hash = encrypt(people[0].index.toString());
  const url = `http://alumni.gunnhigh.school/api/verify?encryptedData=${hash.encryptedData}&id=${req.body.id}&iv=${hash.iv}`;

  fetch(url, { method: 'get' })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  res.status(200).json({ message: 'success verify' });

  // Send mail with verification link
  // mailjet
  //   .post('send', { version: 'v3.1' })
  //   .request({
  //     Messages: [
  //       {
  //         From: {
  //           Email: 'verify@alumni.gunnhigh.school',
  //           Name: 'Gunn High Development Team'
  //         },
  //         To: [
  //           {
  //             Email: req.body.pausd_email,
  //             Name: `${people[0].first_name} ${people[0].last_name}`
  //           }
  //         ],
  //         Subject: 'Verify Alumni Account',
  //         TextPart: `Please click the link to verify your account: ${url}`,
  //         HTMLPart: `<h3>Please click the link to verify your account: <a href="${url}">Verify Account</a></h3>`
  //       }
  //     ]
  //   })
  //   .then((res) => {
  //     console.log('Successfully sent email');
  //   })
  //   .catch((err) => {
  //     console.log(err.statusCode);
  //     res.status(500).json({ message: 'Server error' });
  //     return;
  //   });
  // res.status(200).json({ message: 'Email sent' });
}
