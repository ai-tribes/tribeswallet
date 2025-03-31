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
        <title>Tribes Wallet - Pitch Deck</title>
        <meta name="description" content="Tribes Wallet: The future of token-based communities with built-in messaging" />
        <link rel="icon" href="/favicon.ico" />
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
                src="/tribes-wallet-logo.jpg"
                alt="Tribes Wallet Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Tribes Wallet
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Messaging platform where group chats are defined by token ownership
          </p>
          <div className="text-gray-400 mt-8">
            <p className="uppercase tracking-wider">Pitch Deck 2025</p>
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
                <h3 className="text-2xl font-bold text-white mb-4">Token Holders Can't Communicate</h3>
                <p className="text-gray-300 mb-6">
                  Imagine becoming a shareholder in a company, but there are no shareholder meetings and no way to connect with other shareholders. This is the reality for token holders today.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>No built-in communication channels for token holders</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Token ownership doesn't automatically connect you with your tribe</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Missing the networked benefits of being part of a token community</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-black rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Coordination Without Communication</h3>
                <p className="text-gray-300 mb-6">
                  Token holders are expected to coordinate actions and make collective decisions, but have no direct way to communicate with each other.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>No direct messaging between token holders about shared interests</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Reliance on third-party platforms that don't verify token ownership</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Impossible to reach all token holders with important information</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-black rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Unrealized Community Potential</h3>
                <p className="text-gray-300 mb-6">
                  The true value of tokens comes from the community and collective coordination, yet there's no infrastructure to unlock this potential.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Token communities exist in theory, but not in practice</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Token holders make decisions in isolation without community input</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Missing the shareholder meeting equivalent for token communities</span>
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
                <h3 className="text-2xl font-bold text-white mb-4">Token-Based Group Chats</h3>
                <p className="text-gray-400 mb-6">
                  Automatic shareholder meetings for every token. Buy a token, instantly join its tribe chat and connect with fellow holders.
                </p>
                <ul className="text-left space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Buy token = instantly join the tribe's chat</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Direct communication with all fellow holders</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Verification through blockchain ownership</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-black rounded-lg p-8 flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-4 mb-6">
                  <svg className="h-12 w-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">True Shareholder Dynamics</h3>
                <p className="text-gray-400 mb-6">
                  Just like corporate shareholding, majority token holders (51%+) get governance control of their tribe – as it should be.
                </p>
                <ul className="text-left space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Majority holders govern their communities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Voting weight proportional to holdings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Real corporate governance for tokens</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-black rounded-lg p-8 flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-4 mb-6">
                  <svg className="h-12 w-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Unlock Community Power</h3>
                <p className="text-gray-400 mb-6">
                  Transform isolated token holdings into coordinated communities that can act together, increasing the value and utility of each token.
                </p>
                <ul className="text-left space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Coordinated collective action</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Information flows to all stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Community-driven value creation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">The Complete Token Community Experience</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Combining messaging, wallet functions, and governance in one app, Tribes Wallet
                makes token ownership meaningful through direct communication with other holders.
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
        
        {/* Business Model */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
          id="business"
        >
          <div className="bg-gray-900 rounded-lg p-8 lg:p-16">
            <div className="text-white text-sm uppercase tracking-wider mb-4">04</div>
            <h2 className="text-4xl font-bold text-white mb-8">Business Model</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-black rounded-lg p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-full p-3">
                    <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Transaction Fees</h3>
                <p className="text-gray-400 text-center mb-6">
                  1% fee on all token transactions and tribal governance actions
                </p>
                <div className="bg-gray-900 rounded p-4 text-center">
                  <p className="text-xl font-bold text-white mb-1">$16.2M</p>
                  <p className="text-sm text-gray-500">Projected Year 1 Revenue</p>
                </div>
              </div>
              
              <div className="bg-black rounded-lg p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-full p-3">
                    <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">AI Agent Deployment</h3>
                <p className="text-gray-400 text-center mb-6">
                  Monthly subscription for advanced AI tribe agents and capabilities
                </p>
                <div className="bg-gray-900 rounded p-4 text-center">
                  <p className="text-xl font-bold text-white mb-1">$8.7M</p>
                  <p className="text-sm text-gray-500">Projected Year 1 Revenue</p>
                </div>
              </div>
              
              <div className="bg-black rounded-lg p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-full p-3">
                    <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Premium Features</h3>
                <p className="text-gray-400 text-center mb-6">
                  Advanced governance tools, analytics, and token distribution mechanisms
                </p>
                <div className="bg-gray-900 rounded p-4 text-center">
                  <p className="text-xl font-bold text-white mb-1">$4.5M</p>
                  <p className="text-sm text-gray-500">Projected Year 1 Revenue</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-black rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Revenue Projections</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Year 1</span>
                      <span className="text-white font-bold">$29.4M</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div className="bg-white h-2.5 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Year 2</span>
                      <span className="text-white font-bold">$76.8M</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div className="bg-white h-2.5 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Year 3</span>
                      <span className="text-white font-bold">$157.3M</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div className="bg-white h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">User Growth Targets</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Year 1</span>
                      <span className="text-white font-bold">1.2M Users</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div className="bg-white h-2.5 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Year 2</span>
                      <span className="text-white font-bold">4.8M Users</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div className="bg-white h-2.5 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Year 3</span>
                      <span className="text-white font-bold">12.5M Users</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div className="bg-white h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Product Roadmap */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
          id="roadmap"
        >
          <div className="bg-gray-900 rounded-lg p-8 lg:p-16">
            <div className="text-white text-sm uppercase tracking-wider mb-4">05</div>
            <h2 className="text-4xl font-bold text-white mb-8">Product Roadmap</h2>
            
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white"></div>
              
              <div className="space-y-12">
                <div className="relative">
                  <div className="md:flex items-center md:space-x-8">
                    <div className="md:w-1/2 md:text-right mb-6 md:mb-0 md:pr-8">
                      <div className="bg-black rounded-lg p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Q3 2023</h3>
                        <h4 className="text-white mb-4">Phase 1: Foundation</h4>
                        <ul className="space-y-2 text-gray-400">
                          <li>• Launch Tribes Wallet beta with basic token management</li>
                          <li>• Implement cash handles ($username) system</li>
                          <li>• Establish basic tribal chat functionality</li>
                          <li>• Release MVP on Ethereum mainnet</li>
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-white"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-8"></div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:flex items-center md:space-x-8">
                    <div className="md:w-1/2 md:pr-8"></div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-white"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0">
                      <div className="bg-black rounded-lg p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Q4 2023</h3>
                        <h4 className="text-white mb-4">Phase 2: 51% Governance</h4>
                        <ul className="space-y-2 text-gray-400">
                          <li>• Implement full 51% governance mechanics</li>
                          <li>• Add multi-chain support (Solana, Polygon)</li>
                          <li>• Enhance token-gated messaging features</li>
                          <li>• Release mobile app for iOS and Android</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:flex items-center md:space-x-8">
                    <div className="md:w-1/2 md:text-right mb-6 md:mb-0 md:pr-8">
                      <div className="bg-black rounded-lg p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Q1 2024</h3>
                        <h4 className="text-white mb-4">Phase 3: Tribes Wallet Platform</h4>
                        <ul className="space-y-2 text-gray-400">
                          <li>• Launch basic AI tribal agents</li>
                          <li>• Implement on-chain content verification</li>
                          <li>• Release swipe-to-invest discovery feature</li>
                          <li>• Expand to additional blockchains</li>
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-white"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-8"></div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:flex items-center md:space-x-8">
                    <div className="md:w-1/2 md:pr-8"></div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-white"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0">
                      <div className="bg-black rounded-lg p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Q2-Q4 2024</h3>
                        <h4 className="text-white mb-4">Phase 4: Ecosystem Expansion</h4>
                        <ul className="space-y-2 text-gray-400">
                          <li>• Advanced AI tribal agent capabilities</li>
                          <li>• Developer API for third-party integrations</li>
                          <li>• Enterprise solutions for existing token communities</li>
                          <li>• Cross-chain tribal governance solutions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team & Investors */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
          id="team"
        >
          <div className="bg-gray-900 rounded-lg p-8 lg:p-16">
            <div className="text-white text-sm uppercase tracking-wider mb-4">06</div>
            <h2 className="text-4xl font-bold text-white mb-8">Team & Investors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Team placeholders - replace with actual team information */}
              <div className="bg-black rounded-lg p-6 text-center">
                <div className="h-32 w-32 bg-white rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-white">Jane Smith</h3>
                <p className="text-gray-400 mb-2">CEO & Founder</p>
                <p className="text-sm text-gray-500">Former VP at Coinbase, 10+ years in blockchain and community building</p>
              </div>
              
              <div className="bg-black rounded-lg p-6 text-center">
                <div className="h-32 w-32 bg-white rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-white">David Johnson</h3>
                <p className="text-gray-400 mb-2">CTO</p>
                <p className="text-sm text-gray-500">Ex-Google AI, built multiple successful DeFi platforms</p>
              </div>
              
              <div className="bg-black rounded-lg p-6 text-center">
                <div className="h-32 w-32 bg-white rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-white">Sarah Chen</h3>
                <p className="text-gray-400 mb-2">Head of Product</p>
                <p className="text-sm text-gray-500">Previously led product at MetaMask, 8+ years in crypto UX</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Backed By</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-black rounded-lg p-4 flex items-center justify-center h-20">
                <div className="text-white font-bold">VC Fund 1</div>
              </div>
              <div className="bg-black rounded-lg p-4 flex items-center justify-center h-20">
                <div className="text-white font-bold">VC Fund 2</div>
              </div>
              <div className="bg-black rounded-lg p-4 flex items-center justify-center h-20">
                <div className="text-white font-bold">VC Fund 3</div>
              </div>
              <div className="bg-black rounded-lg p-4 flex items-center justify-center h-20">
                <div className="text-white font-bold">VC Fund 4</div>
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
            <div className="text-white text-sm uppercase tracking-wider mb-4">06</div>
            <h2 className="text-4xl font-bold text-white mb-8">Next Steps</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black rounded-lg p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-full p-3">
                    <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Join Alpha Testing</h3>
                <p className="text-gray-400 mb-6">
                  Early access to the Tribes Wallet and tribal governance platform, with exclusive benefits.
                </p>
                <Link 
                  href="/download" 
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100"
                >
                  Apply for Access
                </Link>
              </div>
              
              <div className="bg-black rounded-lg p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-full p-3">
                    <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Become a Partner</h3>
                <p className="text-gray-400 mb-6">
                  Strategic partnerships for token projects looking to enhance community engagement with AI representation.
                </p>
                <a 
                  href="mailto:partners@aitribes.com" 
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100"
                >
                  Contact Us
                </a>
              </div>
              
              <div className="bg-black rounded-lg p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-full p-3">
                    <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Join the Community</h3>
                <p className="text-gray-400 mb-6">
                  Join our Discord and Twitter communities to stay updated on progress and earn early adopter benefits.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100"
                >
                  Join Discord
                </a>
              </div>
            </div>
            
            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Investment Opportunity</h3>
              <p className="text-xl text-gray-300 text-center mb-10 max-w-3xl mx-auto">
                We're raising a strategic round to accelerate development and go-to-market.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Use of Funds</h4>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Engineering team expansion (60%)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Marketing and community building (25%)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Operations and legal (10%)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Strategic partnerships (5%)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Offering Details</h4>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>$4M seed round at $20M valuation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>SAFE with 20% discount to Series A</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>$100K minimum investment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Strategic investors preferred</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-10">
                <a 
                  href="mailto:invest@aitribes.com" 
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100"
                >
                  Request Investor Deck
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
          id="cta"
        >
          <div className="bg-black rounded-lg p-8 lg:p-16 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-8">Join the Tribal Revolution</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Be among the first to experience true community governance with AI Tribes. 
              Create your tribe, establish your governance, and deploy your AI agents.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/download" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200">
                Download Tribes Wallet
              </Link>
              <Link href="#features" className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-md text-white hover:bg-gray-800">
                Learn More
              </Link>
            </div>
            <div className="mt-12">
              <p className="text-gray-400">
                Contact us: <span className="text-white">partnerships@aitribes.com</span>
              </p>
            </div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
} 