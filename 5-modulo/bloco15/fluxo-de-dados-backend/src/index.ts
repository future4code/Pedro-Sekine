import { v4 as generateID } from "uuid";
import express from "express";
import cors from "cors";
import data from "./data.json";
import { writeFile } from "fs";

const app = express();
app.use(express.json());
app.use(cors());

type Product = {
  id: string;
  name: string;
  price: number;
};

const allErrors = {
  MISSING_DATA: {
    status: 400,
    message: "Body must contain name and price strings",
  },
  MISSING_AT_LEAST_ONE: {
    status: 400,
    message: "Body must contain price and/or name string",
  },
  NEGATIVE_PRICE: {
    status: 400,
    message: "Price must be a non-negative number",
  },
  PRICE_NOT_NUMBER: {
    status: 400,
    message: "Price must contain a number",
  },
  PRODUCT_NOT_FOUND: {
    status: 404,
    message: "Product not found",
  },
  NAME_NOT_STRING: {
    status: 400,
    message: "Name must be a string",
  },
  QUERY_NOT_STRING: {
    status: 400,
    message: "Query content must be a string",
  },
};

// Crie um endpoint que edita o preço de um determinado produto e retorna a lista de produtos atualizada.

app.post("/products/:id/edit", (req, res) => {
  try {
    const productId = req.params.id;
    const newPrice = req.body.price;
    const newName = req.body.name;

    const checkProductExistance = data.filter((item) => item.id === productId);

    if (!checkProductExistance.length) {
      throw new Error(allErrors.PRODUCT_NOT_FOUND.message);
    }
    if (!newPrice && !newName) { 
      throw new Error(allErrors.MISSING_AT_LEAST_ONE.message);
    }
    if (newPrice && Number.isNaN(Number(newPrice))) {
      throw new Error(allErrors.PRICE_NOT_NUMBER.message);
    }
    if (Number(newPrice) < 0) {
      throw new Error(allErrors.NEGATIVE_PRICE.message);
    }
    if (!Number.isNaN(Number(newName))) {
      throw new Error(allErrors.NAME_NOT_STRING.message);
    }

    const editedArray = data.map((item) => {
      if (item.id === productId) {
        item.name = newName ? newName : item.name
        item.price = newPrice ? newPrice : item.price;
      }
      return item;
    });

    writeFile(
      "/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/fluxo-de-dados-backend/src/data.json",
      JSON.stringify(editedArray),
      (err) => {
        if (err) {
          console.log("erro");
        }
      }
    );

    res.status(201).send(editedArray);
  } catch (error: any) {
    switch (error.message) {
      case allErrors.PRODUCT_NOT_FOUND.message:
        res
          .status(allErrors.PRODUCT_NOT_FOUND.status)
          .send(allErrors.PRODUCT_NOT_FOUND.message);
        break;
      case allErrors.MISSING_AT_LEAST_ONE.message:
        res
          .status(allErrors.MISSING_AT_LEAST_ONE.status)
          .send(allErrors.MISSING_AT_LEAST_ONE.message);
        break;
      case allErrors.PRICE_NOT_NUMBER.message:
        res
          .status(allErrors.PRICE_NOT_NUMBER.status)
          .send(allErrors.PRICE_NOT_NUMBER.message);
        break;
      case allErrors.NEGATIVE_PRICE.message:
        res
          .status(allErrors.NEGATIVE_PRICE.status)
          .send(allErrors.NEGATIVE_PRICE.message);
      case allErrors.NAME_NOT_STRING.message:
        res
          .status(allErrors.NAME_NOT_STRING.status)
          .send(allErrors.NAME_NOT_STRING.message)
    }
  }
});

app.get("/products", (req, res) => {
  try {
    const searchQuery = req.query.name;
    console.log("searchQuery", searchQuery)

    if (!Number.isNaN(Number(searchQuery))) {
      throw new Error(allErrors.QUERY_NOT_STRING.message);
    }

    if (!searchQuery) {
      res.status(200).send(data);
    } else {
      const searchResult = data.filter((item) => {
        const matchAttempt = item.name.toLowerCase().match((searchQuery as string).toLocaleLowerCase());
        console.log("item.name.toLowerCase()", item.name.toLowerCase())
        console.log("(searchQuery as string).toLocaleLowerCase()",(searchQuery as string).toLocaleLowerCase())
        console.log("matchAttempt", matchAttempt)
        if (matchAttempt) {
          return true
        } else {
          return false
        }
      });

      if (!searchResult.length) {
        throw new Error(allErrors.PRODUCT_NOT_FOUND.message);
      }

      res.status(200).send(searchResult)
    }
  } catch (err: any) {
    switch (err.message) {
      case allErrors.QUERY_NOT_STRING.message:
        res
          .status(allErrors.QUERY_NOT_STRING.status)
          .send(allErrors.QUERY_NOT_STRING.message);
        break;
      case allErrors.PRODUCT_NOT_FOUND.message:
        res
          .status(allErrors.PRODUCT_NOT_FOUND.status)
          .send(allErrors.PRODUCT_NOT_FOUND.message);
    }
  }
});

app.post("/products/create", (req, res) => {
  try {
    const productDetails = req.body;
    productDetails.id = generateID();

    if (!productDetails.name || !productDetails.price) {
      throw new Error(allErrors.MISSING_DATA.message);
    }
    if (Number.isNaN(Number(productDetails.price))) {
      throw new Error(allErrors.PRICE_NOT_NUMBER.message);
    }
    if (!Number.isNaN(Number(productDetails.name))) {
      throw new Error(allErrors.NAME_NOT_STRING.message);
    }
    console.log(productDetails.price, Number(productDetails.price));

    const updatedProductList: Product[] = [...data, productDetails];

    writeFile(
      "/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/fluxo-de-dados-backend/src/data.json",
      JSON.stringify(updatedProductList),
      (err) => {
        if (err) {
          console.log("erro");
        }
      }
    );
    res.status(201).send("Produto adicionado com sucesso");
  } catch (err: any) {
    switch (err.message) {
      case allErrors.MISSING_DATA.message:
        res
          .status(allErrors.MISSING_DATA.status)
          .send(allErrors.MISSING_DATA.message);
        break;
      case allErrors.PRICE_NOT_NUMBER.message:
        res
          .status(allErrors.PRICE_NOT_NUMBER.status)
          .send(allErrors.PRICE_NOT_NUMBER.message);
        break;
      case allErrors.NAME_NOT_STRING.message:
        res
          .status(allErrors.NAME_NOT_STRING.status)
          .send(allErrors.NAME_NOT_STRING.message);
    }
  }
});

app.get("/pedro", (req, res) => {
  res.send("esse daí é brabo");
});

app.delete("/products/:id/delete", (req, res) => {
  try {
    const productId = req.params.id;

    const checkProductExistance = data.filter((item) => item.id === productId);

    if (!checkProductExistance.length) {
      throw new Error(allErrors.PRODUCT_NOT_FOUND.message);
    }

    const editedArray = data.filter((item) => {
      if (item.id === productId) {
        return false;
      }
      return true;
    });

    writeFile(
      "/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/fluxo-de-dados-backend/src/data.json",
      JSON.stringify(editedArray),
      (err) => {
        if (err) {
          console.log("erro");
        }
      }
    );

    res.status(200).send(editedArray);
  } catch (error: any) {
    res
      .status(allErrors.PRODUCT_NOT_FOUND.status)
      .send(allErrors.PRODUCT_NOT_FOUND.message);
  }
});

app.listen(3003, () => {
  console.log("Server is now running on Port 3003.");
});
