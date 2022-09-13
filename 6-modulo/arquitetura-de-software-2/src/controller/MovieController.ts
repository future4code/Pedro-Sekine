import express, { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
  public postMovie = async (req: Request, res: Response) => {
    try {
      const { title, description, duration, release } = req.body;
      const input: {
        title: string;
        description: string;
        duration: number;
        release: number;
      } = {title, description, duration, release };
      const movieBusiness = new MovieBusiness();

      res.status(201).send("Movie created successfuly")
      await movieBusiness.postMovie(input);
    } catch (error: any) {
      res.send(error.message);
    }
  };
}
