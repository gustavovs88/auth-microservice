import { createConnection, Connection } from "typeorm";
export class DatabaseConnection {
  public async connect(databaseConfig) {
    try {
      await createConnection().then(() => console.log("database connected"));
    } catch (error) {
      console.error(error.message);
    }
  }
}
