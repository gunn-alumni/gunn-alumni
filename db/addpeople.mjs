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

import fs from 'fs'
import connect, { sql } from '@databases/sqlite-sync'

const db = connect('store.db3')

for (const person of JSON.parse(fs.readFileSync('./db/fakepeople.json'))) {
  db.query(sql`
    INSERT INTO people (name, gradYear) VALUES
      (${person.name}, ${person.gradYear})
  `)
}
