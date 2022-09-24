import { users } from "../src/users";
import { Casino, LOCATION, verifyAge } from "../src/ex2/ex2";

describe("Testing the consistency of verifyAge", () => {
  test("Should return true for 1 American allowed in a Casino in the EUA", () => {
    const casino: Casino = {
      name: "casino EUA",
      location: LOCATION.EUA,
    };
    const result = verifyAge(casino, users);
    console.log(result);

    expect(result.americans.allowed.length).toEqual(1);
  });
  test("Should return true for 3 Brazilians allowed in a Casino in Brazil", () => {
    const casino: Casino = {
      name: "casino Brazil",
      location: LOCATION.BRAZIL,
    };
    const result = verifyAge(casino, users);
    console.log(result);

    expect(result.brazilians.allowed.length).toEqual(3);
  });
});
