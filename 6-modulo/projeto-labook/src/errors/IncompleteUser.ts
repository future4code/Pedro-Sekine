import { CustomError } from "./CustomError";

export class IncompleteUser extends CustomError {
  constructor() {
    super(406, '"name", "email" and "password" must be provided');
  }
}
