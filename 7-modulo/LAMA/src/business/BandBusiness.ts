import { CustomError } from "../error/CustomError";
import { BandRepository } from "../model/BandRepository";
import { DBBandDTO } from "../model/DTOs/DBBandDTO";
import { InputRegisterBandDTO } from "../model/DTOs/InputRegisterBandDTO";
import { PostBandDTO } from "../model/DTOs/PostBandDTO";
import { OutputBandDTO } from "../model/OutputBandDTO";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness {
  constructor(public bandDatabase: BandRepository) {}
  public signup = async (
    input: InputRegisterBandDTO,
    iValidatorToken: (i: InputRegisterBandDTO) => {},
    iValidatorTokenPermission: (i: InputRegisterBandDTO) => {},
    iValidatorBandExistance: (i: InputRegisterBandDTO) => Promise<DBBandDTO[]>
  ): Promise<void> => {
    try {
      const validationToken = iValidatorToken(input);
      if (!validationToken) {
        throw new CustomError(400, "Invalid token");
      }

      const validationPermission = iValidatorTokenPermission(input);
      if (!validationPermission) {
        throw new CustomError(400, "Not allowed.");
      }

      const validationExistance = await iValidatorBandExistance(input);
      if (validationExistance.length) {
        throw new CustomError(400, "Band already Registered.");
      }

      // const bandDatabase = new BandDatabase();

      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();

      const newBand: PostBandDTO = {
        id: id,
        name: input.name,
        music_genre: input.musicGenre,
        responsible: input.responsible,
      };
      // insert band
      await this.bandDatabase.postBand(newBand);

      //preciso remover essa dependência aqui
    } catch (error: any) {
      throw new CustomError(error.status, error.message);
    }
  };

  public searchBand = async (query: string): Promise<OutputBandDTO> => {
    try {

      // se nn tiver input
      if(!query){
        throw new CustomError(400,"Empty query. Send band name or ID and a param.")
      }

      // comunicar com o DB WHERE id = string ORWHERE name = string
      const queryResult: DBBandDTO[] =
        await this.bandDatabase.searchBandIdOrName(query);

      if (!queryResult.length){
        throw new CustomError(404, "Band not found.")
      }

      const camelCaseResult: OutputBandDTO[] = queryResult.map((value) => {
        return {
          id: value.id,
          musicGenre: value.music_genre,
          name: value.name,
          responsible: value.responsible,
        };
      });
      return camelCaseResult[0]
    } catch (error: any) {
      throw new CustomError(error.status, error.message);
    }
  };
}
