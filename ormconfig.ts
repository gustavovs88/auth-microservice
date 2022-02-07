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
  TEST_DB_HOST,
  TEST_DB_NAME,
  TEST_DB_PASS,
  TEST_DB_PORT,
  TEST_DB_TYPE,
  TEST_DB_USER,
} = process.env;

export default [
  {
    name: "default",
    type: DB_TYPE,
    username: DB_USER,
    password: DB_PASS,
    port: DB_PORT,
    host: DB_HOST,
    database: DB_NAME,
    autoLoadEntities: true,
    synchronize: false,
    logging: false,
    entities: ["./src/models/*.ts"],
    migrations: ["./src/migrations/*.ts"],
    // migrationsRun: true,
    cli: {
      entitiesDir: "src/models/*.ts",
      migrationsDir: "src/migrations",
    },
  },
  {
    name: "test",
    type: TEST_DB_TYPE,
    username: TEST_DB_USER,
    password: TEST_DB_PASS,
    port: TEST_DB_PORT,
    host: TEST_DB_HOST,
    database: TEST_DB_NAME,
    autoLoadEntities: true,
    synchronize: false,
    logging: false,
    entities: ["./src/models/**.entity{.js,.ts}"],
    migrations: ["./src/migrations/*.ts"],
    // migrationsRun: true,
    cli: {
      entitiesDir: "src/models/*.ts",
      migrationsDir: "src/migrations",
    },
  },
];
