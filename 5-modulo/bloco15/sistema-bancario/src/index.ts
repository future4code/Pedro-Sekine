import express, { Request, Response } from "express";
import cors from "cors";
import data from "./data.json";
import { writeFile } from "fs";
import { calculateAge } from "./functions/calculateAge";
import { calculateCPF } from "./functions/calculateCPF";
import { validateDate } from "./functions/validateDate";
import { isDatePast } from "./functions/isDatePast";
import { getToday } from "./functions/getToday";

const app = express();

app.use(express.json());
app.use(cors());

type Account = {
  name: string;
  CPF: string;
  birthday: string;
  balance: string;
  history: Transaction[];
};

type Transaction = {
  value: string;
  date: string;
  description: string;
};

const errors = {
  NOT_OLD_ENOUGH: {
    status: 400,
    message: "User must be at least 18 years old",
  },
  CPF_ALREADY_REGISTERED: {
    status: 400,
    message: "This CPF has already been used",
  },
  CPF_NOT_FOUND: {
    status: 404,
    message: "CPF not found",
  },
  USER_NOT_FOUND: {
    status: 404,
    message: "User not found",
  },
  INVALID_DATE: {
    status: 400,
    message:
      "Due Date cannot contain dates from the past. Choose another date or leave it empty",
  },
  INSUFFICIENT_FUNDS: {
    status: 401,
    message: "You don't have enough money to make such a transaction",
  },
  NO_PAST_TRANSACTIONS: {
    status: 400,
    message: "There are not past transactions in this account.",
  },
  ORIGIN_NOT_FOUND: {
    status: 404,
    message: "Origin account not found",
  },
  DESTINATION_NOT_FOUND: {
    status: 404,
    message: "Destination account not found",
  },
};

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(data);
});

app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, CPF, birthday } = req.body;
    const apropriateAge = calculateAge(birthday);

    if (!apropriateAge) {
      throw new Error(errors.NOT_OLD_ENOUGH.message);
    }

    const apropriateCPF = calculateCPF(CPF);

    if (!apropriateCPF) {
      throw new Error(errors.CPF_ALREADY_REGISTERED.message);
    }

    const newUser: Account = {
      name: name,
      CPF: CPF,
      birthday: birthday,
      balance: "0",
      history: [],
    };

    const newUserList = [...data, newUser];

    writeFile(
      "/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/sistema-bancario/src/data.json",
      JSON.stringify(newUserList),
      (err) => {
        if (err) {
          console.log("erro");
        }
      }
    );

    res.status(201).send("Usuário criado com sucesso");
  } catch (err: any) {
    switch (err.message) {
      case errors.NOT_OLD_ENOUGH.message:
        res
          .status(errors.NOT_OLD_ENOUGH.status)
          .send(errors.NOT_OLD_ENOUGH.message);
        break;
      case errors.CPF_ALREADY_REGISTERED.message:
        res
          .status(errors.CPF_ALREADY_REGISTERED.status)
          .send(errors.CPF_ALREADY_REGISTERED.message);
        break;
    }
  }
});

app.post("/users/transfer", (req: Request, res: Response) => {
  const { fromName, fromCPF, toName, toCPF, value } = req.body;
  try {
    const findFrom = data.find((user) => {
      if (user.name === fromName && user.CPF === fromCPF) {
        return true;
      }
    });
    const findTo = data.find((user) => {
      if (user.name === toName && user.CPF === toCPF) {
        return true;
      }
    });
    if (!findFrom) {
      throw new Error(errors.ORIGIN_NOT_FOUND.message);
    } else if (!findTo) {
      throw new Error(errors.DESTINATION_NOT_FOUND.message);
    }

    if (Number(findFrom.balance) < Number(value)) {
      throw new Error(errors.INSUFFICIENT_FUNDS.message);
    }


//  TO AREA🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
    const newTransactionTo = {
      value: `${value}`,
      date: getToday(),
      description: `Depósito recebido de ${fromName}`,
    };

    const userListWithoutUpdateTarget = data.filter((user) => user.CPF !== toCPF);
    const updatedUser = {
      ...findTo,
      history: [...(findTo.history as []), newTransactionTo],
    };
    const updatedUserListTo = [...userListWithoutUpdateTarget, updatedUser];
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴

// FROM AREA🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
    const newTransactionFrom = {
      value: `-${value}`,
      date: getToday(),
      description: `Depósito feito para ${toName}`,
    };

    const updatedUserListFrom = updatedUserListTo.map((user) => {
      if (user.CPF === fromCPF) {
        user.history = [...(user.history as []), newTransactionFrom];
      }
      return user;
    });

    writeFile(
      "/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/sistema-bancario/src/data.json",
      JSON.stringify(updatedUserListFrom),
      (err) => {
        if (err) {
          console.log("erro");
        }
      }
    );

    res.status(200).send("Transação efetuada com sucesso");
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 




  } catch (err: any) {
    switch (err.message) {
      case errors.ORIGIN_NOT_FOUND.message:
        res
          .status(errors.ORIGIN_NOT_FOUND.status)
          .send(errors.ORIGIN_NOT_FOUND.message);
        break;
      case errors.DESTINATION_NOT_FOUND.message:
        res
          .status(errors.DESTINATION_NOT_FOUND.status)
          .send(errors.DESTINATION_NOT_FOUND.message);
        break;
      case errors.INSUFFICIENT_FUNDS.message:
        res
          .status(errors.INSUFFICIENT_FUNDS.status)
          .send(errors.INSUFFICIENT_FUNDS.message);
        break;
    }
  }
});

