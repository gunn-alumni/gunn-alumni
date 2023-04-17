// Copyright 2023 David Li

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Readable } from 'stream'
import { type NextApiRequest, type NextApiResponse } from 'next'

import transporter from '@/transporter'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Record<string, unknown>>
): void {
  // todo: make this work
  transporter.sendMail({
    from: 'fakeauth@gunnalum.site',
    to: req.body.email,
    subject: 'WEBSITE NAME Password Reset',
    text: 'test email text.'
  }, (_err, info) => {
    if (info.message instanceof Readable) {
      info.message.pipe(process.stdout)
    } else {
      console.error('nodemailer is misconfigured')
    }
  })

  res.status(500).json({ error: 'not implemented' })
}
