import { DatabaseCreateUserDTO } from "../model/DTOs/DatabaseCreateUserDTO";
import { DatabaseUnfollowUserDTO } from "../model/DTOs/DatabaseUnfollowUserDTO";
import { OutputFollowUserDTO } from "../model/DTOs/OutputFollowUserDTO";
import { OutputUserDTO } from "../model/DTOs/OutputUserDTO";
import { ResponseFeedDTO } from "../model/DTOs/ResponseFeedDTO";

export interface UserRepository {
  createUser(userData: DatabaseCreateUserDTO): Promise<void>;
  searchUserByEmail(email: string): Promise<OutputUserDTO[]>;
  searchUserById(id: string): Promise<OutputUserDTO[]>;
  followUser(databaseObject: OutputFollowUserDTO): Promise<void>;
  unfollowUser(databaseObject: DatabaseUnfollowUserDTO): Promise<void>;
  searchConnectionById(
    userFollowerId: string,
    userToFollowId: string
  ): Promise<OutputUserDTO[]>;
  getFeed(id: string): Promise<ResponseFeedDTO[]>;
  unfollowAll(id: string): Promise<void>;
  deleteUser(id: string): Promise<void>;
}
