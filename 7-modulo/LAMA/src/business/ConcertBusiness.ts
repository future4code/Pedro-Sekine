import { weekdays } from "moment";
import { validatorWeekday } from "../constants/validatorWeekday";
import { BandDatabase } from "../data/BandDatabase";
import { CustomError } from "../error/CustomError";
import { ConcertRepository } from "../model/ConcertRepository";
import { DbConcertDTO } from "../model/DbConcertDTO";
import { DBBandDTO } from "../model/DTOs/DBBandDTO";
import { InputPotentialConflictsDTO } from "../model/InputPotentialConflictsDTO";
import { InputSignupConcertDTO } from "../model/InputSignupConcertDTO";
import { OutputGetConcertsDTO } from "../model/OutputGetConcertsDTO";
import { IdGenerator } from "../services/IdGenerator";

export class ConcertBusiness {
  constructor(private concertDatabase: ConcertRepository) {}
  public signup = async (input: InputSignupConcertDTO): Promise<void> => {
    try {
      if (!input.endTime || !input.id || !input.startTime || !input.weekDay) {
        throw new CustomError(400, "Incomplete Request.");
      }

      validatorWeekday(input.weekDay);

      if (
        typeof input.startTime === "string" ||
        typeof input.endTime === "string"
      ) {
        throw new CustomError(
          400,
          "Start Time and End Time must be full numbers. Don't use 'h', ':' or ','"
        );
      }

      if (
        (input.startTime % 2 !== 0 && input.startTime % 2 !== 1) ||
        (input.endTime % 2 !== 0 && input.endTime % 2 !== 1)
      ) {
        throw new CustomError(
          400,
          "Shows must happen on full hours: 8, 9, 10, ... 23."
        );
      }
      if (input.startTime < 8 || input.startTime > 22) {
        throw new CustomError(400, "Start time must be in between 8 and 22");
      }
      if (input.endTime < 9 || input.endTime > 23) {
        throw new CustomError(400, "End time must be in between 9 and 23");
      }
      if (input.endTime <= input.startTime) {
        throw new CustomError(
          400,
          "Start time must be lower than the finish time"
        );
      }

      const bandDatabase = new BandDatabase();
      const bandSearchResult: DBBandDTO[] =
        await bandDatabase.searchBandIdOrName(input.id);
      if (!bandSearchResult.length) {
        throw new CustomError(404, "Band not found.");
      }

      // validation conflict with other concerts
      // get concerts in the same day DB
      const inputPotentialConflicts: InputPotentialConflictsDTO = {
        weekDay: input.weekDay,
        startTime: input.startTime,
        endTime: input.endTime,
      };

      const potentialConflicts: DbConcertDTO[] =
        await this.concertDatabase.getPotentialConflicts(
          inputPotentialConflicts
        );
      // get comparable concerts DB
      // COMPARE CONFLICTS BUSINESS if there the array has items. IF NOT, create concert
      if (potentialConflicts.length) {
        // fazer um filter no array e ver se o meu estart time ou end time está entre os valores do evento
        const certainConflicts = potentialConflicts.filter((concert) => {
          if (
            (input.startTime > concert.start_time &&
              input.startTime < concert.end_time) ||
            (input.endTime > concert.start_time &&
              input.endTime < concert.end_time) ||
            (input.startTime < concert.start_time &&
              input.endTime > concert.end_time) ||
            input.startTime === concert.start_time ||
            input.endTime === concert.end_time
          ) {
            return true;
          } else {
            return false;
          }
        });

        if (certainConflicts.length) {
          throw new CustomError(
            400,
            "Concert conflict. Choose a different time for the concert."
          );
        }
      }

      // concert creation
      const generateId = new IdGenerator();
      const id = generateId.generate();

      const formattedInput: DbConcertDTO = {
        id: id,
        week_day: input.weekDay.toLowerCase(),
        start_time: input.startTime,
        end_time: input.endTime,
        band_id: input.id,
      };

      await this.concertDatabase.signup(formattedInput);
    } catch (error: any) {
      throw new CustomError(error.status, error.message);
    }
  };

  public getConcerts = async (
    weekDay: string
  ): Promise<OutputGetConcertsDTO[]> => {
    try {
      validatorWeekday(weekDay);

      const queryResult = await this.concertDatabase.getConcerts(weekDay);

      if (!queryResult.length) {
        throw new CustomError(404, "No bands registered for this day.");
      }

      const formattedOutput: OutputGetConcertsDTO[] = queryResult.map((item) => {
        return { name: item.name, musicGenre: item.music_genre };
      });

      return formattedOutput;
    } catch (error: any) {
      throw new CustomError(error.status, error.message);
    }
  };
}
