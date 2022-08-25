import { Request, Response } from "express";
import { v4 as generateID } from "uuid";
import { connection } from "../connection";

const errors = {
  MISSING_DATA_BODY: {
    status: 400,
    message: "Body of the request must contain name, email and password.",
  },
  DUPLICATE_EMAIL: {
    status:400,
    message: "This email has already been registered"
  }
};

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      throw new Error(errors.MISSING_DATA_BODY.message);
    }

    try {
      const insertResponse = await connection("labecommerce_users").insert({
        id: generateID(),
        name: name,
        email: email,
        password: password,
      });
    } catch (err:any) {

      if (err.errno === 1062) {
        throw new Error(errors.DUPLICATE_EMAIL.message)
      }
    }

    res.status(201).send("User created successfully.");
  } catch (err: any) {
    switch (err.message) {
      case errors.MISSING_DATA_BODY.message:
        res
          .status(errors.MISSING_DATA_BODY.status)
          .send(errors.MISSING_DATA_BODY.message);
        break;
      case errors.DUPLICATE_EMAIL.message:
        res
          .status(errors.DUPLICATE_EMAIL.status)
          .send(errors.DUPLICATE_EMAIL.message)
    }
  }
};
