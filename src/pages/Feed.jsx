import React from 'react';
import { useAccount } from 'wagmi';
import Navbar from '../components/Navbar';
import CreatePost from '../components/feed/CreatePost';
import PostCard from '../components/feed/PostCard';
import WalletButton from '../components/WalletButton';
import Footer from '../components/Footer';

export default function Feed() {
  const { isConnected } = useAccount();
  
  // Mock posts data
  const posts = [
    {
      id: 1,
      author: '0x1a2b...3c4d',
      content: 'Just posted my first content on BlockSpace! So excited to be part of this decentralized social network.',
      timestamp: '2 hours ago',
      likes: 12,
      comments: 3
    },
    {
      id: 2,
      author: '0x5e6f...7g8h',
      content: 'The future of social media is here. No more algorithms deciding what you see. No more shadow banning. Just pure, unfiltered content.',
      timestamp: '5 hours ago',
      likes: 45,
      comments: 8
    },
    {
      id: 3,
      author: '0x9i0j...1k2l',
      content: 'Check out my new NFT collection! Minting now on OpenSea. #web3 #nft',
      timestamp: '1 day ago',
      likes: 89,
      comments: 15
    }
  ]

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Connect Your Wallet
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            To access your personalized feed and start posting, please connect your Web3 wallet.
          </p>
          <div className="inline-block">
            <WalletButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      <Navbar />
      
      <div className="max-w-2xl mx-auto py-8 px-4">
        <CreatePost />
        
        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}