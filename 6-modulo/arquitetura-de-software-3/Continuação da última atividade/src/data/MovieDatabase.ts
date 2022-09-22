import { BaseDatabase } from "./BaseDatabase";

export class Moviedatabase extends BaseDatabase {
  public postMovie = async (body: {
    id: string;
    title: string;
    description: string;
    duration_in_minutes: number;
    year_of_release: number;
  }): Promise<void> => {
    try {
      await Moviedatabase.connection("LABEFLIX_MOVIE").insert(body);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
