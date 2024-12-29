import type { NextApiRequest, NextApiResponse } from "next";
import isNil from "lodash/isNil";
import user from "@/models/user";
import dbConnect from "@/lib/dbConnect";
import BadRequestError from "@/errors/badRequestError";
import errorHandlingMiddlware from "@/middlewares/handleError";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const userData = req.body.userData;
    console.log(req.body);

    if (isNil(userData))
      throw new BadRequestError("Please provide user information");

    const { name, email, password } = userData;

    if (isNil(name) || isNil(email) || isNil(password))
      throw new BadRequestError("Please provide all information");

    await dbConnect();

    const userDetail = await user.findOne({ name });

    if (userDetail) {
      res.status(403).json({ message: "User already exists" });
      return;
    } else {
      await user.create(userData);
      res.status(201).json({ message: "User created successfully" });
    }
  } catch (err) {
    errorHandlingMiddlware(err, res);
  }
}
