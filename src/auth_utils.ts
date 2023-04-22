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

import crypto from 'crypto'

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation
export const isEmail = (email: string): boolean => {
  return email.length < 256 &&
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      .test(email)
}

export const MIN_PASSWORD_LENGTH = 6

export const validPassword = (pw: string): boolean => {
  return pw.length >= MIN_PASSWORD_LENGTH && pw.length < 256
}

export const hash = (creds: Record<'email' | 'password', string>): Buffer => crypto.scryptSync(
  creds.password,
  `gunn_alumni_site/${creds.email}`,
  128,
  { p: 5 }
)
