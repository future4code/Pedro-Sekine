import { ordenaArrayCrescente } from "./ex4";

describe("Valida ordenação de arrays", () => {
  test("Return [1, 2, 3] for the input [3, 2, 1]", () => {
    const arrayOrdenada = ordenaArrayCrescente([3, 2, 1]);

    expect(arrayOrdenada).toEqual([1, 2, 3]);
  });
  test("Return [1, 3, 4, 7] for the input [4, 7, 1, 3]", () => {
    const arrayOrdenada = ordenaArrayCrescente([4, 7, 1, 3]);

    expect(arrayOrdenada).toEqual([1, 3, 4, 7]);
  });
  test("Return [-4, -1, 0, 6, 20] for the input [20, -1, -4, 0, 6]", () => {
    const arrayOrdenada = ordenaArrayCrescente([20, -1, -4, 0, 6]);

    expect(arrayOrdenada).toEqual([-4, -1, 0, 6, 20]);
  });
});
