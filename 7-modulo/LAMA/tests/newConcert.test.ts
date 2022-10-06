import { validatorWeekday } from "../src/constants/validatorWeekday";

describe("testing the creation of Concerts", () => {
  test("Weekday validation should return false for everythingthing but 'friday', 'saturday' or sunday", () => {
    const input1 = "monday";

    const input4 = "day";
    const input5 = "3";
    try {
      validatorWeekday(input1);
    } catch (error: any) {
      expect(error.status).toBe(400);
      expect(error.message).toBe(
        "Show must happen on a Friday, Saturday or on a Sunday."
      );
    }
  });
  describe("Should be case insensitive and return true for entries.", () => {
    const input2 = "FRIDAY";
    const input3 = "SaturDAY";
    const result2 = validatorWeekday(input2);
    const result3 = validatorWeekday(input3);

    expect(result2).toBe(true);
    expect(result3).toBe(true);
  });
});
