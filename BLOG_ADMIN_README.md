# 🦷 Blog Admin System - Clinique Dentaire Saada

A complete web-based admin panel for managing blog content with PostgreSQL database.

## 🚀 Quick Start

### 1. Database Setup
1. **Open setup page**: Go to http://localhost:3002/admin/setup
2. **Test connection**: Click "Test Connection" to verify PostgreSQL is working
3. **Initialize database**: Click "Initialize Database" to create tables and sample data

### 2. Access Admin Panel
- **URL**: http://localhost:3002/admin
- **Features**: Create, edit, publish, and delete blog posts

## 📊 Features

### ✅ What's Included:
- **Complete Admin Dashboard** with statistics
- **Blog Post Management** (CRUD operations)
- **Category Management** 
- **Draft/Publish System**
- **Tag Support**
- **Reading Time Calculation**
- **HTML Content Editor**
- **Sample Data** (5 categories + 1 sample post)

### 🔧 Technical Stack:
- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **Database**: PostgreSQL with connection pooling
- **API**: RESTful endpoints (`/api/admin/*`)
- **UI**: Custom components with Radix UI base

## 📋 Admin Panel Features

### Dashboard (`/admin`)
- View all blog posts in a table
- See publish status (Published/Draft)
- Quick actions: Edit, Publish/Unpublish, Delete
- Statistics cards showing totals
- Category management tab

### Create Post (`/admin/posts/new`)
- **Rich Form Editor** with HTML content
- **Auto-slug generation** from title
- **Category selection** from existing categories
- **Tag management** (comma-separated)
- **Author assignment**
- **Featured image** URL support
- **Save as Draft** or **Publish immediately**
- **Reading time** auto-calculation

## 🗄️ Database Structure

### Tables Created:
```sql
blog_categories
├── id (UUID, Primary Key)
├── name (VARCHAR, Unique)
├── slug (VARCHAR, Unique)
├── description (TEXT)
└── created_at (TIMESTAMP)

blog_posts
├── id (UUID, Primary Key)
├── title (VARCHAR)
├── slug (VARCHAR, Unique)
├── excerpt (TEXT)
├── content (TEXT)
├── category (VARCHAR)
├── tags (TEXT[])
├── author (VARCHAR)
├── featured_image (VARCHAR)
├── published (BOOLEAN)
├── created_at (TIMESTAMP)
├── updated_at (TIMESTAMP)
├── published_at (TIMESTAMP)
└── reading_time (INTEGER)
```

### Sample Data Included:
- **5 Categories**: General, Treatments, Preventive Care, Cosmetic Dentistry, News
- **1 Sample Post**: "5 Essential Tips for Healthy Teeth" (published)

## 🔧 API Endpoints

### Posts
- `GET /api/admin/posts` - List all posts
- `POST /api/admin/posts` - Create new post
- `GET /api/admin/posts/[id]` - Get single post
- `PUT /api/admin/posts/[id]` - Update post
- `DELETE /api/admin/posts/[id]` - Delete post

### Categories
- `GET /api/admin/categories` - List all categories
- `POST /api/admin/categories` - Create new category

### System
- `GET /api/admin/test` - Test database connection
- `POST /api/admin/init` - Initialize database tables

## 📝 Content Creation Guide

### HTML Formatting
The admin panel uses HTML for content formatting. Common tags:

```html
<h2>Main Heading</h2>
<h3>Sub Heading</h3>
<p>Paragraph text with <strong>bold</strong> and <em>italic</em></p>
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
<a href="/services/implants">Link to service page</a>
```

### Best Practices:
1. **SEO-friendly slugs**: Use lowercase, hyphens, no spaces
2. **Compelling excerpts**: 1-2 sentences that summarize the post
3. **Relevant tags**: Use 3-5 descriptive tags
4. **Reading time**: Auto-calculated at ~200 words/minute
5. **Internal linking**: Link to your service pages when relevant

## 🎯 Usage Workflow

### Creating Your First Blog Post:
1. Go to `/admin/setup` and initialize database
2. Visit `/admin` to see the dashboard
3. Click "New Post" to create content
4. Fill in title (slug auto-generates)
5. Write compelling excerpt
6. Create HTML content with formatting
7. Select category and add tags
8. Choose "Save Draft" or "Publish"

### Managing Content:
- **Drafts**: Save work in progress, not visible to public
- **Published**: Live content visible on your website
- **Edit**: Modify existing posts anytime
- **Delete**: Permanent removal (with confirmation)

## 🔒 Security Notes

- **No authentication** included (add as needed)
- **Direct database access** - ensure PostgreSQL is secured
- **Input validation** on all forms
- **SQL injection protection** via parameterized queries

## 🛠️ Customization

### Adding Authentication:
Consider adding simple password protection or JWT tokens for production use.

### Extending Features:
- Image upload functionality
- Rich text editor (WYSIWYG)
- Comment management
- SEO metadata fields
- Scheduled publishing

### Integration with Main Site:
To display blog posts on your main website, create pages at:
- `/blog` - List all published posts
- `/blog/[slug]` - Individual post pages

## 📞 Support

This admin system is designed for **Clinique Dentaire Saada** in Rabat, Morocco. 

For technical assistance, check:
1. Database connection at `/admin/setup`
2. Browser console for JavaScript errors
3. Terminal output for API errors
4. PostgreSQL logs for database issues

---

**Ready to create amazing dental content!** 🦷✨