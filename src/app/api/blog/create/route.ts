import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const tags = formData.get('tags') as string;
    
    // Process tags
    const tagArray = tags ? tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
    
    // Handle image uploads
    const uploadedImages: string[] = [];
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'blog');
    
    // Create upload directory if it doesn't exist
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }
    
    // Process uploaded files
    for (let i = 0; ; i++) {
      const file = formData.get(`image_${i}`) as File;
      if (!file) break;
      
      if (file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        // Generate unique filename
        const timestamp = Date.now();
        const filename = `blog_${timestamp}_${i}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
        const filepath = join(uploadDir, filename);
        
        // Save file
        await writeFile(filepath, buffer);
        uploadedImages.push(`/uploads/blog/${filename}`);
      }
    }
    
    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    // Create blog post object
    const blogPost = {
      id: Date.now().toString(),
      title,
      slug,
      description,
      category,
      tags: tagArray,
      images: uploadedImages,
      createdAt: new Date().toISOString(),
      published: false
    };
    
    // Here you would typically save to database
    // For now, we'll just return the processed data
    
    console.log('Blog post created:', blogPost);
    
    return NextResponse.json({
      success: true,
      message: 'Blog post created successfully!',
      data: blogPost
    });
    
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create blog post',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}