import { userRouter } from "./routes/userRouter";
import express from "express";
import cors from "cors";
import { app } from "./controller/app";
import { bandRouter } from "./routes/bandRouter";
import { concertRouter } from "./routes/concertRouter";

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/band", bandRouter)
app.use("/concert", concertRouter)