-- Direct SQL Commands for Blog Management
-- Use these in pgAdmin or any PostgreSQL client
-- Database: dental_blogs

-- 1. CREATE A NEW BLOG POST
-- Replace values as needed
INSERT INTO blog_posts (
    title,
    slug,
    excerpt,
    content,
    category,
    tags,
    author,
    featured_image,
    published,
    published_at,
    reading_time
) VALUES (
    'Your Blog Post Title',
    'your-blog-post-slug',
    'A brief description of your blog post that will appear in previews.',
    '<p>Your full blog content in HTML format.</p><p>You can include multiple paragraphs, <strong>bold text</strong>, <em>italics</em>, and even images.</p>',
    'General',
    ARRAY['dental care', 'tips', 'health'],
    'Dr. Saada',
    '/images/blog/your-image.jpg',
    true,
    NOW(),
    3
);

-- 2. VIEW ALL BLOG POSTS
SELECT 
    id,
    title,
    slug,
    excerpt,
    category,
    author,
    published,
    created_at,
    published_at,
    reading_time
FROM blog_posts
ORDER BY created_at DESC;

-- 3. VIEW PUBLISHED POSTS ONLY
SELECT 
    title,
    slug,
    excerpt,
    category,
    published_at
FROM blog_posts 
WHERE published = true
ORDER BY published_at DESC;

-- 4. UPDATE A BLOG POST
-- Example: Update content of a specific post
UPDATE blog_posts 
SET 
    content = '<p>Updated content here...</p>',
    reading_time = 4
WHERE slug = 'your-blog-post-slug';

-- 5. PUBLISH/UNPUBLISH A POST
-- Publish a draft
UPDATE blog_posts 
SET 
    published = true,
    published_at = NOW()
WHERE slug = 'your-blog-post-slug';

-- Unpublish a post
UPDATE blog_posts 
SET 
    published = false,
    published_at = NULL
WHERE slug = 'your-blog-post-slug';

-- 6. DELETE A BLOG POST
DELETE FROM blog_posts 
WHERE slug = 'your-blog-post-slug';

-- 7. ADD A NEW CATEGORY
INSERT INTO blog_categories (name, slug, description)
VALUES (
    'Orthodontics',
    'orthodontics',
    'Articles about braces, aligners, and teeth straightening'
);

-- 8. VIEW ALL CATEGORIES
SELECT name, slug, description 
FROM blog_categories 
ORDER BY name;

-- 9. SEARCH POSTS BY KEYWORD
SELECT title, slug, excerpt, category
FROM blog_posts 
WHERE 
    (title ILIKE '%keyword%' OR content ILIKE '%keyword%')
    AND published = true
ORDER BY created_at DESC;

-- 10. GET POSTS BY CATEGORY
SELECT title, slug, excerpt, published_at
FROM blog_posts 
WHERE category = 'General' AND published = true
ORDER BY published_at DESC;

-- 11. COUNT POSTS
SELECT 
    COUNT(*) as total_posts,
    COUNT(CASE WHEN published = true THEN 1 END) as published_posts,
    COUNT(CASE WHEN published = false THEN 1 END) as draft_posts
FROM blog_posts;

-- 12. RECENT POSTS (Last 30 days)
SELECT title, slug, published_at
FROM blog_posts 
WHERE 
    published = true 
    AND published_at >= NOW() - INTERVAL '30 days'
ORDER BY published_at DESC;

-- SAMPLE BLOG POST TEMPLATES
-- Copy and modify these for quick blog creation

-- Template 1: Dental Tips Article
INSERT INTO blog_posts (title, slug, excerpt, content, category, tags, author, published, published_at, reading_time)
VALUES (
    '5 Essential Tips for Healthy Teeth',
    '5-essential-tips-healthy-teeth',
    'Discover simple yet effective ways to maintain optimal oral health and prevent dental problems.',
    '<h2>Introduction</h2>
    <p>Maintaining healthy teeth is crucial for overall well-being. Here are five essential tips from our dental experts.</p>
    
    <h3>1. Brush Twice Daily</h3>
    <p>Use fluoride toothpaste and brush for at least two minutes each time.</p>
    
    <h3>2. Floss Daily</h3>
    <p>Flossing removes plaque and food particles between teeth that brushing cannot reach.</p>
    
    <h3>3. Regular Dental Checkups</h3>
    <p>Visit your dentist every six months for professional cleaning and early problem detection.</p>
    
    <h3>4. Limit Sugary Foods</h3>
    <p>Reduce consumption of sweets and acidic beverages that can erode tooth enamel.</p>
    
    <h3>5. Stay Hydrated</h3>
    <p>Drinking water helps wash away bacteria and food particles throughout the day.</p>
    
    <h2>Conclusion</h2>
    <p>Following these simple tips can significantly improve your oral health. Contact <a href="/contact">Clinique Dentaire Saada</a> for personalized dental care.</p>',
    'General',
    ARRAY['oral health', 'prevention', 'dental tips'],
    'Dr. Saada',
    true,
    NOW(),
    3
);

-- Template 2: Treatment Information
INSERT INTO blog_posts (title, slug, excerpt, content, category, tags, author, published, published_at, reading_time)
VALUES (
    'Dental Implants: Everything You Need to Know',
    'dental-implants-everything-you-need-to-know',
    'A comprehensive guide to dental implants, including benefits, procedure, and aftercare.',
    '<h2>What Are Dental Implants?</h2>
    <p>Dental implants are titanium posts surgically placed into the jawbone to replace missing teeth roots.</p>
    
    <h3>Benefits of Dental Implants</h3>
    <ul>
        <li>Natural appearance and feel</li>
        <li>Permanent solution</li>
        <li>Preserves jawbone structure</li>
        <li>No impact on adjacent teeth</li>
    </ul>
    
    <h3>The Procedure</h3>
    <p>The implant process typically involves several steps over 3-6 months...</p>
    
    <h3>Aftercare</h3>
    <p>Proper care includes regular brushing, flossing, and dental visits...</p>
    
    <p><strong>Interested in dental implants?</strong> <a href="/contact">Contact us</a> for a consultation at Clinique Dentaire Saada in Rabat.</p>',
    'Treatments',
    ARRAY['dental implants', 'tooth replacement', 'oral surgery'],
    'Dr. Saada',
    true,
    NOW(),
    5
);

-- Template 3: Clinic News
INSERT INTO blog_posts (title, slug, excerpt, content, category, tags, author, published, published_at, reading_time)
VALUES (
    'New Advanced Technology at Clinique Dentaire Saada',
    'new-advanced-technology-clinique-dentaire-saada',
    'We are excited to announce the addition of cutting-edge dental technology to better serve our patients.',
    '<h2>Investing in Your Smile</h2>
    <p>At Clinique Dentaire Saada, we continuously invest in the latest dental technology to provide the best care for our patients.</p>
    
    <h3>Latest Equipment</h3>
    <ul>
        <li>Digital X-ray systems for reduced radiation exposure</li>
        <li>3D imaging for precise implant placement</li>
        <li>Laser therapy for comfortable treatments</li>
    </ul>
    
    <h3>Benefits for Patients</h3>
    <p>This new technology means faster treatments, better results, and improved comfort during procedures.</p>
    
    <p>Visit us in Rabat to experience the difference modern dentistry can make!</p>',
    'News',
    ARRAY['technology', 'clinic news', 'dental equipment'],
    'Clinique Dentaire Saada',
    true,
    NOW(),
    2
);