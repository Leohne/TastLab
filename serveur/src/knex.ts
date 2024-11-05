// knex.ts
import knex, { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();
const knexConfig: Knex.Config = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT) || 5432,
    },

};

// Créez et exportez une instance de Knex
const db = knex(knexConfig);

export default db;
