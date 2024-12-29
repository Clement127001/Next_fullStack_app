import CustomApiError from "@/errors/customApiError";

class UnAuthorisedError extends CustomApiError {
  constructor(message: string) {
    super(message, 401);
  }
}

export default UnAuthorisedError;
