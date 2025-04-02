import React from 'react';
import heroImage from '../../assets/hero_right.avif';

export default function HeroSection() {
  return (
    <section id="explore" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className=" text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Decentralized Social Owned By You
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Join the next generation of social media where you own your content, your data, and your social graph.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img 
            src={heroImage} 
            alt="Hero Image" 
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
} 