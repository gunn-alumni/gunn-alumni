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
  DROP TABLE IF EXISTS users;

  CREATE TABLE users (
    id INT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password BLOB NOT NULL,
    bio TEXT NOT NULL
  ) STRICT;

  INSERT INTO users (id, email, password, bio) VALUES
    (0, '', x'', '');

  DROP TABLE IF EXISTS people;

  CREATE TABLE people (
    name TEXT NOT NULL,
    gradYear INT,
    userID INT UNIQUE
  ) STRICT
`)
