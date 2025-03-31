import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Pitch() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>AI Tribes - Pitch Deck</title>
        <meta name="description" content="AI Tribes: The future of tokenized communities with 51% majority governance" />
      </Head>

      <Header />

      <main className="py-16">
        {/* Cover Slide */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center"
        >
          <div className="flex justify-center mb-8">
            <div className="relative h-32 w-32">
              <Image
                src="/images/tribes_logo.png"
                alt="AI Tribes Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6">
            AI Tribes
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Redefining community governance through 51% majority token control
          </p>
          <div className="text-gray-400 mt-8">
            <p className="uppercase tracking-wider">Pitch Deck 2023</p>
          </div>
        </motion.section>

        {/* The Problem */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
          id="problem"
        >
          <div className="bg-gray-900 rounded-lg p-8 lg:p-16">
            <div className="text-white text-sm uppercase tracking-wider mb-4">01</div>
            <h2 className="text-4xl font-bold text-white mb-8">The Problem</h2>
            
            <div className="space-y-8">
              <div className="bg-black rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Governance Without Ownership</h3>
                <p className="text-gray-300 mb-6">
                  Traditional social platforms disconnect community influence from ownership, resulting in centralized control that doesn't represent stakeholder interests.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Community members have no ownership of their platforms</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Users generate value but receive no equity</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Arbitrary changes to platform rules without stakeholder input</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-black rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Token Communities Without Utility</h3>
                <p className="text-gray-300 mb-6">
                  Cryptocurrency tokens offer ownership but lack meaningful community functionality and governance mechanisms.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Token holders have no direct communication channels</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Governance voting is complex and has low participation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>No direct link between token ownership and community influence</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-black rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">AI Without Clear Ownership</h3>
                <p className="text-gray-300 mb-6">
                  As AI agents become more prevalent, the question of who controls them and their actions becomes increasingly important.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>AI agents controlled by centralized entities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>No direct community control over AI behavior and policies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Lack of transparency in how AI decisions are made</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Our Solution */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
          id="solution"
        >
          <div className="bg-gray-900 rounded-lg p-8 lg:p-16">
            <div className="text-white text-sm uppercase tracking-wider mb-4">02</div>
            <h2 className="text-4xl font-bold text-white mb-8">Our Solution</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-black rounded-lg p-8 flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-4 mb-6">
                  <svg className="h-12 w-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Tribes</h3>
                <p className="text-gray-400 mb-6">
                  A decentralized ecosystem where every token is a community with built-in governance, messaging, and AI representation.
                </p>
                <ul className="text-left space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automatic tribe creation with new tokens</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>51% token majority controls governance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Token-gated messaging for all holders</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-black rounded-lg p-8 flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-4 mb-6">
                  <svg className="h-12 w-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Tribes Wallet</h3>
                <p className="text-gray-400 mb-6">
                  A multi-chain wallet that combines messaging, token management, and community governance in one seamless interface.
                </p>
                <ul className="text-left space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>$Username cash handles for easy payments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multi-chain support for all major blockchains</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Swipe-to-invest discovery of new tribes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-black rounded-lg p-8 flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-4 mb-6">
                  <svg className="h-12 w-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Tribify</h3>
                <p className="text-gray-400 mb-6">
                  A platform for deploying AI agents owned and controlled by token communities through direct governance.
                </p>
                <ul className="text-left space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI agents controlled by tribe governance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>On-chain verification of AI decisions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Community-defined AI capabilities and limits</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">51% Governance Model</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Direct, transparent community control through simple majority token ownership - 
                the way blockchain governance was always meant to be.
              </p>
            </div>
          </div>
        </motion.section>
        
        {/* Market Opportunity */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
          id="market"
        >
          <div className="bg-gray-900 rounded-lg p-8 lg:p-16">
            <div className="text-white text-sm uppercase tracking-wider mb-4">03</div>
            <h2 className="text-4xl font-bold text-white mb-8">Market Opportunity</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-black rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Growing Crypto User Base</h3>
                <div className="flex items-center justify-center mb-8">
                  <div className="text-6xl font-bold text-white">420M+</div>
                </div>
                <p className="text-gray-400 text-center">
                  Cryptocurrency users worldwide, with adoption accelerating yearly
                </p>
              </div>
              
              <div className="bg-black rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Total Addressable Market</h3>
                <div className="flex items-center justify-center mb-8">
                  <div className="text-6xl font-bold text-white">$2.3T</div>
                </div>
                <p className="text-gray-400 text-center">
                  Combined market cap of tokens that could benefit from tribal governance
                </p>
              </div>
            </div>
            
            <div className="bg-black rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Convergence of Key Trends</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white h-1 w-full mb-4"></div>
                  <h4 className="text-xl font-bold text-white mb-3">Web3 Social</h4>
                  <p className="text-gray-400">
                    $8.6B market growing at 43.2% CAGR as users seek ownership of their social experiences
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white h-1 w-full mb-4"></div>
                  <h4 className="text-xl font-bold text-white mb-3">AI Agents</h4>
                  <p className="text-gray-400">
                    $7.2B market expected to grow to $51.8B by 2028 as AI agents become mainstream
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white h-1 w-full mb-4"></div>
                  <h4 className="text-xl font-bold text-white mb-3">Token Communities</h4>
                  <p className="text-gray-400">
                    $14.3B in token communities seeking better governance and utility solutions
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Competitor Landscape</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Feature</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">AI Tribes</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">DAOs</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Web3 Social</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Traditional Wallets</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">51% Governance</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">✓</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">✗</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">✗</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">✗</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Token-gated Messaging</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">✓</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">✗</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">✓</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">✗</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">AI Agent Governance</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">✓</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">✗</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">✗</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">✗</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Multi-Chain Support</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">✓</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">✗</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">✗</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">✓</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Cash Handles</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">✓</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">✗</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">✗</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">✗</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Next Steps */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
          id="next-steps"
        >
          <div className="bg-gray-900 rounded-lg p-8 lg:p-16">
            <div className="text-white text-sm uppercase tracking-wider mb-4">04</div>
            <h2 className="text-4xl font-bold text-white mb-8">Next Steps</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link href="/download" className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg hover:bg-opacity-30 transition-colors">
                <h3 className="text-lg font-medium text-white mb-2">Download the App</h3>
                <p className="text-white text-opacity-80">Try Tribes Wallet on your preferred device</p>
              </Link>
              <a href="mailto:investors@tribeswallet.com" className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg hover:bg-opacity-30 transition-colors">
                <h3 className="text-lg font-medium text-white mb-2">Connect with Us</h3>
                <p className="text-white text-opacity-80">Learn more about investment opportunities</p>
              </a>
            </div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
} 