import { UserInterface } from "./model/UserInterface";

export function performPurchase(
  user: UserInterface,
  value: number
): UserInterface | undefined {
  if (user.balance < value) {
    return undefined;
  } else {
    const newUser = { name: user.name, balance: user.balance - value };
    return newUser;
  }
}



// a) *Faça um teste com um usuário com o saldo maior do que o valor de compra*

// b) *Faça um teste com um usuário com o saldo igual ao valor de compra*

// c) *Faça um teste com um usuário com o saldo menor do que o valor de compra*