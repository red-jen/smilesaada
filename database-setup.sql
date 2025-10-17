-- Database Schema for the Blog Form

-- Drop tables if they exist to avoid conflicts
DROP TABLE IF EXISTS blog_post_images;
DROP TABLE IF EXISTS blog_post_tags;
DROP TABLE IF EXISTS blog_posts;
DROP TABLE IF EXISTS blog_categories;

-- Create categories table
CREATE TABLE blog_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create posts table
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  category_id INTEGER NOT NULL REFERENCES blog_categories(id),
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create tags table for many-to-many relationship
CREATE TABLE blog_post_tags (
  id SERIAL PRIMARY KEY,
  post_id INTEGER NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  tag_name VARCHAR(100) NOT NULL,
  UNIQUE(post_id, tag_name)
);

-- Create images table for storing image paths
CREATE TABLE blog_post_images (
  id SERIAL PRIMARY KEY,
  post_id INTEGER NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  image_path VARCHAR(500) NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0
);

-- Insert default categories to match those in the form
INSERT INTO blog_categories (name, slug) VALUES
('General', 'general'),
('Treatments', 'treatments'),
('Preventive Care', 'preventive-care'),
('Cosmetic Dentistry', 'cosmetic-dentistry'),
('News', 'news');

-- Create indexes for performance
CREATE INDEX idx_blog_posts_category_id ON blog_posts(category_id);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_post_tags_post_id ON blog_post_tags(post_id);
CREATE INDEX idx_blog_post_images_post_id ON blog_post_images(post_id);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update timestamps
CREATE TRIGGER update_blog_posts_timestamp
BEFORE UPDATE ON blog_posts
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();