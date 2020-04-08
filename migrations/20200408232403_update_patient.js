
exports.up = function(knex) {
  return Promise.all([
    knex.schema.alterTable("patient", table => {
      table.string("address");
      table.string("email");
      table.string("physician");
      table.string("ssn");
      table.string("phone");
    })
  ]);
};

exports.down = function(knex) {

};
