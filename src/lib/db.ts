/* eslint-disable @typescript-eslint/no-explicit-any */
// Database configuration - disabled for production deployment
// This file is for local development only and will not run on Vercel

// Placeholder types for when pg is not installed
type QueryResult = {
  rows: any[];
  rowCount: number | null;
};

type PoolClient = {
  query: (text: string, params?: unknown[]) => Promise<QueryResult>;
  release: () => void;
};

// Mock pool for when pg is not available
const pool = {
  query: async (text: string, params?: unknown[]): Promise<QueryResult> => {
    console.warn('Database query attempted but pg module not available:', text);
    return { rows: [], rowCount: 0 };
  },
  connect: async (): Promise<PoolClient> => {
    return {
      query: async () => ({ rows: [], rowCount: 0 }),
      release: () => {},
    };
  },
};

export { pool };

// Helper function to query the database
export async function query(text: string, params: unknown[] = []): Promise<QueryResult> {
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
export async function queryOne(text: string, params: unknown[] = []) {
  const result = await query(text, params);
  return result.rows[0];
}

// Helper function to perform database transactions
export async function transaction<T>(callback: (client: PoolClient) => Promise<T>): Promise<T> {
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