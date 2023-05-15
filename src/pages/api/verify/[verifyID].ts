import { NextApiRequest, NextApiResponse } from 'next';
import Mailjet, { Client } from 'node-mailjet';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const query = req.query;

    // TODO: decrypt query hash through secret key
    // update user index ___ to have id ___
}
