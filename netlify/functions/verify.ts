import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { NextApiRequest, NextApiResponse } from 'next';
import Mailjet, { Client } from 'node-mailjet';
import { decrypt } from '@/lib/utils/serverCrypto';
import { SB_serveronly } from '@/lib/utils/dbserveronly';

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const { encryptedData, iv, id } = event.queryStringParameters!;

  if (
    !encryptedData ||
    !iv ||
    !id ||
    typeof encryptedData !== 'string' ||
    typeof iv !== 'string'
  ) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid request' })
    };
  }

  try {
    const index = parseInt(
      decrypt({ encryptedData: encryptedData as string, iv: iv as string })
    );
    console.log('Updating person of index ' + index + ' to id: ' + id);

    // Update person in database
    const { data, error } = await SB_serveronly.from('people')
      .update({ id: id as string })
      .eq('index', index);

    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Index not found or people could not be updated'
        })
      };
    }
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Error with parsing index' })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'User verified' })
  };
};
