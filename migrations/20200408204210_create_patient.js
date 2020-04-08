exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("patient", table => {
      table.increments("id").primary();
      table.string("lastname").notNullable();
      table.string("firstname").notNullable();
      table.date("dob").notNullable();
    })
  ]);
};

exports.down = function(knex) {};
