import { NextApiRequest, NextApiResponse } from 'next';
import Mailjet, { Client } from 'node-mailjet';

const mailjet: Client =  Mailjet.apiConnect(
        process.env.MAILJET_API_KEY || "",
        process.env.MAILJET_API_SECRET || "",
)

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method !== 'POST' || !req.body.email) {
        res.status(400).json({ message: 'Invalid request' });
        return;
    }

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
