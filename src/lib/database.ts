import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'dental_blogs',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'Ren-ji24',
});

export { pool };

// Types for our database
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  featured_image?: string;
  published: boolean;
  created_at: Date;
  updated_at: Date;
  published_at?: Date;
  reading_time: number;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: Date;
}