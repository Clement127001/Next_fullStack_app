import type { NextApiResponse } from "next";

const errorHandlingMiddlware = (err: any, res: NextApiResponse) => {
  let customError = {
    message: err.message || "Something, went wrong. Please try again later",
    statusCode: err.statusCode || 500,
  };

  //cast error in mongo
  if (err.name === "CastError") {
    customError.message = `Invalid id: ${err.value._id}`;
    customError.statusCode = 400;
  }

  //unique violation
  if (err.code === 11000) {
    customError.statusCode = 400;
    customError.message = `${Object.keys(err.keyValue)} already exists`;
  }
  return res
    .status(customError.statusCode)
    .json({ message: customError.message });
};

export default errorHandlingMiddlware;
