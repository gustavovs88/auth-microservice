import { createConnection, Connection } from "typeorm";

export class DatabaseConnection {
  public async connect() {
    try {
      await createConnection().then(() => console.log("database connected"));
    } catch (error) {
      console.error(error.message);
    }
  }
}
