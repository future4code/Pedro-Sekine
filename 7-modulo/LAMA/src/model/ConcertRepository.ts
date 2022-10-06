import { DbConcertDTO } from "./DbConcertDTO";
import { DbGetConcertsDTO } from "./DbGetConcertsDTO";
import { InputPotentialConflictsDTO } from "./InputPotentialConflictsDTO";

export interface ConcertRepository {
  signup: (input: DbConcertDTO) => Promise<void>;

  getPotentialConflicts: (
    input: InputPotentialConflictsDTO
  ) => Promise<DbConcertDTO[]>;

  getConcerts: (weekDay: string) => Promise<DbGetConcertsDTO[]>;
}
