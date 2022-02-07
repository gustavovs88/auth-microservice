import { Connection, createConnection } from "typeorm";

class DatabaseConnection {
  public async connect(databaseConfig): Promise<Connection> {
    try {
      return await createConnection(databaseConfig);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default new DatabaseConnection();
