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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Record<string, unknown>>
): void {
  // will not return data if user is not a person
  // res.json(
  //   db.query(sql`
  //   SELECT people.name, people.gradYear, users.bio
  //   FROM people, users
  //   WHERE people.userID = ${req.query.id} AND users.id = ${req.query.id}
  // `)[0]
  // );
}
