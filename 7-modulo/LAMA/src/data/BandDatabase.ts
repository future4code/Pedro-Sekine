import { CustomError } from "../error/CustomError";
import { DBBandDTO } from "../model/DTOs/DBBandDTO";
import { PostBandDTO } from "../model/DTOs/PostBandDTO";
import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {
  public searchBandName = async (name: string): Promise<DBBandDTO[]> => {
    const queryResult: DBBandDTO[] = await BaseDatabase.connection(
      "LAMA_BANDAS"
    )
      .select()
      .where("name", name);

    return queryResult;
  };

  public postBand = async (band: PostBandDTO): Promise<void> => {
    // COMPLETAR AQUI

    await BaseDatabase.connection("LAMA_BANDAS").insert(band);
  };

  public searchBandIdOrName = async (query: string): Promise<DBBandDTO[]> => {
    try {
      const queryResult: DBBandDTO[] = await BandDatabase.connection(
        "LAMA_BANDAS"
      )
        .select()
        .where("id", query)
        .orWhere("name", query);
      return queryResult;
    } catch (error: any) {
      throw new CustomError(
        400,
        error.sqlMessage || "Something happened. Try again."
      );
    }
  };
}
