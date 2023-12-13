// require('dotenv').config({ path: '.env.development'});

import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'pg',
  connection: "postgresql://postgres@localhost:5432/webapp_dev?sslmode=require&ssl=true&debug=true",
  //  {
  //   connectionString: "postgresql://postgres@localhost:5432/webapp_dev?sslmode=require&ssl=true&debug=true",
  //   //  process.env.POSTGRES_URL,
  //   ssl: {
  //     sslmode: "require", 
  //     rejectUnauthorized: false,
  //   }
  // },
  // connection: process.env.POSTGRES_URL, // + (process.env.NODE_ENV === 'development' ? '' : '?sslmode=require'),
  migrations: {
    extension: 'ts',
  },
  pool: {
    min: 0
  }
};

export default config;