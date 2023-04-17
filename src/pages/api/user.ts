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

import { type NextApiRequest, type NextApiResponse } from 'next'
import { sql } from '@databases/sqlite-sync'

import db from '@/db'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Record<string, unknown>>
): void {
  res.json({
    ...db.query(sql`
      SELECT name, grad_year FROM people WHERE user_id = ${req.query.id}
    `)[0],
    ...db.query(sql`
      SELECT bio FROM users WHERE id = ${req.query.id}
    `)[0]
  })
}
