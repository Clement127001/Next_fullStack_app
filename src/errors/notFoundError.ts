import CustomApiError from "@/errors/customApiError";

class NotFoundError extends CustomApiError {
  constructor(messsage: string) {
    super(messsage, 404);
  }
}

export default NotFoundError;
