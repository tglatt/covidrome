import { Model } from "objection";
import knexConnection from "./knex";

Model.knex(knexConnection);

class Patient extends Model {
  static get tableName() {
    return "patient";
  }
}

export { Patient };
