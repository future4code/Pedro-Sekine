import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("return true for [a,a,b,c]", () => {
        const isDuplicate = checaItensDuplicados(["a", "a", "b", "c"])

        expect(isDuplicate).toEqual(true)
    })
    test("return true for [f,d,e,f]", () => {
        const isDuplicate = checaItensDuplicados(["f", "d", "e", "f"])

        expect(isDuplicate).toEqual(false)
    })
    test("return true for [5, 5, 3, 6, 5, 6]", () => {
        const isDuplicate = checaItensDuplicados([5, 5, 3, 6, 5, 6])

        expect(isDuplicate).toEqual(true)
    })
    test("return false for an empty array []", () => {
        const isDuplicate = checaItensDuplicados([])

        expect(isDuplicate).toEqual(false)
    })
    test("return true para uma array com duas arrays vazias [[],[]]", () => {
        const isDuplicate = checaItensDuplicados([[],[]])

        expect(isDuplicate).toEqual(true)
    })

});
