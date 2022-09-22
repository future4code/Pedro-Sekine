import express, { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { InputMovieDTO } from "../model/InputMovieDTO";

export class MovieController {
  public postMovie = async (req: Request, res: Response) => {
    try {
      const { title, description, duration, release } = req.body;
      const input: InputMovieDTO = { title, description, duration, release };
      const movieBusiness = new MovieBusiness();

      res.status(201).send("Movie created successfuly");
      await movieBusiness.postMovie(input);
    } catch (error: any) {
      res.send(error.message);
    }
  };
}
