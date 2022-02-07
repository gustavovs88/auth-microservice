import UserController from "../../src/controllers/user.controllers";
import DatabaseConnection from "../../src/database/database.connect";
import { databaseConfig } from "../../src/database/database.config";
import { Connection } from "typeorm";

describe("User Controlers Methods", () => {
  let connection: Connection;
  beforeAll(
    async () => (connection = await DatabaseConnection.connect(databaseConfig))
  );
  it("Should create and store a user in database", async () => {
    const user = { email: "fulanodetal@gmail.com", password: "12345" };
    await UserController.createUser(user.email, user.password);

    console.log(user);

    expect(user.email).toBe("fulanodetal@gmail.com");
  });

  afterAll(() => connection.close());
});
