import { MysqlAdapter  } from "@builderbot/database-mysql";
import { config } from ".";
import mysql from "mysql2/promise";


export const db = await mysql.createConnection({
 host: config.dbHost,
 user: config.dbUser,
 password: config.dbPassword,
 database: config.dbName,
port:config.port,

});
export default db;


