import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { InputCreateUserDTO } from "../model/DTOs/InputCreateUserDTO";
import { InputDeleteUserDTO } from "../model/DTOs/InputDeleteUserDTO";
import { InputFollowUserDTO } from "../model/DTOs/InputFollowUserDTO";
import { InputGetOtherProfileDTO } from "../model/DTOs/InputGetOtherProfileDTO";
import { InputLoginDTO } from "../model/DTOs/InputLoginDTO";
import { InputUnfollowUserDTO } from "../model/DTOs/InputUnfollowUserDTO";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, name, password, role } = req.body;

      const inputCreateUser: InputCreateUserDTO = {
        email,
        name,
        password,
        role,
      };

      const token = await this.userBusiness.createUser(inputCreateUser);

      const response = { access_token: token };

      res.status(201).send(response);
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  };

  public login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      const inputLogin: InputLoginDTO = { email, password };

      const token = await this.userBusiness.login(inputLogin);

      const response = { access_token: token };

      res.status(201).send(response);
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  };

  public getProfile = async (req: Request, res: Response): Promise<void> => {
    try {
      const token: string = req.headers.authorization as string;

      const profile = await this.userBusiness.getProfile(token);

      res.status(201).send(profile);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public getOtherProfile = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const token: string = req.headers.authorization as string;
      const { id } = req.params;

      const inputGetOtherProfile: InputGetOtherProfileDTO = { id, token };

      const profile = await this.userBusiness.getOtherProfile(
        inputGetOtherProfile
      );

      res.status(201).send(profile);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public followUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const token: string = req.headers.authorization as string;
      const userToFollowId: string = req.body.userToFollowId;

      const inputFollowUser: InputFollowUserDTO = { token, userToFollowId };

      await this.userBusiness.followUser(inputFollowUser);

      res.status(201).send("Followed successfully");
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public unfollowUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const token: string = req.headers.authorization as string;
      const userToUnfollowId: string = req.body.userToUnfollowId;

      const inputUnfollowUser: InputUnfollowUserDTO = {
        token,
        userToUnfollowId,
      };

      await this.userBusiness.unfollowUser(inputUnfollowUser);

      res.status(201).send("Unfollowed successfully");
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public getFeed = async (req: Request, res: Response): Promise<void> => {
    try {
      const token = req.headers.authorization as string;

      const feed = await this.userBusiness.getFeed(token);

      res.status(200).send(feed);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const token = req.headers.authorization as string;
      const { id } = req.params;

      const inputDeleteUser: InputDeleteUserDTO = { token, id };

      await this.userBusiness.deleteUser(inputDeleteUser);

      res.status(200).send("User Deleted");
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };
}
