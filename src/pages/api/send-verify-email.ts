import { NextApiRequest, NextApiResponse } from 'next';
import Mailjet, { Client } from 'node-mailjet';
import supabase from '@/utils/dbreader';
import crypto from "crypto"

const mailjet: Client =  Mailjet.apiConnect(
        process.env.MAILJET_API_KEY || "",
        process.env.MAILJET_API_SECRET || "",
)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST' || !req.body.email || !req.body.first_name || !req.body.last_name || !req.body.id) {
        res.status(400).json({ message: 'Invalid request' });
        return;
    }

    if(!process.env.VERIFY_SECRET) {
        res.status(500).json({ message: 'Server error' });
        return;
    }

    // Find user in database
    // - Find user in table by name such that id is null
    // - If user if found, note the index and continue
    const {data: people, error} = await supabase.from("people").select("index").eq("first_name", req.body.first_name).eq("last_name", req.body.last_name)
    if(error || !people || people.length === 0) {
        console.log("error not found")
        console.log(error)
        console.log(people)
        res.status(400).json({ message: 'Person not found in database' });
        return;
    }

    // Generate verification ID through secret key
    // - Hash the index with a secret key
    // - Build url with index hash and id to place in database
    const hash = crypto.createHmac('sha256', process.env.VERIFY_SECRET).update(people[0].index.toString()).digest('hex')
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify/${hash}?id=${req.body.id}`


    console.log(url)

    res.status(200)

    return;

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
          TextPart: `Please click the link to verify your account: ${url}`,
          HTMLPart: `<h3>Please click the link to verify your account: <a href="${url}">Verify Account</a></h3>`
        }
      ]
    }).then(res => {console.log(res)}).catch(err => {console.log(err.statusCode); res.status(500).json({ message: 'Server error' }); return;})
    res.status(200).json({ message: 'Email sent' });
}
