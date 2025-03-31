import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-gray-900 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Token-Based.</span>
                <span className="block">Message Your Tribe.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-300">
                Access to messaging is defined by token ownership. Create token-gated communities or join existing tribes. Bring your crypto community together in a messaging platform designed for token holders.
              </p>
              <motion.div 
                className="mt-8 flex"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex rounded-md shadow">
                  <Link href="/download" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200">
                    Get Early Access
                  </Link>
                </div>
                <div className="ml-3 inline-flex">
                  <Link href="/pitch" className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gray-800">
                    View Pitch Deck
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="relative -mt-6 md:mt-0">
            <motion.div 
              className="relative h-full w-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 160 678"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M160 0v678H0V0h160z"
                  fill="#111"
                  fillRule="evenodd"
                />
              </svg>
              
              <div className="relative text-center p-8">
                <div className="text-5xl font-bold bg-gradient-to-r from-[#00E5FF] via-[#FF6B00] to-[#FF00A8] text-transparent bg-clip-text mb-6">Tribes Wallet</div>
                <div className="text-xl text-gray-300 mb-10">Token-Based Messaging</div>
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-300">Messaging</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-300">Tokens</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-300">Communities</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-300">AI Assistants</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  Only those who own the relevant tokens can access tribe messaging, communities, and token-specific AI assistants
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 