import { env } from "./env.js";

import pg from 'pg';
import fs from 'fs';
import csv from 'csv-parser';
import { queryTables } from "../services/migrateService.js";
//copiar y pegar desde la 8 a 26 
const { Pool } = pg;

export const pool = new Pool({
    connectionString: env.postgresUri
});

async function createTables() {
try {
    await queryTables()
} catch (error) {
    console.error(error);
}
}

function initialdata(params) {

}

export { createTables, initialdata }