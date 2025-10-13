import { NextRequest, NextResponse } from 'next/server';
import { pool, BlogPost } from '@/lib/database';

// GET - Fetch all posts
export async function GET() {
  try {
    const result = await pool.query(`
      SELECT 
        id, title, slug, excerpt, category, tags, author, 
        featured_image, published, created_at, updated_at, 
        published_at, reading_time
      FROM blog_posts 
      ORDER BY created_at DESC
    `);

    return NextResponse.json({
      success: true,
      data: result.rows
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

// POST - Create new post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      slug,
      excerpt,
      content,
      category,
      tags = [],
      author = 'Clinique Dentaire Saada',
      featuredImage,
      published = false
    } = body;

    // Calculate reading time (average 200 words per minute)
    const wordCount = (content || '').replace(/<[^>]*>/g, '').split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    const query = `
      INSERT INTO blog_posts (
        title, slug, excerpt, content, category, tags, 
        author, featured_image, published, published_at, reading_time
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *
    `;

    const values = [
      title,
      slug,
      excerpt,
      content,
      category,
      tags,
      author,
      featuredImage,
      published,
      published ? new Date() : null,
      readingTime
    ];

    const result = await pool.query(query, values);

    return NextResponse.json({
      success: true,
      data: result.rows[0],
      message: 'Post created successfully'
    });
  } catch (error: any) {
    console.error('Error creating post:', error);
    
    if (error.constraint === 'blog_posts_slug_key') {
      return NextResponse.json(
        { success: false, error: 'A post with this slug already exists' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to create post' },
      { status: 500 }
    );
  }
}