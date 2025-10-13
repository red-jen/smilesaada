import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/database';

interface RouteParams {
  params: {
    id: string;
  };
}

// GET - Fetch single post
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    
    const result = await pool.query(
      'SELECT * FROM blog_posts WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}

// PUT - Update post
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const {
      title,
      slug,
      excerpt,
      content,
      category,
      tags,
      author,
      featuredImage,
      published
    } = body;

    // Calculate reading time
    const wordCount = (content || '').replace(/<[^>]*>/g, '').split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    const query = `
      UPDATE blog_posts 
      SET 
        title = $1, slug = $2, excerpt = $3, content = $4, 
        category = $5, tags = $6, author = $7, featured_image = $8, 
        published = $9, published_at = $10, reading_time = $11,
        updated_at = NOW()
      WHERE id = $12
      RETURNING *
    `;

    const values = [
      title, slug, excerpt, content, category, tags, author,
      featuredImage, published, published ? new Date() : null,
      readingTime, id
    ];

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.rows[0],
      message: 'Post updated successfully'
    });
  } catch (error: any) {
    console.error('Error updating post:', error);
    
    if (error.constraint === 'blog_posts_slug_key') {
      return NextResponse.json(
        { success: false, error: 'A post with this slug already exists' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to update post' },
      { status: 500 }
    );
  }
}

// DELETE - Delete post
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    
    const result = await pool.query(
      'DELETE FROM blog_posts WHERE id = $1 RETURNING title',
      [id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Post "${result.rows[0].title}" deleted successfully`
    });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}