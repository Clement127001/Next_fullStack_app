import CustomApiError from "./customApiError";

class BadRequestError extends CustomApiError {
  constructor(message: string) {
    super(message, 400);
  }
}

export default BadRequestError;
