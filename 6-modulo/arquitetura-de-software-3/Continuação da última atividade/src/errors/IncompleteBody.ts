import { CustomError } from "./CustomError";

export class IncompleteBody extends CustomError {
  constructor() {
    super(400, "Make sure to fill all the body fields.");
  }
}
