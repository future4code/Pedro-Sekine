// type Transaction = {
//   description: string,
//   value: number,
//   date: string
// }

export class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }
}

export class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  public getCPF = () => {
    return this.cpf;
  };

  public getName = () => {
    return this.name;
  };

  public getAge = () => {
    return this.age;
  };

  public getBalance = () => {
    return this.balance
  }

  public getTransaction = () => {
    return this.transactions
  }

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
}

export class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts
  }
}
