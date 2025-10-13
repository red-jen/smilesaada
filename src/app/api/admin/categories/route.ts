import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/database';

// GET - Fetch all categories
export async function GET() {
  try {
    const result = await pool.query(`
      SELECT id, name, slug, description, created_at
      FROM blog_categories 
      ORDER BY name ASC
    `);

    return NextResponse.json({
      success: true,
      data: result.rows
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}

// POST - Create new category
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, slug, description } = body;

    const query = `
      INSERT INTO blog_categories (name, slug, description)
      VALUES ($1, $2, $3)
      RETURNING *
    `;

    const values = [name, slug, description || null];
    const result = await pool.query(query, values);

    return NextResponse.json({
      success: true,
      data: result.rows[0],
      message: 'Category created successfully'
    });
  } catch (error: any) {
    console.error('Error creating category:', error);
    
    if (error.constraint === 'blog_categories_slug_key') {
      return NextResponse.json(
        { success: false, error: 'A category with this slug already exists' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to create category' },
      { status: 500 }
    );
  }
}