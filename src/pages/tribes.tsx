import { useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, PanInfo, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Token tribes data - this would come from an API in a real application
const tribes = [
  {
    id: 'pepe',
    name: 'Pepe',
    symbol: 'PEPE',
    logo: '/memecoin-logos/pepe.png', // Placeholder
    marketCap: '$780M',
    holders: '130,635+',
    description: 'The original meme frog token with one of the largest communities in crypto.',
    tokenPrice: '$0.00007809',
    volume24h: '$40M',
    telegramMembers: '143,000',
    discordMembers: '98,500',
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'popcat',
    name: 'Popcat',
    symbol: 'POPCAT',
    logo: '/memecoin-logos/popcat.png', // Placeholder
    marketCap: '$185.7M',
    holders: '12,974+',
    description: 'Based on the viral internet meme, Popcat has grown into a strong community of believers.',
    tokenPrice: '$0.1895',
    volume24h: '$322K',
    telegramMembers: '24,600',
    discordMembers: '18,900',
    color: 'from-pink-500 to-purple-700'
  },
  {
    id: 'gigachad',
    name: 'GIGACHAD',
    symbol: 'GIGA',
    logo: '/memecoin-logos/gigachad.png', // Placeholder
    marketCap: '$166.4M',
    holders: '12,228+',
    description: 'The token for true believers. Strong fundamentals, stronger community.',
    tokenPrice: '$0.01733',
    volume24h: '$2.5M',
    telegramMembers: '34,200',
    discordMembers: '28,700',
    color: 'from-blue-500 to-indigo-700'
  },
  {
    id: 'catwifhat',
    name: 'CatWifHat',
    symbol: 'CWIF',
    logo: '/memecoin-logos/catwifhat.png', // Placeholder
    marketCap: '$2.7M',
    holders: '11,599+',
    description: 'The internet\'s favorite cat wearing a hat, now in token form.',
    tokenPrice: '$0.078925',
    volume24h: '$3.2K',
    telegramMembers: '19,800',
    discordMembers: '14,200',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 'mew',
    name: 'Cat in a dogs world',
    symbol: 'MEW',
    logo: '/memecoin-logos/mew.png', // Placeholder
    marketCap: '$228.2M',
    holders: '5,246+',
    description: 'Standing out in a crowded space. A feline token in a canine market.',
    tokenPrice: '$0.002567',
    volume24h: '$3.2M',
    telegramMembers: '8,900',
    discordMembers: '7,600',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'mumu',
    name: 'Mumu the Bull',
    symbol: 'MUMU',
    logo: '/memecoin-logos/mumu.png', // Placeholder
    marketCap: '$6.6M',
    holders: '3,975+',
    description: 'Bullish by nature. A token that knows only one direction - up!',
    tokenPrice: '$0.002887',
    volume24h: '$403K',
    telegramMembers: '12,400',
    discordMembers: '9,100',
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'retardio',
    name: 'RETARDIO',
    symbol: 'RETARDIO',
    logo: '/memecoin-logos/retardio.png', // Placeholder
    marketCap: '$13.2M',
    holders: '2,525+',
    description: 'For the degens who embrace the full crypto experience. High risk, high reward.',
    tokenPrice: '$0.01329',
    volume24h: '$297K',
    telegramMembers: '15,800',
    discordMembers: '11,300',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'mother',
    name: 'MOTHER IGGY',
    symbol: 'MOTHER',
    logo: '/memecoin-logos/mother.png', // Placeholder
    marketCap: '$3.9M',
    holders: '718+',
    description: 'A motherly figure in crypto. Taking care of holders with steady growth and community focus.',
    tokenPrice: '$0.004050',
    volume24h: '$65K',
    telegramMembers: '4,200',
    discordMembers: '3,100',
    color: 'from-emerald-500 to-teal-700'
  },
];

export default function TribesBrowser() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for no direction
  const controls = useAnimation();
  const constraintsRef = useRef(null);

  const currentTribe = tribes[currentIndex];

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 100; // minimum distance for a swipe
    
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        // Swiped right (like)
        handleLike();
      } else {
        // Swiped left (pass)
        handlePass();
      }
    } else {
      // Reset position if not swiped far enough
      controls.start({ x: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } });
    }
  };

  const handleLike = () => {
    setDirection(1);
    
    // Animate card out to the right
    controls.start({ 
      x: '100%', 
      opacity: 0,
      transition: { duration: 0.5 }
    }).then(() => {
      // Move to next card
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tribes.length);
      setDirection(0);
      controls.set({ x: 0, opacity: 1 });
    });
  };

  const handlePass = () => {
    setDirection(-1);
    
    // Animate card out to the left
    controls.start({ 
      x: '-100%', 
      opacity: 0,
      transition: { duration: 0.5 }
    }).then(() => {
      // Move to next card
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tribes.length);
      setDirection(0);
      controls.set({ x: 0, opacity: 1 });
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Browse Tribes | Tribes Wallet</title>
        <meta name="description" content="Discover and join token-gated communities in the Tribes Wallet ecosystem. Connect with other token holders and participate in community governance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/ai-tribes_logo_1.png" />
      </Head>

      <Header />

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Discover New Tribes
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Swipe through token communities to find your tribe. Join by purchasing tokens or connecting your existing wallet.
          </p>
        </motion.div>

        <div className="relative" ref={constraintsRef}>
          <AnimatePresence>
            <motion.div 
              key={currentTribe.id}
              className="max-w-lg mx-auto"
              animate={controls}
              drag="x"
              dragConstraints={constraintsRef}
              onDragEnd={handleDragEnd}
              dragElastic={0.7}
              whileTap={{ cursor: "grabbing" }}
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                {/* Tribe Header */}
                <div className={`bg-gradient-to-r ${currentTribe.color} p-8 relative`}>
                  <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                    ${currentTribe.symbol}
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl mr-4">
                      <div className="h-16 w-16 rounded-lg bg-gradient-to-r from-white/10 to-white/30 flex items-center justify-center">
                        {/* Replace with actual logo */}
                        <span className="text-white text-2xl font-bold">{currentTribe.symbol.charAt(0)}</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{currentTribe.name}</h2>
                      <p className="text-white/80 flex items-center">
                        <span className="inline-block h-2 w-2 rounded-full bg-green-400 mr-2"></span>
                        {currentTribe.holders} holders
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 text-lg mt-4">{currentTribe.description}</p>
                </div>

                {/* Token Stats */}
                <div className="p-6 border-b border-gray-800">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-400 text-sm">Market Cap</p>
                      <p className="text-white text-xl font-medium">{currentTribe.marketCap}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">24h Volume</p>
                      <p className="text-white text-xl font-medium">{currentTribe.volume24h}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Token Price</p>
                      <p className="text-white text-xl font-medium">{currentTribe.tokenPrice}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Total Holders</p>
                      <p className="text-white text-xl font-medium">{currentTribe.holders}</p>
                    </div>
                  </div>
                </div>

                {/* Community Stats */}
                <div className="p-6 border-b border-gray-800">
                  <h3 className="text-white text-lg font-medium mb-4">Current Communities</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                        </svg>
                        <span className="text-gray-300">Telegram</span>
                      </div>
                      <div>
                        <span className="text-white font-medium">{currentTribe.telegramMembers} members</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">Discord</span>
                      </div>
                      <div>
                        <span className="text-white font-medium">{currentTribe.discordMembers} members</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* The Problem */}
                <div className="p-6 bg-black">
                  <h3 className="text-red-500 text-lg font-medium mb-4">The Problem</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-300">No token verification in Telegram/Discord</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-300">No way to reach all holders directly</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-300">Filled with scammers and non-holders</span>
                    </li>
                  </ul>

                  <h3 className="text-green-500 text-lg font-medium mb-4">Tribes Wallet Solution</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Token-verified access to community chat</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Direct messaging to all token holders</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Token-based governance of community</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-6 mt-8">
                <button 
                  onClick={handlePass}
                  className="bg-gray-800 hover:bg-gray-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <button 
                  onClick={handleLike}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">How to Join a Tribe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/50 rounded-lg p-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-900 text-white font-bold mb-3">1</div>
                <h3 className="text-white font-medium mb-2">Swipe Right to Like</h3>
                <p className="text-gray-400 text-sm">Find a tribe that aligns with your interests</p>
              </div>
              <div className="bg-black/50 rounded-lg p-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-900 text-white font-bold mb-3">2</div>
                <h3 className="text-white font-medium mb-2">Get Some Tokens</h3>
                <p className="text-gray-400 text-sm">Buy tokens or connect your existing holdings</p>
              </div>
              <div className="bg-black/50 rounded-lg p-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-900 text-white font-bold mb-3">3</div>
                <h3 className="text-white font-medium mb-2">Access The Tribe</h3>
                <p className="text-gray-400 text-sm">Automatically join token-gated community chats</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 