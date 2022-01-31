import { getConnection } from "typeorm";
import { User } from "../models/User";
import { Request, Response, NextFunction } from "express";
const bcrypt = require("bcrypt");

class UserController {
  async createUser(email, password) {
    const hashPassword = await bcrypt.hash(password, 10);

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([{ email: email, password: hashPassword }])
      .execute();

    return email;
  }
}

export default new UserController();
