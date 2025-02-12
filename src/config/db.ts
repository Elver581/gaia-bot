import { MysqlAdapter  } from "@builderbot/database-mysql";
import { config } from ".";
import mysql from "mysql2/promise";


export const db = await mysql.createPool({
 host: config.dbHost,
 user: config.dbUser,
 password: config.dbPassword,
 database: config.dbName,
port:config.port,
waitForConnections: true,   
connectionLimit: 10,
queueLimit: 0

});

export const getConnection = async () => {
    try {
        const connection = await  db.getConnection();
        console.log('✅ Conexión obtenida.');
        return connection;
    } catch (error) {
        console.error('❌ Error al obtener la conexión:', error);
        
    }
};
export default db;


