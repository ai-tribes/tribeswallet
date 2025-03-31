import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { XMarkIcon } from '@heroicons/react/24/outline';

// Define types for tribe data
interface EcosystemItem {
  name: string;
  status: 'Live' | 'In Progress' | 'Planned';
}

interface SocialLinks {
  website: string;
  twitter: string;
  telegram: string;
  discord: string;
}

interface Tribe {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  marketCap: string;
  holders: string;
  description: string;
  tokenPrice: string;
  volume24h: string;
  telegramMembers: string;
  discordMembers: string;
  color: string;
  ecosystem: EcosystemItem[];
  socialLinks: SocialLinks;
}

// Tribe data structure based on available information
const tribes: Tribe[] = [
  {
    id: 'catwifhat',
    name: 'Cat Wif Hat',
    symbol: 'CATWIFHAT',
    logo: '/tribe-assets/placeholder.png',
    marketCap: '$210M',
    holders: '9,843',
    description: "The feline sensation taking over the memecoin world. A simple cat, adorned with a hat, capturing hearts across the blockchain.",
    tokenPrice: '$0.00034',
    volume24h: '$12.4M',
    telegramMembers: '34,500',
    discordMembers: '12,300',
    color: 'from-blue-500 to-purple-600',
    ecosystem: [
      { name: 'DEX Listing', status: 'Live' },
      { name: 'CEX Listing', status: 'In Progress' },
      { name: 'Community DAO', status: 'Planned' },
      { name: 'NFT Collection', status: 'Live' }
    ],
    socialLinks: {
      website: 'https://catwifhat.com',
      twitter: 'https://twitter.com/catwifhat',
      telegram: 'https://t.me/catwifhat',
      discord: 'https://discord.gg/catwifhat'
    }
  },
  {
    id: 'brett',
    name: 'Brett',
    symbol: 'BRETT',
    logo: '/tribe-assets/placeholder.png',
    marketCap: '$78M',
    holders: '5,247',
    description: "A memecoin celebrating the legendary crypto trader Brett, known for his uncanny market predictions and iconic community presence.",
    tokenPrice: '$0.00089',
    volume24h: '$8.2M',
    telegramMembers: '28,300',
    discordMembers: '8,700',
    color: 'from-red-500 to-orange-500',
    ecosystem: [
      { name: 'DEX Listing', status: 'Live' },
      { name: 'CEX Listing', status: 'Live' },
      { name: 'Community DAO', status: 'Live' },
      { name: 'Merch Store', status: 'Live' }
    ],
    socialLinks: {
      website: 'https://brettcoin.io',
      twitter: 'https://twitter.com/brettcoin',
      telegram: 'https://t.me/brettcoin',
      discord: 'https://discord.gg/brettcoin'
    }
  },
  {
    id: 'mog',
    name: 'Mog Coin',
    symbol: 'MOG',
    logo: '/tribe-assets/placeholder.png',
    marketCap: '$345M',
    holders: '12,843',
    description: "The legendary meme cat that started a movement. MOG represents the spirit of the crypto community - playful, resilient, and occasionally chaotic.",
    tokenPrice: '$0.00024',
    volume24h: '$24.7M',
    telegramMembers: '48,200',
    discordMembers: '22,500',
    color: 'from-green-400 to-teal-500',
    ecosystem: [
      { name: 'DEX Listing', status: 'Live' },
      { name: 'CEX Listing', status: 'Live' },
      { name: 'Community DAO', status: 'Live' },
      { name: 'NFT Collection', status: 'Live' }
    ],
    socialLinks: {
      website: 'https://mogcoin.co',
      twitter: 'https://twitter.com/mogcoin',
      telegram: 'https://t.me/mogcoincommunity',
      discord: 'https://discord.gg/mogcoin'
    }
  },
  {
    id: 'pepe',
    name: 'Pepe',
    symbol: 'PEPE',
    logo: '/tribe-assets/placeholder.png',
    marketCap: '$2.8B',
    holders: '135,890',
    description: "The iconic frog meme that transformed into one of crypto's most recognizable and beloved tokens. PEPE embodies the meme culture of web3.",
    tokenPrice: '$0.00000721',
    volume24h: '$210.4M',
    telegramMembers: '95,300',
    discordMembers: '75,800',
    color: 'from-green-500 to-lime-400',
    ecosystem: [
      { name: 'DEX Listing', status: 'Live' },
      { name: 'CEX Listing', status: 'Live' },
      { name: 'Community DAO', status: 'Live' },
      { name: 'Merch Store', status: 'Live' }
    ],
    socialLinks: {
      website: 'https://pepecoin.org',
      twitter: 'https://twitter.com/pepecoinofficial',
      telegram: 'https://t.me/pepecoinofficial',
      discord: 'https://discord.gg/pepecoin'
    }
  },
  {
    id: 'turbo',
    name: 'Turbo',
    symbol: 'TURBO',
    logo: '/tribe-assets/placeholder.png',
    marketCap: '$124M',
    holders: '6,542',
    description: "Accelerating the pace of memecoin innovation with lightning-fast transactions and an energetic community of speed enthusiasts.",
    tokenPrice: '$0.00123',
    volume24h: '$14.8M',
    telegramMembers: '31,200',
    discordMembers: '15,400',
    color: 'from-yellow-400 to-orange-500',
    ecosystem: [
      { name: 'DEX Listing', status: 'Live' },
      { name: 'CEX Listing', status: 'Planned' },
      { name: 'Community DAO', status: 'In Progress' },
      { name: 'NFT Collection', status: 'Planned' }
    ],
    socialLinks: {
      website: 'https://turbocoin.network',
      twitter: 'https://twitter.com/turbocoin',
      telegram: 'https://t.me/turbocoinofficial',
      discord: 'https://discord.gg/turbocoin'
    }
  },
  {
    id: 'bonk',
    name: 'Bonk',
    symbol: 'BONK',
    logo: '/tribe-assets/placeholder.png',
    marketCap: '$675M',
    holders: '78,932',
    description: "Solana's favorite dog-themed memecoin that revitalized the ecosystem. BONK represents community strength and fun in the Solana ecosystem.",
    tokenPrice: '$0.00001042',
    volume24h: '$82.3M',
    telegramMembers: '65,400',
    discordMembers: '48,200',
    color: 'from-amber-500 to-yellow-300',
    ecosystem: [
      { name: 'DEX Listing', status: 'Live' },
      { name: 'CEX Listing', status: 'Live' },
      { name: 'Community DAO', status: 'Live' },
      { name: 'NFT Collection', status: 'Live' }
    ],
    socialLinks: {
      website: 'https://bonkcoin.com',
      twitter: 'https://twitter.com/bonk_coin',
      telegram: 'https://t.me/bonk_coin',
      discord: 'https://discord.gg/bonk'
    }
  },
  {
    id: 'shiba',
    name: 'Shiba Inu',
    symbol: 'SHIB',
    logo: '/tribe-assets/placeholder.png',
    marketCap: '$13.8B',
    holders: '1,247,843',
    description: "The 'Dogecoin killer' that evolved into a vibrant ecosystem with its own DEX, NFTs, and metaverse projects. SHIB exemplifies memecoin evolution.",
    tokenPrice: '$0.00002342',
    volume24h: '$430.5M',
    telegramMembers: '285,700',
    discordMembers: '215,300',
    color: 'from-orange-500 to-red-500',
    ecosystem: [
      { name: 'DEX (ShibaSwap)', status: 'Live' },
      { name: 'CEX Listing', status: 'Live' },
      { name: 'Community DAO', status: 'Live' },
      { name: 'Metaverse', status: 'In Progress' }
    ],
    socialLinks: {
      website: 'https://shibatoken.com',
      twitter: 'https://twitter.com/shibtoken',
      telegram: 'https://t.me/shibainutoken',
      discord: 'https://discord.gg/shibatoken'
    }
  },
  {
    id: 'dogecoin',
    name: 'Dogecoin',
    symbol: 'DOGE',
    logo: '/tribe-assets/placeholder.png',
    marketCap: '$27.4B',
    holders: '4,832,651',
    description: "The original memecoin that started it all. From a joke to a cultural phenomenon, DOGE represents the fun and community-driven spirit of crypto.",
    tokenPrice: '$0.1924',
    volume24h: '$1.2B',
    telegramMembers: '320,400',
    discordMembers: '185,700',
    color: 'from-yellow-300 to-yellow-500',
    ecosystem: [
      { name: 'DEX Listing', status: 'Live' },
      { name: 'CEX Listing', status: 'Live' },
      { name: 'Payment Integration', status: 'Live' },
      { name: 'Merchandise', status: 'Live' }
    ],
    socialLinks: {
      website: 'https://dogecoin.com',
      twitter: 'https://twitter.com/dogecoin',
      telegram: 'https://t.me/dogecoinglobal',
      discord: 'https://discord.gg/dogecoin'
    }
  }
];

