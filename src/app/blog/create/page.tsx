"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Upload } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input, Textarea, Select } from '@/components/ui/form';

interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

export default function SimpleBlogForm() {
  const router = useRouter();
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tags: '',
    images: [] as File[]
  });

  useEffect(() => {
    // Set default categories if none exist
    setCategories([
      { id: '1', name: 'General', slug: 'general' },
      { id: '2', name: 'Treatments', slug: 'treatments' },
      { id: '3', name: 'Preventive Care', slug: 'preventive-care' },
      { id: '4', name: 'Cosmetic Dentistry', slug: 'cosmetic-dentistry' },
      { id: '5', name: 'News', slug: 'news' }
    ]);
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, images: filesArray }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('tags', formData.tags);
      
      // Add images
      formData.images.forEach((image, index) => {
        formDataToSend.append(`image_${index}`, image);
      });

      const response = await fetch('/api/blog/create', {
        method: 'POST',
        body: formDataToSend, // Don't set Content-Type, let browser set it with boundary
      });

      const result = await response.json();

      if (result.success) {
        // Save to localStorage for demo
        const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
        existingPosts.push(result.data);
        localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
        
        alert(`Blog post created successfully! 
        
Title: ${result.data.title}
Slug: /blog/${result.data.slug}
Images uploaded: ${result.data.images.length}
        
Redirecting to blog list...`);
        
        console.log('Created blog post:', result.data);
        
        // Redirect to blog list
        router.push('/blog');
        
      } else {
        alert('Error: ' + result.error);
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error while submitting form');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Create Blog Post</h1>
                <p className="text-gray-600">Simple blog form with image upload</p>
              </div>
            </div>
            <Button
              onClick={() => {
                const form = document.getElementById('blog-form') as HTMLFormElement;
                if (form) form.requestSubmit();
              }}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Save className="w-4 h-4 mr-2" />
              {loading ? 'Saving...' : 'Save Post'}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Blog Post Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form id="blog-form" onSubmit={handleSubmit} className="space-y-6">
              
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <Input
                  type="text"
                  value={formData.title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter blog post title..."
                  required
                  className="text-lg"
                />
                <p className="text-xs text-gray-500 mt-1">
                  URL will be: /blog/{generateSlug(formData.title) || 'your-post-title'}
                </p>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Write your blog post content here..."
                  rows={8}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.description.length} characters
                </p>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <Select
                  value={formData.category}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  required
                >
                  <option value="">Select a category...</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <Input
                  type="text"
                  value={formData.tags}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                  placeholder="dental care, tips, oral health (separated by commas)"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Separate multiple tags with commas
                </p>
              </div>

              {/* File Upload for Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Images
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-2">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <span className="text-blue-600 hover:text-blue-500">Upload images</span>
                      <span className="text-gray-500"> or drag and drop</span>
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG, GIF up to 10MB each
                  </p>
                </div>
                
                {/* Show selected images */}
                {formData.images.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Selected images ({formData.images.length}):
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {formData.images.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-20 object-cover rounded-lg border"
                          />
                          <p className="text-xs text-gray-600 mt-1 truncate">
                            {image.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Form Summary */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Form Summary:</h4>
                <div className="text-sm text-blue-800 space-y-1">
                  <p><strong>Title:</strong> {formData.title || 'Not set'}</p>
                  <p><strong>Category:</strong> {formData.category || 'Not selected'}</p>
                  <p><strong>Tags:</strong> {formData.tags || 'None'}</p>
                  <p><strong>Description:</strong> {formData.description.length} characters</p>
                  <p><strong>Images:</strong> {formData.images.length} files selected</p>
                </div>
              </div>

            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}