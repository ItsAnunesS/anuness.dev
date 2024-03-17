import { sql } from '@vercel/postgres';

export default defineEventHandler(async (event) => {
    const { rows } = await sql`SELECT * from Pets;`;

    return rows
})