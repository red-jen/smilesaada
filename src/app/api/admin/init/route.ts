import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/database';

export async function POST() {
  try {
    // Create blog_categories table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS blog_categories (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(100) NOT NULL UNIQUE,
        slug VARCHAR(100) NOT NULL UNIQUE,
        description TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create blog_posts table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(200) NOT NULL,
        slug VARCHAR(200) NOT NULL UNIQUE,
        excerpt TEXT NOT NULL,
        content TEXT NOT NULL,
        category VARCHAR(100) NOT NULL,
        tags TEXT[] DEFAULT '{}',
        author VARCHAR(100) DEFAULT 'Clinique Dentaire Saada',
        featured_image VARCHAR(500),
        published BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        published_at TIMESTAMP,
        reading_time INTEGER DEFAULT 1
      )
    `);

    // Create indexes
    await pool.query('CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published)');
    await pool.query('CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category)');
    await pool.query('CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug)');

    // Insert sample categories
    await pool.query(`
      INSERT INTO blog_categories (name, slug, description) VALUES
      ('General', 'general', 'General dental health and care tips'),
      ('Treatments', 'treatments', 'Information about dental treatments and procedures'),
      ('Preventive Care', 'preventive-care', 'Tips for preventing dental problems'),
      ('Cosmetic Dentistry', 'cosmetic-dentistry', 'Articles about cosmetic dental procedures'),
      ('News', 'news', 'Clinic news and announcements')
      ON CONFLICT (slug) DO NOTHING
    `);

    // Insert sample blog post
    await pool.query(`
      INSERT INTO blog_posts (
        title, slug, excerpt, content, category, tags, author, published, published_at, reading_time
      ) VALUES (
        '5 Essential Tips for Healthy Teeth',
        '5-essential-tips-healthy-teeth',
        'Discover simple yet effective ways to maintain optimal oral health and prevent dental problems with these expert tips from Clinique Dentaire Saada.',
        '<h2>Introduction</h2>
        <p>Maintaining healthy teeth is crucial for overall well-being and confidence. At Clinique Dentaire Saada in Rabat, we believe that prevention is the best medicine. Here are five essential tips from our dental experts to help you maintain optimal oral health.</p>
        
        <h3>1. Brush Twice Daily with Proper Technique</h3>
        <p>Use fluoride toothpaste and brush for at least two minutes each time. Make sure to reach all surfaces of your teeth - front, back, and chewing surfaces. Replace your toothbrush every 3-4 months or after illness.</p>
        
        <h3>2. Floss Daily Without Exception</h3>
        <p>Flossing removes plaque and food particles between teeth that brushing cannot reach. This prevents cavities and gum disease in areas where problems commonly start.</p>
        
        <h3>3. Schedule Regular Dental Checkups</h3>
        <p>Visit <strong>Clinique Dentaire Saada</strong> every six months for professional cleaning and early problem detection. Regular checkups can save you time, money, and discomfort in the long run.</p>
        
        <h3>4. Limit Sugary and Acidic Foods</h3>
        <p>Reduce consumption of sweets, sodas, and acidic beverages that can erode tooth enamel. When you do consume them, rinse with water afterward.</p>
        
        <h3>5. Stay Hydrated with Water</h3>
        <p>Drinking water throughout the day helps wash away bacteria and food particles. It also helps maintain saliva production, which naturally protects your teeth.</p>
        
        <h2>Conclusion</h2>
        <p>Following these simple tips can significantly improve your oral health and prevent many dental problems. For personalized dental care and professional treatments, contact <a href="/contact">Clinique Dentaire Saada</a> in Rabat. Our experienced team is here to help you achieve and maintain a healthy, beautiful smile.</p>
        
        <p><em>Remember: With our premium dental tourism services, you can save up to 70% on dental treatments while receiving world-class care from EU-certified dentists.</em></p>',
        'General',
        ARRAY['oral health', 'prevention', 'dental tips', 'healthy teeth'],
        'Dr. Saada',
        true,
        NOW(),
        4
      ) ON CONFLICT (slug) DO NOTHING
    `);

    return NextResponse.json({
      success: true,
      message: 'Database initialized successfully with sample data'
    });

  } catch (error) {
    console.error('Database initialization error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to initialize database',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}