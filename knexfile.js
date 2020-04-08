module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: "localhost",
      user: "covidrome",
      password: "test",
      port: "5435",
      database: "covidrome"
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: "localhost",
      user: "covidrome",
      password: "test",
      port: "5435",
      database: "covidrome"
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
