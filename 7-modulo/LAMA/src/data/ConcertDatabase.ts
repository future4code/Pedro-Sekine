import { CustomError } from "../error/CustomError";
import { ConcertRepository } from "../model/ConcertRepository";
import { DbConcertDTO } from "../model/DbConcertDTO";
import { DbGetConcertsDTO } from "../model/DbGetConcertsDTO";
import { InputPotentialConflictsDTO } from "../model/InputPotentialConflictsDTO";
import { BaseDatabase } from "./BaseDatabase";

export class ConcertDatabase extends BaseDatabase implements ConcertRepository {
  public signup = async (input: DbConcertDTO): Promise<void> => {
    try {
      await ConcertDatabase.connection("LAMA_SHOWS").insert(input);
    } catch (error: any) {
      throw new CustomError(500, "Something happened. Please Try again.");
    }
  };

  public getPotentialConflicts = async (
    input: InputPotentialConflictsDTO
  ): Promise<DbConcertDTO[]> => {
    try {
      const queryResult = await ConcertDatabase.connection("LAMA_SHOWS")
        .select()
        .where("week_day", input.weekDay)
        .andWhere(function () {
          this.where("start_time", "<", input.endTime).orWhere(
            "end_time",
            ">",
            input.startTime
          );
        });

      return queryResult;
    } catch (error: any) {
      throw new CustomError(500, "Something happened. Please Try again.");
    }
  };

  public getConcerts = async (weekDay: string): Promise<DbGetConcertsDTO[]> => {
    try {
      const queryResult = await ConcertDatabase.connection("LAMA_SHOWS")
        .join("LAMA_BANDAS", "LAMA_SHOWS.band_id", "LAMA_BANDAS.id")
        .select("LAMA_BANDAS.name", "LAMA_BANDAS.music_genre")
        .where("LAMA_SHOWS.week_day", weekDay);

      return queryResult;
    } catch (error: any) {
      throw new CustomError(500, "Something happened. Please Try again.");
    }
  };
}
