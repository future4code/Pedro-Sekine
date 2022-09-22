export class CustomError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

export class ShortPassword extends CustomError {
  constructor() {
    super(400, "Password must have at least 6 characters.");
  }
}

export class CreateUserDataMissing extends CustomError {
  constructor() {
    super(
      400,
      "Data missing. Make sure to send 'email', 'name' and 'password'"
    );
  }
}

export class LoginDataMissing extends CustomError {
  constructor() {
    super(400, "Data missing. Make sure to send 'email' and 'password'");
  }
}

export class EmailAlreadyRegistered extends CustomError {
  constructor() {
    super(400, "Email already registered.");
  }
}

export class EmailNotRegistered extends CustomError {
  constructor() {
    super(404, "Email not registered.");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Invalid Password.");
  }
}

export class MissingToken extends CustomError {
  constructor() {
    super(400, "Token missing.");
  }
}

export class ProfileNotFound extends CustomError {
  constructor() {
    super(404, "Profile Not found. Please log in again.");
  }
}

export class ProfileToFollowNotFound extends CustomError {
  constructor() {
    super(404, "Trying to follow an unexistent user. Please try again.");
  }
}

export class RecipeNotFound extends CustomError {
  constructor() {
    super(404, "Recipe Not found. Please try again.");
  }
}

export class MissingDataRecipe extends CustomError {
  constructor() {
    super(400, "Request Incomplete. Make sure to send title and description.");
  }
}

export class MissingFollowInformation extends CustomError {
  constructor() {
    super(
      400,
      "Request incomplete. Make sure to send userToFollowId in you request."
    );
  }
}

export class MissingUnfollowInformation extends CustomError {
  constructor() {
    super(
      400,
      "Request incomplete. Make sure to send userToUnfollowId in you request."
    );
  }
}

export class AlreadyFollowing extends CustomError {
  constructor() {
    super(400, "Such a connection between users already exist.");
  }
}

export class NotFollowing extends CustomError {
  constructor() {
    super(400, "Cannot unfollow. First, the user need to follow the other.");
  }
}

export class NotARole extends CustomError {
  constructor() {
    super(400, "Role must be either 'normal' or 'admin'.");
  }
}

export class MissingDataEditRecipe extends CustomError {
  constructor() {
    super(
      400,
      "Request Incomplete. Make sure to send title and description of the edited recipe alongside with its id."
    );
  }
}

export class MissingDataDeleteRecipe extends CustomError {
  constructor() {
    super(
      400,
      "Request Incomplete. Make sure to send the recipes' id."
    );
  }
}

export class LimitEditRecipe extends CustomError{
  constructor() {
    super(400, "Users can only edit recipes they created.")
  }
}

export class NoPermission extends CustomError{
  constructor() {
    super(400, "You don't have the permission to do that.")
  }
}