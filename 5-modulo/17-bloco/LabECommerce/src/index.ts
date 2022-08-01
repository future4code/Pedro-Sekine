import { app } from "./app";
import { addPurchase } from "./endpoints/addPurchase";
import { createProduct } from "./endpoints/createProduct";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { registerUser } from "./endpoints/registerUser";
import { searchPurchases } from "./endpoints/searchPurchases";

app.get("/users", getAllUsers)
app.post("/users", registerUser)
app.get("/users/:user_id/purchases", searchPurchases)

app.get("/products", getAllProducts)
app.post("/products", createProduct)

app.post("/purchases", addPurchase)