const databaseConfig = {
  type: process.env.DBTYPE,
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  username: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME,
};
export default databaseConfig;
