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

import { type NextApiRequest, type NextApiResponse } from 'next';
import { sql } from '@databases/sqlite-sync';

import db from '@/db';
import {
  isEmail as validEmail,
  validPassword,
  hash,
  MIN_PASSWORD_LENGTH
} from '@/auth_utils';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Record<string, unknown>>
): void {
  if (!validEmail(req.body.email)) {
    res.status(400).json({ message: 'Invalid email' });
    return;
  }
  if (!validPassword(req.body.password)) {
    res.status(400).json({
      message:
        'Password must be at least ' +
        MIN_PASSWORD_LENGTH.toString() +
        ' characters long'
    });
    return;
  }

  if (
    db.query(sql`
    SELECT email FROM users WHERE email=${req.body.email}
  `).length !== 0
  ) {
    console.warn('attempted to create existing user');

    res.json({});
    return;
  }

  db.query(sql`
    INSERT INTO users (id, email, password, bio) VALUES
      ((SELECT MAX(id) FROM users) + 1, ${req.body.email}, ${hash(
    req.body
  )}, '')
  `);

  res.json({});
}
