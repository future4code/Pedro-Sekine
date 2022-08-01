import { connection } from "../connection";
import { Request, Response } from "express";
import { v4 as generateID } from "uuid";

const errors = {
  MISSING_DATA_BODY: {
    status: 400,
    message: "Body of the request must contain name, price and imageURL.",
  },
  PRICE_NAN: {
    status: 400,
    message: "Price must be a number.",
  },
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, imageURL } = req.body;

    if (!name || !price || !imageURL) {
      throw new Error(errors.MISSING_DATA_BODY.message);
    }

    if (isNaN(price)) {
      throw new Error(errors.PRICE_NAN.message);
    }

    await connection("labecommerce_products")
      .insert({
        id: generateID(),
        name,
        price: Number(price),
        image_url: imageURL
      })
    
    res.status(201).send("Product created successfully")
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
    }
  }
};
