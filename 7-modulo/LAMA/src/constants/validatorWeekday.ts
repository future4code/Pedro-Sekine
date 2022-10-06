import { CustomError } from "../error/CustomError";

export const validatorWeekday = (input: string): true | void => {
  try {
    if (
      input.toLowerCase() !== "friday" &&
      input.toLowerCase() !== "saturday" &&
      input.toLowerCase() !== "sunday"
    ) {
      throw new CustomError(
        400,
        "Show must happen on a Friday, Saturday or on a Sunday."
      );
    }
    return true;
  } catch (error: any) {
    throw new CustomError(error.status, error.message);
  }
};
