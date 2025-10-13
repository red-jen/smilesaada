-- First, let's create the PostgreSQL database and tables
-- Run these commands in your PostgreSQL database

-- Create the database (run as postgres user)
CREATE DATABASE dental_blogs;

-- Connect to the database
\c dental_blogs;

-- Create extension for UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create categories table
CREATE TABLE blog_categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create posts table
CREATE TABLE blog_posts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    featured_image VARCHAR(255),
    author VARCHAR(100) DEFAULT 'Clinique Dentaire Saada',
    category VARCHAR(100) NOT NULL,
    tags TEXT[],
    published BOOLEAN DEFAULT false,
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    meta_title VARCHAR(255),
    meta_description TEXT,
    reading_time INTEGER
);

-- Create indexes for better performance
CREATE INDEX idx_posts_published ON blog_posts(published, published_at);
CREATE INDEX idx_posts_category ON blog_posts(category);
CREATE INDEX idx_posts_slug ON blog_posts(slug);

-- Insert sample categories
INSERT INTO blog_categories (name, slug, description) VALUES
('Dental Care', 'dental-care', 'General dental care and hygiene tips'),
('Cosmetic Dentistry', 'cosmetic-dentistry', 'Aesthetic dental procedures'),
('Oral Health', 'oral-health', 'Overall oral health information'),
('Treatments', 'treatments', 'Information about dental treatments');

-- Insert a sample blog post
INSERT INTO blog_posts (
    title, slug, excerpt, content, category, tags, 
    published, published_at, reading_time
) VALUES (
    '5 Tips for Healthy Teeth',
    '5-tips-healthy-teeth',
    'Learn the essential habits for maintaining excellent oral health every day.',
    '<h2>1. Brush Twice Daily</h2><p>Use fluoride toothpaste and brush for 2 minutes each time.</p><h2>2. Floss Daily</h2><p>Remove plaque between teeth where brushes cannot reach.</p><h2>3. Regular Checkups</h2><p>Visit your dentist every 6 months for cleanings and exams.</p><h2>4. Healthy Diet</h2><p>Limit sugary foods and drinks. Choose water over soda.</p><h2>5. Don''t Use Teeth as Tools</h2><p>Avoid opening packages or cracking nuts with your teeth.</p>',
    'Oral Health',
    ARRAY['oral health', 'prevention', 'tips'],
    true,
    NOW(),
    3
);