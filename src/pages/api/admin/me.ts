import type { NextApiRequest, NextApiResponse } from "next";

const userDetail = { username: "Clement" };

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(userDetail);
};

export default handler;
