import * as dbConfig from "./dbConfig";
import { Sequelize, Dialect } from "sequelize";
const { username, password, host, database, dialect } = dbConfig.development;
const sequelize = new Sequelize(database!, username!, password!, {
  host: "localhost",
  dialect: "postgres",
});

export { sequelize };
