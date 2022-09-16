import { CustomError } from "./CustomError";

export class IncompletePost extends CustomError {
  constructor() {
    super(400, ' photo, description, type and authorId must be provided');
  }
}
