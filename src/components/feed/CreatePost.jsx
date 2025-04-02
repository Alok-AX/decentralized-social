import React, { useState } from 'react';
import { PhotoIcon, LinkIcon, FaceSmileIcon } from '@heroicons/react/24/outline';

export default function CreatePost() {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post creation here
    console.log('Creating post:', content);
    setContent('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 bg-transparent border-none focus:ring-0 resize-none"
              rows={3}
            />
            
            <div className="flex items-center justify-between pt-3 border-t dark:border-gray-700">
              <div className="flex space-x-4">
                <button type="button" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <PhotoIcon className="w-5 h-5" />
                </button>
                <button type="button" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <LinkIcon className="w-5 h-5" />
                </button>
                <button type="button" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <FaceSmileIcon className="w-5 h-5" />
                </button>
              </div>
              
              <button
                type="submit"
                disabled={!content.trim()}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
} 