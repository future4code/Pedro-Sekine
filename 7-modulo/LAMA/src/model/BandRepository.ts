import { DBBandDTO } from "./DTOs/DBBandDTO";
import { PostBandDTO } from "./DTOs/PostBandDTO";

export interface BandRepository {
  searchBandName: (name: string) => Promise<DBBandDTO[]>;
  postBand: (band: PostBandDTO) => Promise<void>;
  searchBandIdOrName: (query: string) => Promise<DBBandDTO[]>;
}
