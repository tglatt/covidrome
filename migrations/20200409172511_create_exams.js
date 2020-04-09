exports.up = function (knex) {
  return knex.schema.createTable("Exam", (table) => {
    table.increments("id").primary();
    table.integer("patientId");
    table.date("examDate").notNullable();
    table.string("physician");
    table.string("nurse");
    table.boolean("toux").defaultTo(false);
    table.string("expectorations");
    table.string("temperature");
    table.string("poids");
    table.boolean("syndromeGrippal").defaultTo(false);
    table.boolean("signesORIHauts").defaultTo(false);
    table.boolean("anosmie").defaultTo(false);
    table.boolean("agueusie").defaultTo(false);
    table.boolean("dyspnee").defaultTo(false);
    table.boolean("conjonctivite").defaultTo(false);
    table.boolean("deshydratation").defaultTo(false);
    table.boolean("diarrhee").defaultTo(false);
    table.string("etatConscience");
    table.string("frequenceRespi");
    table.string("SPO2Saturometre");
    table.string("SPO2ROTH");
    table.string("PA");
    table.string("pouls");
    table.boolean("marbrures").defaultTo(false);
    table.string("autre");
  });
};

exports.down = function (knex) {};
