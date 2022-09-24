import { performPurchase } from "../src"
import { UserInterface } from "../src/model/UserInterface"

describe("Testing performPurchase()", () => {

  test("Should return true when balance is 1000 and value is 100", () => {
    // expect.assertions(1)
    const user:UserInterface = {name: "Ricardinho", balance: 1000}
    const result = performPurchase(user, 100)
    expect(result?.balance).toBe(900)
  })

  test("Should return true when balance is 100 and value is 100", () => {
    const user:UserInterface = {name: "Ricardinho", balance: 100}
    const result = performPurchase(user, 100)
    expect(result?.balance).toBe(0)
  })

  test("Should return false when balance is 100 and value is 1000", () => {
    const user:UserInterface = {name: "Ricardinho", balance: 100}
    const result = performPurchase(user, 1000)
    expect(result?.balance).toBe(undefined)
  })

})    
