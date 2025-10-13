"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Database, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TestResult {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
  details?: string;
}

export default function DatabaseSetup() {
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [initResult, setInitResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/test');
      const result = await response.json();
      setTestResult(result);
    } catch (error) {
      setTestResult({
        success: false,
        message: 'Failed to test connection',
        error: error instanceof Error ? error.message : 'Network error'
      });
    }
    setLoading(false);
  };

  const initializeDatabase = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/init', { method: 'POST' });
      const result = await response.json();
      setInitResult(result);
    } catch (error) {
      setInitResult({
        success: false,
        message: 'Failed to initialize database',
        error: error instanceof Error ? error.message : 'Network error'
      });
    }
    setLoading(false);
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
                <h1 className="text-2xl font-bold text-gray-900">Database Setup</h1>
                <p className="text-gray-600">Initialize your blog database</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Setup Instructions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Prerequisites:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                    <li>PostgreSQL server running on localhost:5432</li>
                    <li>Database named "dental_blogs" created</li>
                    <li>User "postgres" with password "Ren-ji24"</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">Steps:</h3>
                  <ol className="list-decimal list-inside text-sm text-gray-600 mt-2 space-y-1">
                    <li>Test the database connection</li>
                    <li>Initialize tables and sample data</li>
                    <li>Access the admin panel</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connection Test */}
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Test Database Connection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button 
                  onClick={testConnection} 
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {loading ? 'Testing...' : 'Test Connection'}
                </Button>

                {testResult && (
                  <div className={`p-4 rounded-lg ${
                    testResult.success 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    <div className="flex items-center">
                      {testResult.success ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 mr-2" />
                      )}
                      <span className={`font-medium ${
                        testResult.success ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {testResult.message}
                      </span>
                    </div>
                    
                    {testResult.success && testResult.data && (
                      <div className="mt-2 text-sm text-green-700">
                        <p>Connected at: {new Date(testResult.data.timestamp).toLocaleString()}</p>
                      </div>
                    )}
                    
                    {!testResult.success && (testResult.error || testResult.details) && (
                      <div className="mt-2 text-sm text-red-700">
                        <p>Error: {testResult.error || testResult.details}</p>
                        <div className="mt-2 p-2 bg-red-100 rounded text-xs">
                          <strong>Common solutions:</strong>
                          <ul className="list-disc list-inside mt-1">
                            <li>Make sure PostgreSQL is installed and running</li>
                            <li>Create database: <code>CREATE DATABASE dental_blogs;</code></li>
                            <li>Check credentials in .env.local file</li>
                            <li>Verify firewall settings</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Database Initialization */}
          <Card>
            <CardHeader>
              <CardTitle>Step 2: Initialize Database</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  This will create the blog tables and add sample data including categories and a sample blog post.
                </p>
                
                <Button 
                  onClick={initializeDatabase} 
                  disabled={loading || !testResult?.success}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {loading ? 'Initializing...' : 'Initialize Database'}
                </Button>

                {initResult && (
                  <div className={`p-4 rounded-lg ${
                    initResult.success 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    <div className="flex items-center">
                      {initResult.success ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 mr-2" />
                      )}
                      <span className={`font-medium ${
                        initResult.success ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {initResult.message}
                      </span>
                    </div>
                    
                    {!initResult.success && (initResult.error || initResult.details) && (
                      <div className="mt-2 text-sm text-red-700">
                        <p>Error: {initResult.error || initResult.details}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          {testResult?.success && initResult?.success && (
            <Card className="bg-green-50 border border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">✅ Setup Complete!</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-green-700">
                    Your blog database is now ready. You can now access the admin panel to manage your content.
                  </p>
                  
                  <div className="flex space-x-4">
                    <Link href="/admin">
                      <Button className="bg-green-600 hover:bg-green-700">
                        Go to Admin Panel
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button variant="outline">
                        Back to Website
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}