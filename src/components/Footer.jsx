import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 md:mb-0">
          BlockSpace
        </div>
        
        {/* Add navigation links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link to="/#explore" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
            Explore
          </Link>
          <Link to="/#features" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
            Features
          </Link>
          <Link to="/#how-it-works" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
            How It Works
          </Link>
          <Link to="/feed" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
            Feed
          </Link>
        </div>

        <div className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} BlockSpace. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
