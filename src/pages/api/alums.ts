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

// import { sql } from '@databases/sqlite-sync';
import { type NextApiRequest, type NextApiResponse } from 'next';
import { StaticImageData } from 'next/image';

// import db from '@/db';

interface Alum {
  name: string;
  user_id?: string;
  userPfp?: string;
  grad_year?: string;
}

type Result = Record<number, Alum[]>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
): void {
  const beginYear = req.query.beginYear ?? Number.MIN_SAFE_INTEGER;
  const endYear = req.query.endYear ?? Number.MAX_SAFE_INTEGER;

  const oldresult: Result = {
    2020: [
      {
        name: 'dylan',
        user_id: "123"
      },
      {
        name: 'veer',
        user_id: "123"
      }
    ]
  };

  const result: Result = {
    "2024": [
      {
          user_id: "user1",
          userPfp: "/images/userIconx96.png",
          name: "Jia Ruparel",
          grad_year : "2024"
      },
      {
          user_id: "user2",
          userPfp: "/images/userIconx96.png",
          name: "Albert Lee",
          grad_year : "2024"
      },
      {
        user_id: "user3",
        userPfp: "/images/dylan.png",
        name: "Dylan Lu",
        grad_year : "2024"
      },
      {
        user_id: "user4",
        userPfp: "/images/userIconx96.png",
        name: "Julia Kang",
        grad_year : "2024"
      },
      {
          user_id: "user1",
          userPfp: "/images/userIconx96.png",
          name: "David Li",
          grad_year : "2024"
      },
      {
          user_id: "user2",
          userPfp: "/images/userIconx96.png",
          name: "Nakisha Gib",
          grad_year : "2024"
      },
      {
        user_id: "user3",
        userPfp: "/images/dylan.png",
        name: "Ruth Olivera",
        grad_year : "2024"
      },
      {
        user_id: "user4",
        userPfp: "/images/userIconx96.png",
        name: "Leon Kevork",
        grad_year : "2024"
      },
      {
          user_id: "user1",
          userPfp: "/images/userIconx96.png",
          name: "Matthew Grupenhoff",
          grad_year : "2024"
      },
      {
          user_id: "user2",
          userPfp: "/images/userIconx96.png",
          name: "Ezekiel Michael",
          grad_year : "2024"
      },
      {
        user_id: "user3",
        userPfp: "/images/dylan.png",
        name: "Bianca Richard",
        grad_year : "2024"
      },
      {
        user_id: "user4",
        userPfp: "/images/userIconx96.png",
        name: "Krishan B. Grant",
        grad_year : "2024"
      }
  ],
  "2023": [
            {
                user_id: "user1",
                userPfp: "/images/userIconx96.png",
                name: "Veer Ruparel",
                grad_year : "2023"
            },
            {
                user_id: "user2",
                userPfp: "/images/userIconx96.png",
                name: "Sammy Lesner",
                grad_year : "2023"
            },
            {
              user_id: "user3",
              userPfp: "/images/dylan.png",
              name: "Dylan Lu",
                grad_year : "2023"
            },
            {
              user_id: "user4",
              userPfp: "/images/userIconx96.png",
              name: "Ruparel",
                grad_year : "2023"
            }
        ],
        "2022": [
            {
                user_id: "user1",
                userPfp: "/images/userIconx96.png",
                name: "Jia Ruparel",
                grad_year : "2022"
            },
            {
                user_id: "user2",
                userPfp: "/images/userIconx96.png",
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                grad_year : "2022"
            },
            {
              user_id: "user3",
              userPfp: "/images/dylan.png",
              name: "Dylan Lu",
                grad_year : "2022"
            },
            {
              user_id: "user4",
              userPfp: "/images/userIconx96.png",
              name: "Ruparel",
                grad_year : "2022"
            },
            {
                user_id: "user1",
                userPfp: "/images/userIconx96.png",
                name: "Jia Ruparel",
                grad_year : "2022"
            },
            {
                user_id: "user2",
                userPfp: "/images/userIconx96.png",
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                grad_year : "2022"
            },
            {
              user_id: "user3",
              userPfp: "/images/dylan.png",
              name: "Dylan Lu",
                grad_year : "2022"
            },
            {
              user_id: "user4",
              userPfp: "/images/userIconx96.png",
              name: "Ruparel",
                grad_year : "2022"
            },
            {
                user_id: "user1",
                userPfp: "/images/userIconx96.png",
                name: "Jia Ruparel",
                grad_year : "2022"
            },
            {
                user_id: "user2",
                userPfp: "/images/userIconx96.png",
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                grad_year : "2022"
            },
            {
              user_id: "user3",
              userPfp: "/images/dylan.png",
              name: "Dylan Lu",
                grad_year : "2022"
            },
            {
              user_id: "user4",
              userPfp: "/images/userIconx96.png",
              name: "Ruparel",
                grad_year : "2022"
            },
            {
                user_id: "user1",
                userPfp: "/images/userIconx96.png",
                name: "Jia Ruparel",
                grad_year : "2022"
            },
            {
                user_id: "user2",
                userPfp: "/images/userIconx96.png",
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                grad_year : "2022"
            },
            {
              user_id: "user3",
              userPfp: "/images/dylan.png",
              name: "Dylan Lu",
                grad_year : "2022"
            },
            {
              user_id: "user4",
              userPfp: "/images/userIconx96.png",
              name: "Ruparel",
                grad_year : "2022"
            },
            {
                user_id: "user1",
                userPfp: "/images/userIconx96.png",
                name: "Jia Ruparel",
                grad_year : "2022"
            },
            {
                user_id: "user2",
                userPfp: "/images/userIconx96.png",
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                grad_year : "2022"
            },
            {
                user_id: "user3",
                userPfp: "/images/dylan.png",
                name: "Dylan Lu",
                grad_year : "2022"
            },
            {
                user_id: "user4",
                userPfp: "/images/userIconx96.png",
                name: "Ruparel",
                grad_year : "2022"
            }
        ],
        "2021": [
                  {
                      user_id: "user1",
                      userPfp: "/images/userIconx96.png",
                      name: "Jia Ruparel",
                      grad_year : "2021"
                  },
                  {
                      user_id: "user2",
                      userPfp: "/images/userIconx96.png",
                      name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                      grad_year : "2021"
                  },
                  {
                    user_id: "user3",
                    userPfp: "/images/dylan.png",
                    name: "Dylan Lu",
                      grad_year : "2021"
                  },
                  {
                    user_id: "user4",
                    userPfp: "/images/userIconx96.png",
                    name: "Ruparel",
                      grad_year : "2021"
                  },
                  {
                      user_id: "user1",
                      userPfp: "/images/userIconx96.png",
                      name: "Jia Ruparel",
                      grad_year : "2021"
                  },
                  {
                      user_id: "user2",
                      userPfp: "/images/userIconx96.png",
                      name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                      grad_year : "2021"
                  },
                  {
                    user_id: "user3",
                    userPfp: "/images/dylan.png",
                    name: "Dylan Lu",
                      grad_year : "2021"
                  },
                  {
                    user_id: "user4",
                    userPfp: "/images/userIconx96.png",
                    name: "Ruparel",
                      grad_year : "2021"
                  }
              ],
              "2020": [
                  {
                      user_id: "user1",
                      userPfp: "/images/userIconx96.png",
                      name: "Jia Ruparel",
                      grad_year : "2020"
                  },
                  {
                      user_id: "user2",
                      userPfp: "/images/userIconx96.png",
                      name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                      grad_year : "2020"
                  },
                  {
                      user_id: "user3",
                      userPfp: "/images/dylan.png",
                      name: "Dylan Lu",
                      grad_year : "2020"
                  },
                  {
                      user_id: "user4",
                      userPfp: "/images/userIconx96.png",
                      name: "Ruparel",
                      grad_year : "2020"
                  }
              ],
              "2019": [
                  {
                      user_id: "user1",
                      userPfp: "/images/userIconx96.png",
                      name: "Jia Ruparel",
                      grad_year : "2019"
                  },
                  {
                      user_id: "user2",
                      userPfp: "/images/userIconx96.png",
                      name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                      grad_year : "2019"
                  },
                  {
                      user_id: "user3",
                      userPfp: "/images/dylan.png",
                      name: "Dylan Lu",
                      grad_year : "2019"
                  },
                  {
                      user_id: "user4",
                      userPfp: "/images/userIconx96.png",
                      name: "Ruparel",
                      grad_year : "2019"
                  }
              ],
              "2018": [
                  {
                      user_id: "user1",
                      userPfp: "/images/userIconx96.png",
                      name: "Jia Ruparel",
                      grad_year : "2018"
                  },
                  {
                      user_id: "user2",
                      userPfp: "/images/userIconx96.png",
                      name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                      grad_year : "2018"
                  },
                  {
                      user_id: "user3",
                      userPfp: "/images/dylan.png",
                      name: "Dylan Lu",
                      grad_year : "2018"
                  },
                  {
                      user_id: "user4",
                      userPfp: "/images/userIconx96.png",
                      name: "Ruparel",
                      grad_year : "2018"
                  }
              ],
              "2017": [
                  {
                      user_id: "user1",
                      userPfp: "/images/userIconx96.png",
                      name: "Jia Ruparel",
                      grad_year : "2017"
                  },
                  {
                      user_id: "user2",
                      userPfp: "/images/userIconx96.png",
                      name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                      grad_year : "2017"
                  },
                  {
                      user_id: "user3",
                      userPfp: "/images/dylan.png",
                      name: "Dylan Lu",
                      grad_year : "2017"
                  },
                  {
                      user_id: "user4",
                      userPfp: "/images/userIconx96.png",
                      name: "Ruparel",
                      grad_year : "2017"
                  }
              ],
              "2016": [
                  {
                      user_id: "user1",
                      userPfp: "/images/userIconx96.png",
                      name: "Jia Ruparel",
                      grad_year : "2016"
                  },
                  {
                      user_id: "user2",
                      userPfp: "/images/userIconx96.png",
                      name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                      grad_year : "2016"
                  },
                  {
                      user_id: "user3",
                      userPfp: "/images/dylan.png",
                      name: "Dylan Lu",
                      grad_year : "2016"
                  },
                  {
                      user_id: "user4",
                      userPfp: "/images/userIconx96.png",
                      name: "Ruparel",
                      grad_year : "2016"
                  }
              ],
              "2015": [
                  {
                      user_id: "user1",
                      userPfp: "/images/userIconx96.png",
                      name: "Jia Ruparel",
                      grad_year : "2015"
                  },
                  {
                      user_id: "user2",
                      userPfp: "/images/userIconx96.png",
                      name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                      grad_year : "2015"
                  },
                  {
                      user_id: "user3",
                      userPfp: "/images/dylan.png",
                      name: "Dylan Lu",
                      grad_year : "2015"
                  },
                  {
                      user_id: "user4",
                      userPfp: "/images/userIconx96.png",
                      name: "Ruparel",
                      grad_year : "2015"
                  }
              ],
              "2014": [
                  {
                      user_id: "user1",
                      userPfp: "/images/userIconx96.png",
                      name: "Jia Ruparel",
                      grad_year : "2014"
                  },
                  {
                      user_id: "user2",
                      userPfp: "/images/userIconx96.png",
                      name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                      grad_year : "2014"
                  },
                  {
                      user_id: "user3",
                      userPfp: "/images/dylan.png",
                      name: "Dylan Lu",
                      grad_year : "2014"
                  },
                  {
                      user_id: "user4",
                      userPfp: "/images/userIconx96.png",
                      name: "Ruparel",
                      grad_year : "2014"
                  }
              ],
              "2013": [
                  {
                      user_id: "user1",
                      userPfp: "/images/userIconx96.png",
                      name: "Jia Ruparel",
                      grad_year : "2013"
                  },
                  {
                      user_id: "user2",
                      userPfp: "/images/userIconx96.png",
                      name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                      grad_year : "2013"
                  },
                  {
                      user_id: "user3",
                      userPfp: "/images/dylan.png",
                      name: "Dylan Lu",
                      grad_year : "2013"
                  },
                  {
                      user_id: "user4",
                      userPfp: "/images/userIconx96.png",
                      name: "Ruparel",
                      grad_year : "2013"
                  }
              ],
                  "2012": [
                  {
                      user_id: "user1",
                      userPfp: "/images/userIconx96.png",
                      name: "Jia Ruparel",
                      grad_year : "2012"
                  },
                  {
                      user_id: "user2",
                      userPfp: "/images/userIconx96.png",
                      name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                      grad_year : "2012"
                  },
                  {
                      user_id: "user3",
                      userPfp: "/images/dylan.png",
                      name: "Dylan Lu",
                      grad_year : "2012"
                  },
                  {
                      user_id: "user4",
                      userPfp: "/images/userIconx96.png",
                      name: "Ruparel",
                      grad_year : "2012"
                  }
              ],
                  "2011": [
                  {
                      user_id: "user1",
                      userPfp: "/images/userIconx96.png",
                      name: "Jia Ruparel",
                      grad_year : "2011"
                  },
                  {
                      user_id: "user2",
                      userPfp: "/images/userIconx96.png",
                      name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                      grad_year : "2011"
                  },
                  {
                      user_id: "user3",
                      userPfp: "/images/dylan.png",
                      name: "Dylan Lu",
                      grad_year : "2011"
                  },
                  {
                      user_id: "user4",
                      userPfp: "/images/userIconx96.png",
                      name: "Ruparel",
                      grad_year : "2011"
                  }
              ],
                  "2010": [
                  {
                      user_id: "user1",
                      userPfp: "/images/userIconx96.png",
                      name: "Jia Ruparel",
                      grad_year : "2010"
                  },
                  {
                      user_id: "user2",
                      userPfp: "/images/userIconx96.png",
                      name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
                      grad_year : "2010"
                  },
                  {
                      user_id: "user3",
                      userPfp: "/images/dylan.png",
                      name: "Dylan Lu",
                      grad_year : "2010"
                  },
                  {
                      user_id: "user4",
                      userPfp: "/images/userIconx96.png",
                      name: "Ruparel",
                      grad_year : "2010"
                  }
              ]
  };

//   [
//     {
//     },
//     {
//     "2023": [
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Veer Ruparel",
//             grad_year : "2023"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Sammy Lesner",
//             grad_year : "2023"
//         },
//         {
//           user_id: "user3",
//           userPfp: "/images/dylan.png",
//           name: "Dylan Lu",
//             grad_year : "2023"
//         },
//         {
//           user_id: "user4",
//           userPfp: "/images/userIconx96.png",
//           name: "Ruparel",
//             grad_year : "2023"
//         }
//     ]},
//     {
//     "2022": [
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2022"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2022"
//         },
//         {
//           user_id: "user3",
//           userPfp: "/images/dylan.png",
//           name: "Dylan Lu",
//             grad_year : "2022"
//         },
//         {
//           user_id: "user4",
//           userPfp: "/images/userIconx96.png",
//           name: "Ruparel",
//             grad_year : "2022"
//         },
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2022"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2022"
//         },
//         {
//           user_id: "user3",
//           userPfp: "/images/dylan.png",
//           name: "Dylan Lu",
//             grad_year : "2022"
//         },
//         {
//           user_id: "user4",
//           userPfp: "/images/userIconx96.png",
//           name: "Ruparel",
//             grad_year : "2022"
//         },
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2022"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2022"
//         },
//         {
//           user_id: "user3",
//           userPfp: "/images/dylan.png",
//           name: "Dylan Lu",
//             grad_year : "2022"
//         },
//         {
//           user_id: "user4",
//           userPfp: "/images/userIconx96.png",
//           name: "Ruparel",
//             grad_year : "2022"
//         },
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2022"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2022"
//         },
//         {
//           user_id: "user3",
//           userPfp: "/images/dylan.png",
//           name: "Dylan Lu",
//             grad_year : "2022"
//         },
//         {
//           user_id: "user4",
//           userPfp: "/images/userIconx96.png",
//           name: "Ruparel",
//             grad_year : "2022"
//         },
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2022"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2022"
//         },
//         {
//             user_id: "user3",
//             userPfp: "/images/dylan.png",
//             name: "Dylan Lu",
//             grad_year : "2022"
//         },
//         {
//             user_id: "user4",
//             userPfp: "/images/userIconx96.png",
//             name: "Ruparel",
//             grad_year : "2022"
//         }
//     ]},
//     {
//     "2021": [
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2021"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2021"
//         },
//         {
//           user_id: "user3",
//           userPfp: "/images/dylan.png",
//           name: "Dylan Lu",
//             grad_year : "2021"
//         },
//         {
//           user_id: "user4",
//           userPfp: "/images/userIconx96.png",
//           name: "Ruparel",
//             grad_year : "2021"
//         },
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2021"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2021"
//         },
//         {
//           user_id: "user3",
//           userPfp: "/images/dylan.png",
//           name: "Dylan Lu",
//             grad_year : "2021"
//         },
//         {
//           user_id: "user4",
//           userPfp: "/images/userIconx96.png",
//           name: "Ruparel",
//             grad_year : "2021"
//         }
//     ]},
//     {
//     "2020": [
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2020"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2020"
//         },
//         {
//             user_id: "user3",
//             userPfp: "/images/dylan.png",
//             name: "Dylan Lu",
//             grad_year : "2020"
//         },
//         {
//             user_id: "user4",
//             userPfp: "/images/userIconx96.png",
//             name: "Ruparel",
//             grad_year : "2020"
//         }
//     ]},
//     {
//     "2019": [
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2019"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2019"
//         },
//         {
//             user_id: "user3",
//             userPfp: "/images/dylan.png",
//             name: "Dylan Lu",
//             grad_year : "2019"
//         },
//         {
//             user_id: "user4",
//             userPfp: "/images/userIconx96.png",
//             name: "Ruparel",
//             grad_year : "2019"
//         }
//     ]},
//     {
//     "2018": [
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2018"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2018"
//         },
//         {
//             user_id: "user3",
//             userPfp: "/images/dylan.png",
//             name: "Dylan Lu",
//             grad_year : "2018"
//         },
//         {
//             user_id: "user4",
//             userPfp: "/images/userIconx96.png",
//             name: "Ruparel",
//             grad_year : "2018"
//         }
//     ]},
//     {
//     "2017": [
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2017"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2017"
//         },
//         {
//             user_id: "user3",
//             userPfp: "/images/dylan.png",
//             name: "Dylan Lu",
//             grad_year : "2017"
//         },
//         {
//             user_id: "user4",
//             userPfp: "/images/userIconx96.png",
//             name: "Ruparel",
//             grad_year : "2017"
//         }
//     ]},
//     {
//     "2016": [
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2016"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2016"
//         },
//         {
//             user_id: "user3",
//             userPfp: "/images/dylan.png",
//             name: "Dylan Lu",
//             grad_year : "2016"
//         },
//         {
//             user_id: "user4",
//             userPfp: "/images/userIconx96.png",
//             name: "Ruparel",
//             grad_year : "2016"
//         }
//     ]},
//     {
//     "2015": [
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2015"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2015"
//         },
//         {
//             user_id: "user3",
//             userPfp: "/images/dylan.png",
//             name: "Dylan Lu",
//             grad_year : "2015"
//         },
//         {
//             user_id: "user4",
//             userPfp: "/images/userIconx96.png",
//             name: "Ruparel",
//             grad_year : "2015"
//         }
//     ]},
//     {
//     "2014": [
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2014"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2014"
//         },
//         {
//             user_id: "user3",
//             userPfp: "/images/dylan.png",
//             name: "Dylan Lu",
//             grad_year : "2014"
//         },
//         {
//             user_id: "user4",
//             userPfp: "/images/userIconx96.png",
//             name: "Ruparel",
//             grad_year : "2014"
//         }
//     ]},
//     {
//     "2013": [
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2013"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2013"
//         },
//         {
//             user_id: "user3",
//             userPfp: "/images/dylan.png",
//             name: "Dylan Lu",
//             grad_year : "2013"
//         },
//         {
//             user_id: "user4",
//             userPfp: "/images/userIconx96.png",
//             name: "Ruparel",
//             grad_year : "2013"
//         }
//     ]},
//     {
//         "2012": [
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2012"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2012"
//         },
//         {
//             user_id: "user3",
//             userPfp: "/images/dylan.png",
//             name: "Dylan Lu",
//             grad_year : "2012"
//         },
//         {
//             user_id: "user4",
//             userPfp: "/images/userIconx96.png",
//             name: "Ruparel",
//             grad_year : "2012"
//         }
//     ]},
//     {
//         "2011": [
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2011"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2011"
//         },
//         {
//             user_id: "user3",
//             userPfp: "/images/dylan.png",
//             name: "Dylan Lu",
//             grad_year : "2011"
//         },
//         {
//             user_id: "user4",
//             userPfp: "/images/userIconx96.png",
//             name: "Ruparel",
//             grad_year : "2011"
//         }
//     ]},
//     {
//         "2010": [
//         {
//             user_id: "user1",
//             userPfp: "/images/userIconx96.png",
//             name: "Jia Ruparel",
//             grad_year : "2010"
//         },
//         {
//             user_id: "user2",
//             userPfp: "/images/userIconx96.png",
//             name: "Veereeeeeeeeeeeeeeeeeee Ruparel",
//             grad_year : "2010"
//         },
//         {
//             user_id: "user3",
//             userPfp: "/images/dylan.png",
//             name: "Dylan Lu",
//             grad_year : "2010"
//         },
//         {
//             user_id: "user4",
//             userPfp: "/images/userIconx96.png",
//             name: "Ruparel",
//             grad_year : "2010"
//         }
//     ]}
// ];
  // db.query(
  //   sql`
  //   SELECT name, gradYear, userID FROM people
  //   WHERE gradYear BETWEEN ${beginYear} AND ${endYear}
  //   ORDER BY name
  // `
  // ).forEach((alum) => {
  //   result[alum.gradYear] ||= [];
  //   result[alum.gradYear].push({
  //     name: alum.name,
  //     userID: alum.userID ?? undefined
  //   });
  // });
  res.json(result);
}
