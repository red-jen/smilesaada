"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Folder, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input, Textarea } from '@/components/ui/form';

export default function NewCategory() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: ''
  });

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setFormData(prev => ({
      ...prev,
      name,
      slug: prev.slug || generateSlug(name)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/admin/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert('Category created successfully!');
        router.push('/admin');
      } else {
        alert(data.error || 'Failed to create category');
      }
    } catch (error) {
      console.error('Error creating category:', error);
      alert('Failed to create category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900">New Category</h1>
                <p className="text-sm text-gray-600">Create a new blog category</p>
              </div>
            </div>
            <Button
              onClick={() => document.getElementById('submit-form')?.click()}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700"
              size="sm"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Category
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Folder className="w-5 h-5 mr-2 text-purple-600" />
                Category Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                  <Folder className="w-4 h-4 mr-2" />
                  Category Name *
                </label>
                <Input
                  value={formData.name}
                  onChange={handleNameChange}
                  placeholder="e.g., Orthodontics, Preventive Care, Cosmetic Dentistry"
                  required
                  className="text-lg font-medium"
                />
                <p className="text-xs text-gray-500 mt-1">
                  📁 Choose a clear, descriptive name for your category
                </p>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                  <Plus className="w-4 h-4 mr-2" />
                  URL Slug *
                </label>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">/blog/category/</span>
                  <Input
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    placeholder="category-url-slug"
                    required
                    className="flex-1"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  🔗 URL-friendly version (lowercase, hyphens only)
                </p>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                  <Folder className="w-4 h-4 mr-2" />
                  Description
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Brief description of what this category covers..."
                  rows={4}
                  className="resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  📝 Optional: Helps visitors understand what content to expect
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">💡 Category Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-blue-700 space-y-2">
                <p><strong>Good category examples:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Treatments:</strong> Information about dental procedures</li>
                  <li><strong>Preventive Care:</strong> Tips for avoiding dental problems</li>
                  <li><strong>Cosmetic Dentistry:</strong> Smile enhancement procedures</li>
                  <li><strong>Patient Stories:</strong> Success stories and testimonials</li>
                  <li><strong>Clinic News:</strong> Updates and announcements</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <button id="submit-form" type="submit" className="hidden" disabled={loading}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}