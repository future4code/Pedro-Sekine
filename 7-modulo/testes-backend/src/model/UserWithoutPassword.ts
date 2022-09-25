import { USER_ROLES } from "./User";

export interface UserWithoutPassword {
  id: string;
  name: string;
  email: string;
  role: USER_ROLES;
}
