import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useConnect } from 'wagmi'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function WalletButton() {
  const { isConnected, address } = useAccount()
  const { error } = useConnect()

  useEffect(() => {
    if (isConnected && address) {
      toast.success(
        <div className="flex flex-col items-center gap-1">
          <span className="font-bold">Wallet Connected Successfully!</span>
          <span className="text-sm opacity-90">
            {address.slice(0, 6)}...{address.slice(-4)}
          </span>
        </div>,
        {
          duration: 3000,
          style: {
            background: '#10B981',
            color: 'white',
            minWidth: '300px',
          },
          icon: '🎉',
        }
      )
    }
  }, [isConnected, address])

  useEffect(() => {
    const handleDisconnect = () => {
      if (!isConnected) {
        toast.error(
          <div className="flex flex-col items-center gap-1">
            <span className="font-bold">Wallet Disconnected</span>
            <span className="text-sm opacity-90">Your wallet has been disconnected</span>
          </div>,
          {
            duration: 3000,
            style: {
              background: '#EF4444',
              color: 'white',
              minWidth: '300px',
            },
            icon: '👋',
          }
        )
      }
    }

    if (!isConnected) {
      handleDisconnect()
    }
  }, [isConnected])

  // Handle connection errors
  useEffect(() => {
    if (error) {
      toast.error(
        <div className="flex flex-col items-center gap-1">
          <span className="font-bold">Connection Failed</span>
          <span className="text-sm opacity-90">
            {error.message || 'Failed to connect wallet'}
          </span>
        </div>,
        {
          duration: 4000,
          style: {
            background: '#DC2626',
            color: 'white',
            minWidth: '300px',
          },
          icon: '❌',
        }
      )
    }
  }, [error])

  return (
    <ConnectButton 
      label="Connect Wallet"
      showBalance={false}
      chainStatus="icon"
      accountStatus={{
        smallScreen: 'avatar',
        largeScreen: 'full',
      }}
    />
  )
}