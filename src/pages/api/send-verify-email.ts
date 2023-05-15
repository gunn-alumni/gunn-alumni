import { NextApiRequest, NextApiResponse } from 'next';
import Mailjet, { Client } from 'node-mailjet';
import { SB } from '@/utils/dbreader';
import crypto from "crypto"

const mailjet: Client =  Mailjet.apiConnect(
        process.env.MAILJET_API_KEY || "",
        process.env.MAILJET_API_SECRET || "",
)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST' || !req.body.email || !req.body.name || !req.body.id) {
        res.status(400).json({ message: 'Invalid request' });
        return;
    }

    // Find user in database
    // - Find user in table by name such that id is null
    // - If user if found, note the index and continue

    // Generate verification ID through secret key
    // - Hash the index with a secret key
    // - Build url with index hash and id to place in database

    // Send mail with verification link
    mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: "verify@alumni.gunnhigh.school",
            Name: "Gunn High Development Team"
          },
          To: [
            {
              Email: req.body.email,
              Name: req.body.name
            }
          ],
          Subject: "Verify Alumni Account",
          TextPart: "Please click the link to verify your account",
          HTMLPart: "<h3>Please click the link to verify your account</h3>"
        }
      ]
    }).then(res => {console.log(res)}).catch(err => {console.log(err.statusCode)})
    res.status(200).json({ message: 'Email sent' });
}
