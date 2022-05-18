import { Sequelize } from "sequelize";

const db_host = 'localhost';
const db_database = 'pruebas';
const db_user = 'postgres';
const db_password = 'admin';
const db_dialect = 'postgres'; /* mssql, mysql, sqlite, mariadb  */

const db = new Sequelize( db_database, db_user, db_password, {
    host: db_host,
    dialect: db_dialect,
});

export default db;