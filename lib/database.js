const { Pool } = require('pg');

// Database configuration
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'dental_blogs',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'Ren-ji24',
});

module.exports = { pool };