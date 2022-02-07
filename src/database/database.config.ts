require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const {
  DB_TYPE,
  DB_PORT,
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_NAME,
  // TEST_DB_HOST,
  // TEST_DB_NAME,
  // TEST_DB_PASS,
  // TEST_DB_PORT,
  // TEST_DB_TYPE,
  // TEST_DB_USER,
} = process.env;

export const databaseConfig = {
  type: DB_TYPE,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: ["./src/models/*.ts"],
};
// export const testDatabaseConfig = {
//   type: TEST_DB_TYPE,
//   host: TEST_DB_HOST,
//   port: TEST_DB_PORT,
//   username: TEST_DB_USER,
//   password: TEST_DB_PASS,
//   database: TEST_DB_NAME,
//   entities: ["./src/models/*.ts"],
// };
