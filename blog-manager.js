const { pool } = require('./lib/database');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask questions
function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

// Function to create slug from title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Function to estimate reading time
function estimateReadingTime(content) {
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / 200); // Average reading speed: 200 words/minute
}

// Main blog management function
async function manageBlog() {
  console.log('\n🦷 Clinique Dentaire Saada - Blog Manager\n');
  
  while (true) {
    console.log('What would you like to do?');
    console.log('1. Create new blog post');
    console.log('2. View all posts');
    console.log('3. Publish/unpublish post');
    console.log('4. Delete post');
    console.log('5. View categories');
    console.log('6. Add category');
    console.log('7. Exit');
    
    const choice = await ask('\nEnter your choice (1-7): ');
    
    switch (choice) {
      case '1':
        await createPost();
        break;
      case '2':
        await viewPosts();
        break;
      case '3':
        await togglePublish();
        break;
      case '4':
        await deletePost();
        break;
      case '5':
        await viewCategories();
        break;
      case '6':
        await addCategory();
        break;
      case '7':
        console.log('👋 Goodbye!');
        process.exit(0);
        break;
      default:
        console.log('❌ Invalid choice. Please try again.');
    }
  }
}

// Create new blog post
async function createPost() {
  console.log('\n📝 Create New Blog Post\n');
  
  const title = await ask('Post title: ');
  const slug = await ask(`Slug (press Enter for "${createSlug(title)}"): `) || createSlug(title);
  const excerpt = await ask('Brief excerpt: ');
  
  console.log('\nContent (HTML format - type "END" on a new line when finished):');
  let content = '';
  let line;
  while ((line = await ask('')) !== 'END') {
    content += line + '\n';
  }
  
  // Show categories
  const categoriesResult = await pool.query('SELECT name FROM blog_categories ORDER BY name');
  console.log('\nAvailable categories:');
  categoriesResult.rows.forEach(cat => console.log(`- ${cat.name}`));
  
  const category = await ask('Category: ');
  const tagsInput = await ask('Tags (comma-separated): ');
  const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()) : [];
  const author = await ask('Author (press Enter for "Clinique Dentaire Saada"): ') || 'Clinique Dentaire Saada';
  const featuredImage = await ask('Featured image URL (optional): ') || null;
  
  const publishNow = await ask('Publish now? (y/N): ');
  const published = publishNow.toLowerCase() === 'y';
  
  const readingTime = estimateReadingTime(content);
  
  try {
    const query = `
      INSERT INTO blog_posts (
        title, slug, excerpt, content, category, tags, 
        author, featured_image, published, published_at, reading_time
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING id, title
    `;
    
    const values = [
      title, slug, excerpt, content, category, tags,
      author, featuredImage, published, published ? new Date() : null, readingTime
    ];
    
    const result = await pool.query(query, values);
    
    console.log(`\n✅ Blog post "${title}" created successfully!`);
    console.log(`📊 Estimated reading time: ${readingTime} minutes`);
    console.log(`🔗 URL: /blog/${slug}`);
    
    if (published) {
      console.log('🌟 Post is published and live!');
    } else {
      console.log('📝 Post saved as draft.');
    }
    
  } catch (error) {
    if (error.constraint === 'blog_posts_slug_key') {
      console.log('❌ Error: A post with this slug already exists.');
    } else {
      console.log('❌ Error creating post:', error.message);
    }
  }
}

// View all posts
async function viewPosts() {
  console.log('\n📚 All Blog Posts\n');
  
  try {
    const result = await pool.query(`
      SELECT id, title, slug, category, published, created_at, published_at 
      FROM blog_posts 
      ORDER BY created_at DESC
    `);
    
    if (result.rows.length === 0) {
      console.log('No blog posts found.');
      return;
    }
    
    result.rows.forEach((post, index) => {
      const status = post.published ? '🟢 Published' : '🟡 Draft';
      const date = post.published_at || post.created_at;
      
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   Slug: ${post.slug}`);
      console.log(`   Category: ${post.category}`);
      console.log(`   Status: ${status}`);
      console.log(`   Date: ${date.toDateString()}`);
      console.log(`   URL: /blog/${post.slug}`);
      console.log('');
    });
    
  } catch (error) {
    console.log('❌ Error fetching posts:', error.message);
  }
}

// Toggle publish status
async function togglePublish() {
  await viewPosts();
  
  const slug = await ask('Enter slug of post to publish/unpublish: ');
  
  try {
    const checkResult = await pool.query('SELECT title, published FROM blog_posts WHERE slug = $1', [slug]);
    
    if (checkResult.rows.length === 0) {
      console.log('❌ Post not found.');
      return;
    }
    
    const post = checkResult.rows[0];
    const newStatus = !post.published;
    
    await pool.query(
      'UPDATE blog_posts SET published = $1, published_at = $2 WHERE slug = $3',
      [newStatus, newStatus ? new Date() : null, slug]
    );
    
    console.log(`✅ "${post.title}" ${newStatus ? 'published' : 'unpublished'} successfully!`);
    
  } catch (error) {
    console.log('❌ Error updating post:', error.message);
  }
}

// Delete post
async function deletePost() {
  await viewPosts();
  
  const slug = await ask('Enter slug of post to DELETE: ');
  const confirm = await ask('Are you sure? This cannot be undone (y/N): ');
  
  if (confirm.toLowerCase() !== 'y') {
    console.log('❌ Deletion cancelled.');
    return;
  }
  
  try {
    const result = await pool.query('DELETE FROM blog_posts WHERE slug = $1 RETURNING title', [slug]);
    
    if (result.rows.length === 0) {
      console.log('❌ Post not found.');
    } else {
      console.log(`✅ Post "${result.rows[0].title}" deleted successfully.`);
    }
    
  } catch (error) {
    console.log('❌ Error deleting post:', error.message);
  }
}

// View categories
async function viewCategories() {
  console.log('\n📂 Blog Categories\n');
  
  try {
    const result = await pool.query('SELECT name, slug, description FROM blog_categories ORDER BY name');
    
    if (result.rows.length === 0) {
      console.log('No categories found.');
      return;
    }
    
    result.rows.forEach((cat, index) => {
      console.log(`${index + 1}. ${cat.name} (${cat.slug})`);
      if (cat.description) {
        console.log(`   Description: ${cat.description}`);
      }
      console.log('');
    });
    
  } catch (error) {
    console.log('❌ Error fetching categories:', error.message);
  }
}

// Add category
async function addCategory() {
  console.log('\n📁 Add New Category\n');
  
  const name = await ask('Category name: ');
  const slug = await ask(`Slug (press Enter for "${createSlug(name)}"): `) || createSlug(name);
  const description = await ask('Description (optional): ') || null;
  
  try {
    await pool.query(
      'INSERT INTO blog_categories (name, slug, description) VALUES ($1, $2, $3)',
      [name, slug, description]
    );
    
    console.log(`✅ Category "${name}" added successfully!`);
    
  } catch (error) {
    if (error.constraint === 'blog_categories_slug_key') {
      console.log('❌ Error: A category with this slug already exists.');
    } else {
      console.log('❌ Error creating category:', error.message);
    }
  }
}

// Start the application
if (require.main === module) {
  manageBlog().catch(console.error);
}

module.exports = { manageBlog };