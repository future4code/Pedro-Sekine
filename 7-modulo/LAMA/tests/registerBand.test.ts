import { BandBusiness } from "../src/business/BandBusiness";
import { BandController } from "../src/controller/BandController";
import { BandRepository } from "../src/model/BandRepository";
import { DBBandDTO } from "../src/model/DTOs/DBBandDTO";
import { InputRegisterBandDTO } from "../src/model/DTOs/InputRegisterBandDTO";
import { PostBandDTO } from "../src/model/DTOs/PostBandDTO";
import axios from "axios";

class MockDatabase implements BandRepository {
  public searchBandName = async (name: string): Promise<DBBandDTO[]> => {
    return [];
  };
  public postBand = async (band: PostBandDTO): Promise<void> => {};
  public searchBandIdOrName = async (query: string): Promise<DBBandDTO[]> => {
    return [];
  };
}

const mockDB = new MockDatabase();

class MockBandBusiness extends BandBusiness {
  searchBandName = async (name: string): Promise<DBBandDTO[]> => {
    return [];
  };
  postBand = async (band: PostBandDTO): Promise<void> => {};
}
const mockBandBusiness = new MockBandBusiness(mockDB);

describe("Testing some inputs for the creation of a band", () => {
  test("Should return false para token inválido", async () => {
    try {
      const inputUser: InputRegisterBandDTO = {
        token: "",
        name: "",
        musicGenre: "",
        responsible: "",
      };

      const valiToken = jest.fn(() => {
        return false;
      });
      const valiPermission = jest.fn(() => {
        return true;
      });
      const valiExistance = jest.fn(async () => {
        return [];
      });

      const bandBusiness = new BandBusiness(mockDB);
      await bandBusiness.signup(
        inputUser,
        valiToken,
        valiPermission,
        valiExistance
      );
    } catch (err: any) {
      expect(err.message).toBe("Invalid token");
    }
  });
  // test("Should return the message Band Registered for the request made.", async () => {
  //   const bandController = new BandController(mockDB, mockBandBusiness);

  //   const inputUser: InputRegisterBandDTO = {
  //     token: "",
  //     name: "",
  //     musicGenre: "",
  //     responsible: "",
  //   };

  //   try {
  //     const result = await axios.post(
  //       "http://localhost:3003/band/signup",
  //       inputUser,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZhMWRlNGVhLTljZjItNDUxYS05NmJkLWIzMzM2OTFhMjkyNiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY2NDg2Nzg5NywiZXhwIjoxNjY0ODY4NDk3fQ.2BkymXDSQYYr-1PN2M1YFUgSQdY6kTIQIbasUQU7CXg",
  //         },
  //       }
  //     );

  //     expect(result.status).toBe(201);
  //     expect(result.data).toEqual("Band registered.");
  //   } catch (error: any) {
  //     console.log("message", error.message);
  //   }
  // });
});
