"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Tag, Clock, User, ArrowRight, Search, Filter } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/form';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  images: string[];
  createdAt: string;
  published: boolean;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  const categories = [
    { id: 'all', name: 'All Articles', count: 0 },
    { id: 'general', name: 'General', count: 0 },
    { id: 'treatments', name: 'Treatments', count: 0 },
    { id: 'preventive-care', name: 'Preventive Care', count: 0 },
    { id: 'cosmetic-dentistry', name: 'Cosmetic Dentistry', count: 0 },
    { id: 'news', name: 'News', count: 0 },
  ];

  useEffect(() => {
    // Load posts from localStorage (in real app, would fetch from API)
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      try {
        const parsedPosts = JSON.parse(savedPosts);
        // Only show published posts on client side
        const publishedPosts = parsedPosts.filter((post: BlogPost) => post.published);
        setPosts(publishedPosts);
        setFilteredPosts(publishedPosts);
      } catch (error) {
        console.error('Error parsing saved posts:', error);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    // Filter posts based on search and category
    let filtered = posts;
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedCategory]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-xl text-gray-600">Loading articles...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Dental Health <span className="text-amber-400">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Expert insights, tips, and the latest in dental care from our professional team at Clinique Dentaire Saada
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {searchTerm || selectedCategory !== 'all' ? 'No articles found' : 'No articles yet'}
                </h3>
                <p className="text-gray-600">
                  {searchTerm || selectedCategory !== 'all' 
                    ? 'Try adjusting your search or filters to find what you\'re looking for.'
                    : 'We\'re working on bringing you valuable dental health content. Check back soon!'
                  }
                </p>
                {(searchTerm || selectedCategory !== 'all') && (
                  <Button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="mt-6 bg-blue-600 hover:bg-blue-700"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  Latest Articles
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                        <div className="relative h-64 overflow-hidden">
                          {post.images && post.images.length > 0 ? (
                            <Image
                              src={post.images[0]}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                              <div className="text-center text-white">
                                <Calendar className="w-12 h-12 mx-auto mb-2 opacity-80" />
                                <p className="text-sm font-medium opacity-90">Dental Health</p>
                              </div>
                            </div>
                          )}
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span className="bg-white bg-opacity-90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                              {post.category.replace('-', ' ')}
                            </span>
                          </div>

                          {/* Reading Time */}
                          <div className="absolute top-4 right-4">
                            <span className="bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {Math.ceil(post.description.split(' ').length / 200)} min
                            </span>
                          </div>
                        </div>

                        <CardContent className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(post.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>

                          <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {post.description}
                          </p>

                          {/* Tags */}
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span key={tagIndex} className="inline-flex items-center text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                  <Tag className="w-3 h-3 mr-1" />
                                  {tag}
                                </span>
                              ))}
                              {post.tags.length > 3 && (
                                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                                  +{post.tags.length - 3} more
                                </span>
                              )}
                            </div>
                          )}

                          {/* Read More Button */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center text-xs text-gray-500">
                              <User className="w-4 h-4 mr-1" />
                              Dr. Saada Team
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="group/btn hover:bg-blue-600 hover:text-white hover:border-blue-600"
                            >
                              Read More
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Ready for Your Perfect Smile?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your consultation today and discover how we can transform your smile with our premium dental services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">
                Book Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/#services">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                View Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}