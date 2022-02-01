require("dotenv/config");

require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env",
});

const express = require("express");
import "reflect-metadata";
import { DatabaseConnection } from "./database/database.connect";
import usersRoutes from "./routes/user.routes";
import databaseConfig from "./database/database.config";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(usersRoutes);

const db = new DatabaseConnection();
db.connect(databaseConfig);

export default server;
