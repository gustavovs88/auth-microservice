import { getConnection } from "typeorm";
import AppUser from "../models/AppUser.entity";
const bcrypt = require("bcrypt");

class UserController {
  async createUser(email: string, password: string) {
    const hashPassword = await bcrypt.hash(password, 10);

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(AppUser)
      .values([
        {
          email: email,
          password: hashPassword,
        },
      ])
      .updateEntity(false)
      .execute();

    return email;
  }
}

export default new UserController();
