import { NextResponse } from 'next/server';
import { pool } from '@/lib/database';

export async function GET() {
  try {
    // Test database connection
    const result = await pool.query('SELECT NOW() as current_time, version() as pg_version');
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      data: {
        timestamp: result.rows[0].current_time,
        postgresql_version: result.rows[0].pg_version
      }
    });
    
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Database connection failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}