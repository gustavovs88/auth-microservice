require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env",
});

console.log(
  process.env.NODE_ENV,
  process.env.DB_TYPE === "postgres" ? "sim" : "não",
  process.env.NODE_ENV === "test " ? "sim" : "não"
);

const express = require("express");
import "reflect-metadata";
import DatabaseConnection from "./database/database.connect";
import usersRoutes from "./routes/user.routes";
import { databaseConfig } from "./database/database.config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(usersRoutes);

const db = DatabaseConnection;
db.connect(databaseConfig).then(() => console.log("database connected"));

export default app;
