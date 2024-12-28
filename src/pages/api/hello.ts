import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
  console.log("hi there");
  res.status(200).json({ name: "John Doe" });
}
