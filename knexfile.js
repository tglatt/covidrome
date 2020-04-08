require("dotenv").config();

const DATABASE_CLIENT = process.env.DATABASE_CLIENT || "sqlite3";

module.exports = {
  client: DATABASE_CLIENT,
  connection:
    DATABASE_CLIENT === "sqlite3"
      ? process.env.DATABASE_FILENAME || "db.sqlite"
      : process.env.DATABASE_URL,
  useNullAsDefault: DATABASE_CLIENT === "sqlite3",
  migrations: {
    tableName: "knex_migrations",
  },
};
