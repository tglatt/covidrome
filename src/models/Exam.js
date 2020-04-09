import { Model } from "objection";
import knexConnection from "./knex";

Model.knex(knexConnection);

class Exam extends Model {
  static get tableName() {
    return "Exam";
  }
}

export { Exam };
