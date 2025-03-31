import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MemecoinsShowcase() {
  // List of popular memecoins based on the screenshot
  const memecoins = [
    { name: 'Pepe', symbol: 'PEPE', marketCap: '$780M', holders: '130,635+', logo: '/memecoin-logos/pepe.png' },
    { name: 'Popcat', symbol: 'POPCAT', marketCap: '$185.7M', holders: '12,974+', logo: '/memecoin-logos/popcat.png' },
    { name: 'GIGACHAD', symbol: 'GIGA', marketCap: '$166.4M', holders: '12,228+', logo: '/memecoin-logos/gigachad.png' },
    { name: 'CatWifHat', symbol: 'CWIF', marketCap: '$2.7M', holders: '11,599+', logo: '/memecoin-logos/catwifhat.png' },
    { name: 'Cat in a dogs world', symbol: 'MEW', marketCap: '$228.2M', holders: '5,246+', logo: '/memecoin-logos/mew.png' },
    { name: 'Mumu the Bull', symbol: 'MUMU', marketCap: '$6.6M', holders: '3,975+', logo: '/memecoin-logos/mumu.png' },
    { name: 'RETARDIO', symbol: 'RETARDIO', marketCap: '$13.2M', holders: '2,525+', logo: '/memecoin-logos/retardio.png' },
    { name: 'MOTHER IGGY', symbol: 'MOTHER', marketCap: '$3.9M', holders: '718+', logo: '/memecoin-logos/mother.png' },
  ];

  return (
    <section className="py-16 bg-gray-900" id="memecoin-communities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-white mb-6"
          >
            Connect with Your Token Tribe
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            These thriving memecoin communities already exist, but their token holders can't communicate directly.
            Tribes Wallet provides token-gated group chats where only real holders can participate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {memecoins.map((coin, index) => (
            <motion.div
              key={coin.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-gray-800 rounded-full p-2 mr-3">
                      {/* Placeholder for logo - you'll need to add actual logos */}
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{coin.name}</h3>
                      <p className="text-gray-400">${coin.symbol}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Market Cap</p>
                    <p className="text-lg font-semibold text-white">{coin.marketCap}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Holders</p>
                    <p className="text-lg font-semibold text-white">{coin.holders}</p>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm text-gray-400">Currently siloed on Telegram</span>
                  <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded">No token gate</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
                <p className="text-center text-white font-medium">
                  Unite {coin.holders} holders with Tribes Wallet
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black rounded-lg p-8 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">The Problem with Telegram Communities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">No token verification</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">Filled with non-holders</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">Fake pumpers and fudders</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">No way to reach all holders</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">Vulnerable to bots and scammers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">No coordination between holders</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <a 
                href="/download" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100"
              >
                Connect With Your Tribe
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 