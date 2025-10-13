"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Eye, Image, Copy, FileText, Tag, User, Folder } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input, Textarea, Select } from '@/components/ui/form';

interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

interface ImageOption {
  filename: string;
  displayName: string;
  path: string;
}

export default function NewPost() {
  const router = useRouter();
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    author: 'Clinique Dentaire Saada',
    featuredImage: '',
    published: false
  });

  // Available images for blog posts
  const availableImages: ImageOption[] = [
    { filename: 'IMG-20251003-WA0001.jpg', displayName: 'Clinic Hero Image', path: '/images/IMG-20251003-WA0001.jpg' },
    { filename: 'IMG-20251003-WA0002.jpg', displayName: 'Clinic Interior 1', path: '/images/IMG-20251003-WA0002.jpg' },
    { filename: 'IMG-20251003-WA0003.jpg', displayName: 'Clinic Interior 2', path: '/images/IMG-20251003-WA0003.jpg' },
    { filename: 'IMG-20251003-WA0004.jpg', displayName: 'Dental Equipment', path: '/images/IMG-20251003-WA0004.jpg' },
    { filename: 'IMG-20251003-WA0005.jpg', displayName: 'Treatment Room 1', path: '/images/IMG-20251003-WA0005.jpg' },
    { filename: 'IMG-20251003-WA0006.jpg', displayName: 'Treatment Room 2', path: '/images/IMG-20251003-WA0006.jpg' },
    { filename: 'IMG-20251003-WA0007.jpg', displayName: 'Reception Area', path: '/images/IMG-20251003-WA0007.jpg' },
    { filename: 'IMG-20251003-WA0008.jpg', displayName: 'Waiting Area', path: '/images/IMG-20251003-WA0008.jpg' },
    { filename: 'IMG-20251003-WA0009.jpg', displayName: 'Clinic Exterior', path: '/images/IMG-20251003-WA0009.jpg' },
    { filename: 'IMG-20251003-WA0010.jpg', displayName: 'Dental Chair', path: '/images/IMG-20251003-WA0010.jpg' },
    { filename: 'IMG-20251003-WA0011.jpg', displayName: 'Staff Photo', path: '/images/IMG-20251003-WA0011.jpg' },
    { filename: 'IMG-20251003-WA0012.jpg', displayName: 'Dental Tools', path: '/images/IMG-20251003-WA0012.jpg' },
    { filename: 'IMG-20251003-WA0013.jpg', displayName: 'Consultation Room', path: '/images/IMG-20251003-WA0013.jpg' },
    { filename: 'IMG-20251003-WA0014.jpg', displayName: 'X-Ray Equipment', path: '/images/IMG-20251003-WA0014.jpg' },
    { filename: 'IMG-20251005-WA0006.jpg', displayName: 'Patient Care', path: '/images/IMG-20251005-WA0006.jpg' }
  ];

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/admin/categories');
      const data = await response.json();
      if (data.success) {
        setCategories(data.data);
        if (data.data.length > 0) {
          setFormData(prev => ({ ...prev, category: data.data[0].name }));
        }
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      const postData = {
        ...formData,
        tags: tagsArray,
        featuredImage: formData.featuredImage || null
      };

      const response = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      if (data.success) {
        alert('Post created successfully!');
        router.push('/admin');
      } else {
        alert(data.error || 'Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDraft = () => {
    setFormData(prev => ({ ...prev, published: false }));
    setTimeout(() => {
      document.getElementById('submit-form')?.click();
    }, 100);
  };

  const handlePublish = () => {
    setFormData(prev => ({ ...prev, published: true }));
    setTimeout(() => {
      document.getElementById('submit-form')?.click();
    }, 100);
  };

  const insertImageIntoContent = (imagePath: string, altText: string) => {
    const imageHtml = `<img src="${imagePath}" alt="${altText}" class="w-full max-w-2xl mx-auto rounded-lg shadow-md my-6" />`;
    setFormData(prev => ({
      ...prev,
      content: prev.content + '\n\n' + imageHtml + '\n\n'
    }));
    setShowImagePicker(false);
  };

  const copyImagePath = (imagePath: string) => {
    navigator.clipboard.writeText(imagePath);
    alert('Image path copied to clipboard!');
  };

  const insertTextSnippet = (snippet: string) => {
    setFormData(prev => ({
      ...prev,
      content: prev.content + '\n\n' + snippet + '\n\n'
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900">New Blog Post</h1>
                <p className="text-sm text-gray-600">Create a new article for your blog</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={handleSaveDraft}
                disabled={loading}
                size="sm"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button
                onClick={handlePublish}
                disabled={loading}
                className="bg-green-600 hover:bg-green-700"
                size="sm"
              >
                <Eye className="w-4 h-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  Post Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <FileText className="w-4 h-4 mr-2" />
                    Title *
                  </label>
                  <Input
                    value={formData.title}
                    onChange={handleTitleChange}
                    placeholder="Enter an engaging title for your blog post..."
                    required
                    className="text-lg font-medium"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    ✏️ Make it catchy and SEO-friendly (50-60 characters recommended)
                  </p>
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <Copy className="w-4 h-4 mr-2" />
                    URL Slug *
                  </label>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">/blog/</span>
                    <Input
                      value={formData.slug}
                      onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                      placeholder="post-url-slug"
                      required
                      className="flex-1"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    🔗 URL-friendly version of your title (lowercase, hyphens only)
                  </p>
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <FileText className="w-4 h-4 mr-2" />
                    Excerpt *
                  </label>
                  <Textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Write a compelling summary that will appear in blog previews and search results..."
                    rows={3}
                    required
                    className="resize-none"
                  />
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs text-gray-500">
                      📝 This appears in search results and social media previews
                    </p>
                    <span className="text-xs text-gray-400">
                      {formData.excerpt.length}/200 characters
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="flex items-center text-sm font-medium text-gray-700">
                      <FileText className="w-4 h-4 mr-2" />
                      Content *
                    </label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setShowImagePicker(!showImagePicker)}
                      className="text-blue-600"
                    >
                      <Image className="w-4 h-4 mr-2" />
                      Add Image
                    </Button>
                  </div>
                  
                  {/* Image Picker Modal */}
                  {showImagePicker && (
                    <div className="mb-4 p-4 border rounded-lg bg-blue-50">
                      <h4 className="font-medium text-gray-900 mb-3">Choose an image to insert:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-64 overflow-y-auto">
                        {availableImages.map((image) => (
                          <div key={image.filename} className="relative group">
                            <img
                              src={image.path}
                              alt={image.displayName}
                              className="w-full h-20 object-cover rounded cursor-pointer border-2 border-transparent hover:border-blue-500"
                              onClick={() => insertImageIntoContent(image.path, image.displayName)}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded flex items-center justify-center transition-all">
                              <Button
                                type="button"
                                size="sm"
                                className="opacity-0 group-hover:opacity-100 text-xs"
                                onClick={() => insertImageIntoContent(image.path, image.displayName)}
                              >
                                Insert
                              </Button>
                            </div>
                            <p className="text-xs text-gray-600 mt-1 truncate">{image.displayName}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 flex justify-end">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setShowImagePicker(false)}
                        >
                          Close
                        </Button>
                      </div>
                    </div>
                  )}

                  <Textarea
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    placeholder="Write your blog content using HTML tags..."
                    rows={20}
                    required
                    className="font-mono text-sm resize-none"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    💡 Use HTML for formatting. Images will be inserted automatically above.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick HTML Snippets */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Quick HTML Snippets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => insertTextSnippet('<h2>Main Heading</h2>\n<p>Your content here...</p>')}
                  >
                    Section
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => insertTextSnippet('<p><strong>Important:</strong> Your text here...</p>')}
                  >
                    Important Note
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => insertTextSnippet('<ul>\n  <li>First point</li>\n  <li>Second point</li>\n  <li>Third point</li>\n</ul>')}
                  >
                    Bullet List
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => insertTextSnippet('<p>Learn more about our <a href="/services/implants">dental implants</a> service.</p>')}
                  >
                    Service Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Folder className="w-5 h-5 mr-2 text-purple-600" />
                  Post Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <Folder className="w-4 h-4 mr-2" />
                    Category *
                  </label>
                  <Select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    required
                    className="w-full"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        📁 {category.name}
                      </option>
                    ))}
                  </Select>
                  <p className="text-xs text-gray-500 mt-1">
                    🏷️ Choose the most relevant category for your post
                  </p>
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <Tag className="w-4 h-4 mr-2" />
                    Tags
                  </label>
                  <Input
                    value={formData.tags}
                    onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                    placeholder="dental care, tips, oral health"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    🏷️ Separate multiple tags with commas (helps with searchability)
                  </p>
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <User className="w-4 h-4 mr-2" />
                    Author
                  </label>
                  <Input
                    value={formData.author}
                    onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                    placeholder="Dr. Saada"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    👤 The person or clinic name to credit as author
                  </p>
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <Image className="w-4 h-4 mr-2" />
                    Featured Image
                  </label>
                  <div className="space-y-2">
                    <Input
                      value={formData.featuredImage}
                      onChange={(e) => setFormData(prev => ({ ...prev, featuredImage: e.target.value }))}
                      placeholder="/images/IMG-20251003-WA0001.jpg"
                    />
                    <div className="grid grid-cols-3 gap-2">
                      {availableImages.slice(0, 6).map((image) => (
                        <img
                          key={image.filename}
                          src={image.path}
                          alt={image.displayName}
                          className="w-full h-12 object-cover rounded cursor-pointer border-2 border-transparent hover:border-blue-500"
                          onClick={() => setFormData(prev => ({ ...prev, featuredImage: image.path }))}
                          title={`Click to use: ${image.displayName}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    🖼️ Click an image above or enter a custom path
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={`${formData.published ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'}`}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Publishing Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Current Status:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      formData.published 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {formData.published ? '🌟 Published' : '📝 Draft'}
                    </span>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      💡 <strong>Draft:</strong> Visible only to you<br/>
                      🌟 <strong>Published:</strong> Live on your website
                    </p>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-blue-600">
                      Use the buttons in the top header to save or publish your post.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-sm">
                  <FileText className="w-4 h-4 mr-2" />
                  HTML Quick Reference
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs space-y-3">
                  <div className="grid grid-cols-1 gap-2">
                    <div className="p-2 bg-gray-50 rounded">
                      <strong className="text-blue-600">Headings:</strong><br/>
                      <code>&lt;h2&gt;Main Section&lt;/h2&gt;</code><br/>
                      <code>&lt;h3&gt;Subsection&lt;/h3&gt;</code>
                    </div>
                    <div className="p-2 bg-gray-50 rounded">
                      <strong className="text-blue-600">Text:</strong><br/>
                      <code>&lt;p&gt;Paragraph&lt;/p&gt;</code><br/>
                      <code>&lt;strong&gt;Bold&lt;/strong&gt;</code><br/>
                      <code>&lt;em&gt;Italic&lt;/em&gt;</code>
                    </div>
                    <div className="p-2 bg-gray-50 rounded">
                      <strong className="text-blue-600">Lists:</strong><br/>
                      <code>&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</code>
                    </div>
                    <div className="p-2 bg-gray-50 rounded">
                      <strong className="text-blue-600">Links:</strong><br/>
                      <code>&lt;a href="/services"&gt;Text&lt;/a&gt;</code>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-gray-500">
                      💡 Images are auto-formatted when inserted via the "Add Image" button
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <button id="submit-form" type="submit" className="hidden" disabled={loading}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}