app.get("/users/:cpf/balance", (req: Request, res: Response) => {
  try {
    const userFound = data.find((user) => user.CPF === req.params.cpf);
    if (!userFound) {
      throw new Error(errors.CPF_NOT_FOUND.message);
    }

    res.status(200).send(`Balance: ${userFound.balance}`);
  } catch (err: any) {
    switch (err.message) {
      case errors.CPF_NOT_FOUND.message:
        res
          .status(errors.CPF_NOT_FOUND.status)
          .send(errors.CPF_NOT_FOUND.message);
        break;
    }
  }
});

app.put("/users/balance", (req: Request, res: Response) => {
  try {
    const { name, CPF, transaction } = req.body;

    const newTransaction = {
      value: transaction.value,
      date: transaction.date,
      description: "Depósito em Dinheiro",
    };

    const findResult = data.find((user) => {
      if (user.name === name && user.CPF === CPF) {
        return true;
      }
    });

    if (!findResult) {
      throw new Error(errors.USER_NOT_FOUND.message);
    }

    const userListWithoutUpdateTarget = data.filter((user) => user.CPF !== CPF);
    // const updatedTransactions = [...findResult.history as [], ]
    const updatedUser = {
      ...findResult,
      history: [...(findResult.history as []), newTransaction],
    };
    console.log("updatedUser", updatedUser);
    const updatedUserList = [...userListWithoutUpdateTarget, updatedUser];

    writeFile(
      "/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/sistema-bancario/src/data.json",
      JSON.stringify(updatedUserList),
      (err) => {
        if (err) {
          console.log("erro");
        }
      }
    );

    res.status(200).send(updatedUserList);
  } catch (err: any) {
    switch (err.message) {
      case errors.USER_NOT_FOUND.message:
        res
          .status(errors.USER_NOT_FOUND.status)
          .send(errors.USER_NOT_FOUND.message);
        break;
    }
  }
});

app.put("/users/balance/payment", (req: Request, res: Response) => {
  try {
    const { dueDate, description, value, CPF } = req.body;

    const findResult = data.find((user) => {
      if (user.CPF === CPF) {
        return true;
      }
    });
    const dateValidation = validateDate(dueDate);
    console.log("dateValidation", dateValidation);
    if (!dateValidation) {
      throw new Error(errors.INVALID_DATE.message);
    }
    if (!findResult) {
      throw new Error(errors.USER_NOT_FOUND.message);
    }

    if (Number(value) > Number(findResult.balance)) {
      throw new Error(errors.INSUFFICIENT_FUNDS.message);
    }

    const transactionBuilder = {
      value: `-${value}`,
      date: dateValidation,
      description: description,
    };

    const updatedUserList = data.map((user) => {
      if (user.CPF === CPF) {
        user.history = [...(user.history as []), transactionBuilder];
      }
      return user;
    });

    writeFile(
      "/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/sistema-bancario/src/data.json",
      JSON.stringify(updatedUserList),
      (err) => {
        if (err) {
          console.log("erro");
        }
      }
    );

    res.status(200).send("Pagamento efetuado com sucesso");
  } catch (err: any) {
    switch (err.message) {
      case errors.USER_NOT_FOUND.message:
        res
          .status(errors.USER_NOT_FOUND.status)
          .send(errors.USER_NOT_FOUND.message);
        break;
      case errors.INVALID_DATE.message:
        res
          .status(errors.INVALID_DATE.status)
          .send(errors.INVALID_DATE.message);
        break;
      case errors.INSUFFICIENT_FUNDS.message:
        res
          .status(errors.INSUFFICIENT_FUNDS.status)
          .send(errors.INSUFFICIENT_FUNDS.message);
        break;
    }
  }
});

app.put("/users/balance/:cpf", (req: Request, res: Response) => {
  try {
    const userFound = data.find((user) => user.CPF === req.params.cpf);
    if (!userFound) {
      throw new Error(errors.CPF_NOT_FOUND.message);
    }

    const user: Account = data.find(
      (user) => user.CPF === req.params.cpf
    ) as Account;
    const userIndex: number = data.findIndex(
      (user) => user.CPF === req.params.cpf
    );
    const userPastTransactions: Transaction[] = user.history.filter(
      (transaction) => {
        const dateValidation = isDatePast(transaction.date);
        return dateValidation;
      }
    );

    if (!userPastTransactions.length) {
      throw new Error(errors.NO_PAST_TRANSACTIONS.message);
    }

    const totalValueOfTransactions = userPastTransactions
      .map((transaction) => {
        return Number(transaction.value);
      })
      .reduce((a, b) => a + b);

    console.log("user balance", user.balance);
    console.log("totalValueOfTransactions", totalValueOfTransactions);
    console.log(
      "one minus the other",
      Number(user.balance) - totalValueOfTransactions
    );
    const updatedBalance = `${Number(user.balance) + totalValueOfTransactions}`;
    const updatedUserList = [...data];
    updatedUserList[userIndex].balance = updatedBalance;

    writeFile(
      "/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/sistema-bancario/src/data.json",
      JSON.stringify(updatedUserList),
      (err) => {
        if (err) {
          console.log("erro");
        }
      }
    );

    res.status(200).send("Balance Updated Successfully");
  } catch (err: any) {
    switch (err.message) {
      case errors.CPF_NOT_FOUND.message:
        res
          .status(errors.CPF_NOT_FOUND.status)
          .send(errors.CPF_NOT_FOUND.message);
        break;
      case errors.NO_PAST_TRANSACTIONS.message:
        res
          .status(errors.NO_PAST_TRANSACTIONS.status)
          .send(errors.NO_PAST_TRANSACTIONS.message);
        break;
    }
  }
});

app.get("/pedro", (req: Request, res: Response) => {
  res.status(200).send("brabo");
});

app.listen(3003, () => {
  console.log("Server running on port 3003");
});
