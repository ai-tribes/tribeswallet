import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-20">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Own Tokens? Join Your Tribe Chat
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-indigo-100">
                Stop coordinating in Telegram chats filled with non-holders and bots. 
                Join token-gated chats where only verified holders can participate. 
                Connect, coordinate, and build value together.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white font-semibold">For Token Holders</p>
                  <ul className="mt-2 space-y-2 text-sm text-indigo-100">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Connect with other holders instantly
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Get real-time market intel from the community
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Coordinate with your tribe for collective action
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white font-semibold">For Majority Holders (51%+)</p>
                  <ul className="mt-2 space-y-2 text-sm text-indigo-100">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Take control of your token's governance
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Deploy AI agents to manage your community
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Direct messaging to all token holders
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Join Your Token Tribe</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="wallet" className="sr-only">Wallet Address</label>
                    <input
                      id="wallet"
                      name="wallet"
                      type="text"
                      placeholder="Enter your wallet address"
                      className="block w-full rounded-md border-0 bg-black/70 py-3 px-4 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <Link 
                      href="/download"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200"
                    >
                      Connect Wallet & Join
                    </Link>
                  </div>
                </form>
                <p className="mt-4 text-center text-sm text-indigo-100">
                  Already have an account? <Link href="/login" className="font-medium text-white hover:text-indigo-200">Sign in</Link>
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-sm text-center text-indigo-300">
                    Supports Ethereum, Solana, and Polygon networks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 