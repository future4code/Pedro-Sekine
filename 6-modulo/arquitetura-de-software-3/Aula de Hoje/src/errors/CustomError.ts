export class CustomError extends Error {
  constructor(statusCode: number, message: string){
    super(message)
  }
}

export class InvalidDescription extends CustomError {
  constructor() {
    super(400, "Invalid description. Make sure it cointains at least 100 characters.")
  }
}