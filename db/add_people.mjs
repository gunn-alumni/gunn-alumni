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

import connect, { sql } from '@databases/sqlite-sync'

connect('store.db3').query(sql`
  INSERT INTO people (name, grad_year) VALUES
    ('Bobby Boomer', 2000),
    ('David Li', 2024),
    ('Veeee Eeeer', 2024),
    ('Zobby Zoomer', 2040),
    ('Gunn Alumni Dylan', 1984),
    ('Shitty Staff', NULL),
    ('Example User', 1999)
`)
