import { NextApiRequest, NextApiResponse } from 'next';
import Mailjet, { Client } from 'node-mailjet';
import { decrypt } from '@/utils/serverCrypto';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {encryptedData, iv, id} = req.query;

    if(!encryptedData || !iv || ! id || typeof encryptedData !== "string" || typeof iv !== "string") {
        res.status(400).json({ message: 'Invalid request' });
        return;
    }

    console.log(decrypt({encryptedData, iv}))
}
