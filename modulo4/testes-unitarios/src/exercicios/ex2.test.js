import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
    it("retorna true para 'mirim'", () => {
        const ehPalindromo = checaPalindromo("mirim");
        expect(ehPalindromo).toEqual(true);
    });

    test("return true for 'arara'", () => {
        const ehPalindromo = checaPalindromo("arara");

        expect(ehPalindromo).toEqual(true);
    });

    test("return true for 'Socorram-me subi no onibus em marrocos'", () => {
        const ehPalindromo = checaPalindromo(
            "Socorram-me subi no onibus em marrocos"
        );

        expect(ehPalindromo).toEqual(true);
    });

    test("return true for 'asa'", () => {
      const ehPalindromo = checaPalindromo("asa")

      expect(ehPalindromo).toEqual(true)
    })

    test("return true for 'A mãe te ama'", () => {
      const ehPalindromo = checaPalindromo("A mãe te ama")

      expect(ehPalindromo).toEqual(true)
    })
});
