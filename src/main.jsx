import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import { WagmiConfig, createConfig  } from 'wagmi'
import { mainnet, sepolia, polygon, optimism } from 'wagmi/chains'
import { RainbowKitProvider, getDefaultWallets, darkTheme } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { http } from 'viem'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import { Toaster } from 'react-hot-toast'

// Update your QueryClient configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000
    }
  }
})

// Define supported chains
const chains = [mainnet, sepolia, polygon, optimism]
// Get RainbowKit Wallets
const { connectors } = getDefaultWallets({
  appName: 'BlockSpace',
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
  chains
})

const config = createConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http()
  },
  connectors,
  autoConnect: true,
  syncConnectedChain: true
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <WagmiConfig config={config}>
            <RainbowKitProvider
              chains={chains}
              theme={darkTheme({
                accentColor: '#7c3aed',
                accentColorForeground: 'white',
                borderRadius: 'large',
                fontStack: 'system'
              })}
            >
              <Toaster 
                position="top-center"
                toastOptions={{
                  duration: 3000,
                  style: {
                    maxWidth: '500px',
                    padding: '16px',
                    textAlign: 'center',
                  },
                }} 
              />
              <App />
            </RainbowKitProvider>
          </WagmiConfig>
        </QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
