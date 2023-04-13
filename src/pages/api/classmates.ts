import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  email: string;
};

export const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // connect to database
  // fetch classmates

  res.status(200).json({
    name: "Dylan Lu",
    email: "email@email.com",
  });
};

export default handler;
