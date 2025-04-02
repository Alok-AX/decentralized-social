import { Link } from 'react-router-dom'
import WalletButton from './WalletButton'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container flex items-center justify-between mx-auto">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          BlockSpace
        </Link>
      </div>

      <div className="hidden md:flex space-x-6 flex-1 justify-center">
        <Link to="/#explore" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
          Explore
        </Link>
        <Link to="/#features" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
          Features
        </Link>
        <Link to="/#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
          How It Works
        </Link>
        <Link to="/feed" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
          Feed
        </Link>
      </div>

      <div className="flex items-center space-x-4 flex-1 justify-end">
        <ThemeToggle />
        <WalletButton />
      </div>
      </div>
    </nav>
  )
}