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
import { getToken } from 'next-auth/jwt';
import { sql } from '@databases/sqlite-sync';

import db from '@/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Record<string, unknown>>
): Promise<void> {
  const token = await getToken({ req });
  if (token == null) {
    res.status(403).json({ message: 'unauthorized' });
    return;
  }
  if (req.body.bio == null) {
    res.status(400).json({ message: 'missing bio content' });
  }
  db.query(sql`
    UPDATE users
    SET bio = ${req.body.bio}
    WHERE id = ${token.sub}
  `);
  res.json({ message: 'success' });
}
