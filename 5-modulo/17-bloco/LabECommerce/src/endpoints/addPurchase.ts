import { Request, Response } from "express";
import { connection } from "../connection";
import { v4 as generateID } from "uuid";
import knex from "knex";

const errors = {
  MISSING_DATA_BODY: {
    status: 400,
    message: "Body of the request must contain userID, productID and quantity.",
  },
  PRICE_NAN: {
    status: 400,
    message: "Quantity must be a number.",
  },
  USER_NOT_FOUND: {
    status: 404,
    message: "User not found.",
  },
  PRODUCT_NOT_FOUND: {
    status: 404,
    message: "Product not found.",
  },
};

export const addPurchase = async (req: Request, res: Response) => {
  try {
    const { userID, productID, quantity } = req.body;

    if (!userID || !productID || !quantity) {
      throw new Error(errors.MISSING_DATA_BODY.message);
    } else if (isNaN(quantity)) {
      throw new Error(errors.PRICE_NAN.message);
    }

    const checkUserID = await connection("labecommerce_users").where({
      id: userID,
    });
    if (!checkUserID.length) {
      throw new Error(errors.USER_NOT_FOUND.message);
    }

    const checkProductID = await connection("labecommerce_products").where({
      id: productID,
    });
    if (!checkProductID.length) {
      throw new Error(errors.PRODUCT_NOT_FOUND.message);
    }

    try {
      const productPriceObject = await connection("labecommerce_products")
        .select("price")
        .where({ id: productID });
      const productPrice = productPriceObject[0].price;

      await connection("labecommerce_purchases").insert({
        id: generateID(),
        user_id: userID,
        product_id: productID,
        quantity,
        total_price: productPrice * quantity,
      });

      res.status(201).send("Purchase successfully recorded.");
      // console.log("estou depois da connection");
    } catch (innerErr: any) {
      // console.log("estou no innerCatch");
      console.log(innerErr);
      res.status(500).send("Something went wrong.");
    }
  } catch (err: any) {
    switch (err.message) {
      case errors.MISSING_DATA_BODY.message:
        res
          .status(errors.MISSING_DATA_BODY.status)
          .send(errors.MISSING_DATA_BODY.message);
        break;
      case errors.PRICE_NAN.message:
        res.status(errors.PRICE_NAN.status).send(errors.PRICE_NAN.message);
        break;
      case errors.USER_NOT_FOUND.message:
        res
          .status(errors.USER_NOT_FOUND.status)
          .send(errors.USER_NOT_FOUND.message);
        break;
      case errors.PRODUCT_NOT_FOUND.message:
        res
          .status(errors.PRODUCT_NOT_FOUND.status)
          .send(errors.PRODUCT_NOT_FOUND.message);
        break;
    }
  }
};
