import React from 'react';
import { HeartIcon, ChatBubbleLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

export default function PostCard({ post }) {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
          <div>
            <p className="font-medium text-gray-900 dark:text-white">
              {post.author}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {post.timestamp}
            </p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      <p className="mt-4 text-gray-900 dark:text-white">
        {post.content}
      </p>

      <div className="mt-4 flex items-center justify-between border-t dark:border-gray-700 pt-4">
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="flex items-center space-x-2 text-gray-500 hover:text-pink-500 transition-colors"
        >
          {isLiked ? (
            <HeartIconSolid className="w-5 h-5 text-pink-500" />
          ) : (
            <HeartIcon className="w-5 h-5" />
          )}
          <span>{post.likes}</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
          <ChatBubbleLeftIcon className="w-5 h-5" />
          <span>{post.comments}</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
          <ShareIcon className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
} 