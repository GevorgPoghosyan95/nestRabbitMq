import * as knex from 'knex';
import { join } from 'path';

const config: knex.Knex.Config = {
    client: 'pg',
    connection: {
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DATABASE,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
    },
    migrations: {
        directory: join(__dirname, 'src','config','database', 'migrations'),
        tableName: 'knex_migrations_region',
        extension: 'ts',
    },
    seeds: {
        directory: join(__dirname, 'src','config','database', 'seeds'),
    },
};

export default config;
