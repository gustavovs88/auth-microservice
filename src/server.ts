const express = require("express");
import { appendFile } from "fs";
import "reflect-metadata";
import { DatabaseConnection } from "./database/database.connect";
import usersRoutes from "./routes/user.routes";
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(usersRoutes);

const db = new DatabaseConnection();
db.connect();

server.listen(5000, () => console.log("listening to port 5000"));
