import dbConnect from "@/lib/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect();
  res.status(200).json({ name: "John Doe" });
}
