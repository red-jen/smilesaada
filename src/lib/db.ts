import { Pool } from 'pg';

// Create a new Pool instance to manage connections
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dental_blogs',
  password: 'Ren-ji24',
  port: 5432,
});

export { pool };

// Helper function to query the database
export async function query(text: string, params: any[] = []) {
  try {
    const start = Date.now();
    const result = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: result.rowCount });
    return result;
  } catch (error) {
    console.error('Error executing query', { text, error });
    throw error;
  }
}

// Helper function to query a single row
export async function queryOne(text: string, params: any[] = []) {
  const result = await query(text, params);
  return result.rows[0];
}

// Helper function to perform database transactions
export async function transaction<T>(callback: (client: any) => Promise<T>): Promise<T> {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}