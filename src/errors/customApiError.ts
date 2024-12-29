class CustomApiError extends Error {
  statusCode: number = 200;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default CustomApiError;
