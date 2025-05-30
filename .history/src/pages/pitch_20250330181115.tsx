import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PitchDeck() {
  return (
    <>
      <Head>
        <title>Tribes Wallet | Pitch Deck</title>
        <meta name="description" content="Tribes Wallet pitch deck - The secure messaging app with integrated cryptocurrency wallet." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/tribes_logo.png" />
      </Head>

      <div className="min-h-screen">
        <Header />
        
        <main className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Tribes Wallet Pitch Deck
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Part of the AI Tribes Ecosystem
              </p>
            </div>
            
            {/* Pitch Deck Content */}
            <div className="space-y-24">
              {/* Ecosystem Overview */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mr-4">1</span>
                  Ecosystem Overview
                </h2>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <p className="text-xl mb-6">The AI Tribes ecosystem consists of three integrated products:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">AI Tribes (aitribes.com)</h3>
                        <p className="text-gray-600">Parent platform focusing on AI agent governance and development</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Tribes Wallet (tribeswallet.com)</h3>
                        <p className="text-gray-600">Multi-chain wallet and messaging platform where tokens create communities</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Tribify (tribify.ai)</h3>
                        <p className="text-gray-600">AI onboarding tool that tokenizes social media presence and creates governable AI agents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* The Problem */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mr-4">2</span>
                  The Problem
                </h2>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 mt-1 flex items-center justify-center rounded-full bg-primary-100 text-primary-600">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">Disconnected Token Communities</h3>
                          <p className="mt-2 text-gray-600">Crypto holders of the same token have no native way to communicate with each other</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 mt-1 flex items-center justify-center rounded-full bg-primary-100 text-primary-600">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">Separate Communication & Transaction Tools</h3>
                          <p className="mt-2 text-gray-600">Users must switch between messaging apps and wallet apps to discuss and then trade assets</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 mt-1 flex items-center justify-center rounded-full bg-primary-100 text-primary-600">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">Lack of Token-Centric Social Spaces</h3>
                          <p className="mt-2 text-gray-600">No platform exists where owning a token automatically connects you to its community</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              
              {/* Our Solution */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mr-4">3</span>
                  Our Solution
                </h2>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <p className="text-xl mb-6">Tribes Wallet transforms every token into a community with its own chat, governance, and optional AI agent.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Token-Gated Communities</h3>
                        <p className="text-gray-600">Holding a token automatically gives you access to its chat group</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Majority Governance</h3>
                        <p className="text-gray-600">51% token holders control community settings and AI agent behavior</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Cash Handles & Personal Tokens</h3>
                        <p className="text-gray-600">Every user gets a $Username handle and personal token</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Multi-Address Privacy</h3>
                        <p className="text-gray-600">Maintain multiple addresses with different token amounts for privacy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Market Opportunity */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mr-4">4</span>
                  Market Opportunity
                </h2>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Messaging Apps</h3>
                          <p className="text-gray-600">3B+ global users across platforms like WhatsApp, Telegram, Signal</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Crypto Wallets</h3>
                          <p className="text-gray-600">300M+ crypto users globally, growing 30% annually</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Intersection Market</h3>
                          <p className="text-gray-600">100M+ users who actively use both messaging apps and crypto</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Total Addressable Market</h3>
                          <p className="text-gray-600">$15B annually in transaction fees and premium features</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Business Model */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mr-4">5</span>
                  Business Model
                </h2>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">$TRIBES Token Ecosystem</h3>
                          <p className="text-gray-600">Native utility token grants access to main platform community</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Transaction Fees</h3>
                          <p className="text-gray-600">Small fee on transactions within chat interfaces</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Content Monetization</h3>
                          <p className="text-gray-600">Revenue from NFT creation of verified on-chain content</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">AI Agent Services</h3>
                          <p className="text-gray-600">Premium features for tribal and personal AI agents</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Next Steps */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mr-4">6</span>
                  Next Steps
                </h2>
                <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl shadow-md overflow-hidden text-white">
                  <div className="p-8">
                    <p className="text-xl mb-6">Ready to join us on this journey?</p>
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
                </div>
              </section>
            </div>
            
            <div className="mt-16 text-center">
              <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-800">
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
} 