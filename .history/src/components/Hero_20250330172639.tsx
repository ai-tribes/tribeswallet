import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block xl:inline">Private messaging with</span>{' '}
                <span className="block text-primary-600 xl:inline">crypto superpowers</span>
              </motion.h1>
              <motion.p 
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Tribes Wallet combines the security of Signal messaging with the power of a SolFlare crypto wallet. 
                Send messages, create groups, and manage your crypto assets all in one beautiful, secure app.
              </motion.p>
              <motion.div 
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="rounded-md shadow">
                  <Link href="/download" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#features" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10">
                    Learn more
                  </a>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-gradient-to-br from-primary-500 to-secondary-600 sm:h-72 md:h-96 lg:w-full lg:h-full relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-600 opacity-90"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="px-4 py-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl w-72 h-80 border border-white/20">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-sm">TW</span>
                  </div>
                  <span className="ml-2 text-white font-semibold">Tribes</span>
                </div>
                <div className="text-white text-xs">1.32 SOL</div>
              </div>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-white/10">
                  <div className="text-xs text-white/70">Private Message</div>
                  <div className="text-white mt-1">Hey, did you check out the new NFT collection?</div>
                </div>
                <div className="p-3 rounded-lg bg-white/10 ml-6">
                  <div className="text-xs text-white/70">You</div>
                  <div className="text-white mt-1">Yes! Just bought one. I'll send you the SOL for it now.</div>
                </div>
                <div className="p-3 rounded-lg bg-secondary-400/20">
                  <div className="text-xs text-white/70">Transaction</div>
                  <div className="text-white font-medium mt-1">0.5 SOL sent to @cryptofriend</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 