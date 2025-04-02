import React from 'react'

const CTASection = () => {
  return (
       <section className="py-20 px-6 bg-indigo-600 dark:bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take Control of Your Social Experience?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of users who have already made the switch to truly decentralized social media.
          </p>
          <button className="px-8 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            Join Now
          </button>
        </div>
      </section>
    
  )
}

export default CTASection
