exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("RiskFactor", table => {
      table.increments("id").primary();
      table.integer("patientId");
      table.boolean("FRMHTA").defaultTo(false);
      table.boolean("FRMSup70").defaultTo(false);
      table.boolean("FRMImcSup40").defaultTo(false);
      table.boolean("FRMEnceinte").defaultTo(false);
      table.boolean("FRMPathologieCardiaque").defaultTo(false);
      table.boolean("FRMPathologieDiabete").defaultTo(false);
      table.boolean("FRMPathologieRespiratoireChronique").defaultTo(false);
      table.boolean("FRMCancerSousTraitement").defaultTo(false);
      table.boolean("FRMInsRenaleDialysee").defaultTo(false);
      table.boolean("FRMImmunoDepression").defaultTo(false);
      table.boolean("FRMCirrhoseB").defaultTo(false);
      table.boolean("FRMThrombose").defaultTo(false);
      table.string("FRMAutre");
      table.boolean("FRMProcheFragile").defaultTo(false);
      table.boolean("FRSEIsolement").defaultTo(false);
      table.boolean("FRSEPrecariteSociEco").defaultTo(false);
      table.boolean("FRSEDifficulteLinguistique").defaultTo(false);
      table.boolean("FRSETroublesNeuroPsy").defaultTo(false);
      table.boolean("FRSEPasMoyenCommunication").defaultTo(false);
      table.string("FRSEAidant");
      table.string("FRSERemarques");
      table.boolean("FRSEPieceConfinement").defaultTo(false);
    }),
  ]);
};

exports.down = function(knex) {};
