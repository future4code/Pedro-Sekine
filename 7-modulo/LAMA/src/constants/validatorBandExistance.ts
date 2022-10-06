import { BandDatabase } from "../data/BandDatabase";
import { DBBandDTO } from "../model/DTOs/DBBandDTO";
import { InputRegisterBandDTO } from "../model/DTOs/InputRegisterBandDTO";

export const validatorBandExistance = async (
  input: InputRegisterBandDTO
): Promise<DBBandDTO[]> => {
  const bandDatabase = new BandDatabase();
  const queryResult: DBBandDTO[] = await bandDatabase.searchBandName(
    input.name
  );

  return queryResult;
};