export default function TribesPage() {
  const [currentTribe, setCurrentTribe] = useState<Tribe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openTribeModal = (tribe: Tribe) => {
    setCurrentTribe(tribe);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeTribeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Head>
        <title>Browse Tribes | Tribes Wallet</title>
        <meta name="description" content="Discover and join token communities in Tribes Wallet. Browse, connect, and become part of vibrant token tribes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/ai-tribes_logo_1.png" />
      </Head>
      <div className="min-h-screen bg-black">
        <Header />
        
        <main className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Browse <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Token Tribes</span>
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
                Discover, join, and participate in vibrant token communities. 
                Hold tokens to access private communities, vote on governance, and interact with AI agents.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {tribes.map((tribe) => (
                <motion.div
                  key={tribe.id}
                  className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -10 }}
                  onClick={() => openTribeModal(tribe)}
                >
                  <div className={`h-3 bg-gradient-to-r ${tribe.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative h-14 w-14 mr-4">
                        <Image 
                          src={tribe.logo || '/tribe-assets/placeholder.png'} 
                          alt={tribe.name} 
                          width={56} 
                          height={56} 
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{tribe.name}</h3>
                        <p className="text-sm text-gray-400">${tribe.symbol}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm">Market Cap</span>
                        <span className="text-white font-medium">{tribe.marketCap}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm">Token Price</span>
                        <span className="text-white font-medium">{tribe.tokenPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm">Holders</span>
                        <span className="text-white font-medium">{tribe.holders}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm line-clamp-3 mb-4">{tribe.description}</p>
                    
                    <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                      View Tribe Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-24 bg-gray-900 rounded-xl p-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-6">How to Join a Tribe</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h3 className="text-white font-medium mb-2">Buy Tokens</h3>
                    <p className="text-gray-400 text-sm">Purchase tokens of your chosen tribe through any DEX or directly through Tribes Wallet</p>
                  </div>
                  
                  <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h3 className="text-white font-medium mb-2">Access Community</h3>
                    <p className="text-gray-400 text-sm">Your token holdings automatically grant you access to the tribe's private community chat</p>
                  </div>
                  
                  <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h3 className="text-white font-medium mb-2">Participate & Govern</h3>
                    <p className="text-gray-400 text-sm">Participate in discussions, vote on proposals, and help shape the community's future</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
        
        {/* Tribe Detail Modal */}
        <AnimatePresence>
          {isModalOpen && currentTribe && (
            <motion.div 
              className="fixed inset-0 z-50 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75" onClick={closeTribeModal} />
                
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                
                <motion.div 
                  className="inline-block align-bottom bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                >
                  <div className="absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="text-gray-400 hover:text-white focus:outline-none"
                      onClick={closeTribeModal}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  
                  <div className={`h-2 bg-gradient-to-r ${currentTribe.color}`}></div>
                  
                  <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                        <div className="flex items-center mb-6">
                          <div className="relative h-16 w-16 mr-4">
                            <Image 
                              src={currentTribe.logo || '/tribe-assets/placeholder.png'} 
                              alt={currentTribe.name} 
                              width={64} 
                              height={64} 
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{currentTribe.name}</h3>
                            <p className="text-base text-gray-400">${currentTribe.symbol}</p>
                          </div>
                        </div>
                        
                        <div className="bg-black bg-opacity-40 rounded-xl p-6 mb-6">
                          <p className="text-gray-300 mb-4">{currentTribe.description}</p>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                              <p className="text-gray-400 text-sm">Market Cap</p>
                              <p className="text-white font-medium">{currentTribe.marketCap}</p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                              <p className="text-gray-400 text-sm">Token Price</p>
                              <p className="text-white font-medium">{currentTribe.tokenPrice}</p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                              <p className="text-gray-400 text-sm">24h Volume</p>
                              <p className="text-white font-medium">{currentTribe.volume24h}</p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                              <p className="text-gray-400 text-sm">Holders</p>
                              <p className="text-white font-medium">{currentTribe.holders}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-medium text-white mb-4">Community</h4>
                            <div className="bg-black bg-opacity-40 rounded-xl p-6">
                              <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-400">Telegram Members</span>
                                  <span className="text-white">{currentTribe.telegramMembers}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-400">Discord Members</span>
                                  <span className="text-white">{currentTribe.discordMembers}</span>
                                </div>
                                <div className="mt-6 flex space-x-3">
                                  {Object.entries(currentTribe.socialLinks).map(([platform, url]) => (
                                    <a 
                                      key={platform}
                                      href={url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-gray-400 hover:text-white"
                                    >
                                      <span className="capitalize">{platform}</span>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-medium text-white mb-4">Ecosystem</h4>
                            <div className="bg-black bg-opacity-40 rounded-xl p-6">
                              <div className="space-y-3">
                                {currentTribe.ecosystem.map((item, index) => (
                                  <div key={index} className="flex justify-between items-center">
                                    <span className="text-gray-400">{item.name}</span>
                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                      item.status === 'Live' ? 'bg-green-900 text-green-300' :
                                      item.status === 'In Progress' ? 'bg-yellow-900 text-yellow-300' :
                                      'bg-gray-700 text-gray-300'
                                    }`}>{item.status}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Join Tribe
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-transparent text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={closeTribeModal}
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
} 