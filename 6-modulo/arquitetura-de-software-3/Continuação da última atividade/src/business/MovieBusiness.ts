import { Moviedatabase } from "../data/MovieDatabase";
import { InputMovieDTO } from "../model/InputMovieDTO";
import { PostMovioDTO } from "../model/PostMovieDTO";
import { generateID } from "../services/generateID";

export class MovieBusiness {
  public postMovie = async (input: InputMovieDTO): Promise<void> => {
    try {
      const { title, description, duration, release } = input;

      if (!title || !description || !duration || !release) {
        throw new Error("Please fill all the fields");
      }

      if (duration < 0) {
        throw new Error("duration must be a positive number");
      }
      if (release < 1900) {
        throw new Error("Make sure that release date is correct");
      }

      const id = generateID();

      const body: PostMovioDTO = {
        id: id,
        title: title,
        description: description,
        duration_in_minutes: duration,
        year_of_release: release,
      };

      const movieDatabase = new Moviedatabase();

      await movieDatabase.postMovie(body);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
