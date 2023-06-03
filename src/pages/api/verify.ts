import { NextApiRequest, NextApiResponse } from 'next';
import Mailjet, { Client } from 'node-mailjet';
import { decrypt } from '@/lib/utils/serverCrypto';
import { SB_serveronly } from '@/lib/utils/dbserveronly';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { encryptedData, iv, id } = req.query;

  if (
    !encryptedData ||
    !iv ||
    !id ||
    typeof encryptedData !== 'string' ||
    typeof iv !== 'string'
  ) {
    res.status(400).json({ message: 'Invalid request' });
    return;
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
      res
        .status(400)
        .json({ message: 'Index not found or people could not be updated' });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: 'Error with parsing index' });
    return;
  }

  res.status(200).json({ message: 'User verified' });
}
