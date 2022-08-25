import { Request, Response } from "express";
import { connection } from "../connection";

const errors = {
  EMPTY_SEARCH: {
    status: 400,
    message: "Request must contain user ID.",
  },
  USER_NOT_FOUND: {
    status: 404,
    message: "User not found.",
  },
  NO_PURCHASES_FOUND: {
    status: 404,
    message: "No purchases made by this user.",
  },
};

export const searchPurchases = async (req: Request, res: Response) => {
  try {
    const userID = req.params.user_id;
    console.log("userID", userID);

    if ((userID as string) === ":user_id") {
      // console.log("entrou no if");
      throw new Error(errors.EMPTY_SEARCH.message);
    }

    const checkUserExistance = await connection("labecommerce_users").where({
      id: userID,
    });

    if (!checkUserExistance.length) {
      throw new Error(errors.USER_NOT_FOUND.message);
    }

    const userPurchases = await connection("labecommerce_purchases").where({
      user_id: userID,
    });

    if (!userPurchases.length) {
      throw new Error(errors.NO_PURCHASES_FOUND.message);
    } else {
      res.status(200).send(userPurchases)
    }

    res.send("ok");
  } catch (err: any) {
    switch (err.message) {
      case errors.EMPTY_SEARCH.message:
        res
          .status(errors.EMPTY_SEARCH.status)
          .send(errors.EMPTY_SEARCH.message);
        break;
      case errors.USER_NOT_FOUND.message:
        res
          .status(errors.USER_NOT_FOUND.status)
          .send(errors.USER_NOT_FOUND.message);
        break;
      case errors.NO_PURCHASES_FOUND.message:
        res
          .status(errors.NO_PURCHASES_FOUND.status)
          .send(errors.NO_PURCHASES_FOUND.message);
        break;
    }
  }
};


// response regarding users that actually bought something