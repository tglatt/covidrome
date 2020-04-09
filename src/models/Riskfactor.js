import { Model } from "objection";
import knexConnection from "./knex";

Model.knex(knexConnection);

class RiskFactor extends Model {
  static get tableName() {
    return "RiskFactor";
  }
}

export { RiskFactor };
