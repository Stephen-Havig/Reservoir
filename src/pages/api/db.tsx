import { Pool } from 'pg';

//let conn: Pool;


  let conn = new Pool({
    user: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASSWORD,
    host: process.env.PGSQL_HOST,
    port: !process.env.PGSQL_PORT ? 5432 : +process.env.PGSQL_PORT,
    database: process.env.PGSQL_DATABASE,
    max: 5,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });


export default conn;