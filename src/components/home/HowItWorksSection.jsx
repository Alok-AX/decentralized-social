import React from 'react';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
      <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
        Getting started with BlockSpace is simple.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        <StepCard 
          number={1} 
          title="Connect Your Wallet"
          description="Use Metamask, WalletConnect, or any other compatible wallet to join."
        />
        <StepCard 
          number={2} 
          title="Create Your Profile"
          description="Set up your decentralized identity with a profile that you truly own."
        />
        <StepCard 
          number={3} 
          title="Start Posting"
          description="Share content, engage with others, and build your Web3 social presence."
        />
      </div>
    </section>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl font-bold text-indigo-600">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
} 