import { Request, Response } from "express";
import { connection } from "../connection";

const errors = {
  WRONG_ORDER_INPUT: {
    status: 400,
    message: "'order' must be 'asc' or 'desc'.",
  },
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { order, search } = req.query;

    if (order && order !== "asc" && order !== "desc") {
      throw new Error(errors.WRONG_ORDER_INPUT.message);
    }

    if (!search && !order) {
      const userList = await connection("labecommerce_products").select();

      if (!userList.length) {
        res.status(200).send("No products have been registered");
      } else {
        res.status(200).send(userList);
      }
    }
    // agora fazer a connection para requests with search === true

    if (!search && order) {
      const orderedList = await connection("labecommerce_products").orderBy(
        "price",
        order
      );

      if (!orderedList.length) {
        res.status(200).send("No products have been registered");
      } else {
        res.status(200).send(orderedList);
      }
    }

    if (search && !order) {
      const searchResultList = await connection(
        "labecommerce_products"
      ).whereILike("name", `%${search}%`);
      if (!searchResultList.length) {
        res.status(404).send("No results match the search input.");
      } else {
        res.status(200).send(searchResultList);
      }
    }

    // 🔴🔴🔴🔴🔴🔴 quando os dois existirem: fazer connectoin mais complexa com busca && ordenação

    if (search && order) {
      const orderedSearch = await connection("labecommerce_products")
        .orderBy("price", order)
        .whereILike("name", `%${search}%`);

      if (!orderedSearch.length) {
        res.status(404).send("No results match the search input.");
      } else {
        res.status(200).send(orderedSearch)
      }
    }
  } catch (err: any) {
    switch (err.message) {
      case errors.WRONG_ORDER_INPUT.message:
        res
          .status(errors.WRONG_ORDER_INPUT.status)
          .send(errors.WRONG_ORDER_INPUT.message);
        break;
    }
  }
};
