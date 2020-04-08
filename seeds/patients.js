exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("patient")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("patient").insert([
        {
          lastname: "LAFORGUE",
          firstname: "Paul",
          dob: new Date("1980-09-03")
        }
      ]);
    });
};
