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
        <link rel="icon" href="/favicon.svg" />
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
                Private messaging with crypto superpowers
              </p>
            </div>
            
            {/* Pitch Deck Content */}
            <div className="space-y-24">
              {/* The Problem */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mr-4">1</span>
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
                          <h3 className="text-lg font-medium text-gray-900">Fragmented Communication & Finance</h3>
                          <p className="mt-2 text-gray-600">Users toggle between messaging apps and crypto wallets, creating friction</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 mt-1 flex items-center justify-center rounded-full bg-primary-100 text-primary-600">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">Complicated Wallet Addresses</h3>
                          <p className="mt-2 text-gray-600">Sending crypto requires copying and pasting complex addresses, leading to errors</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 mt-1 flex items-center justify-center rounded-full bg-primary-100 text-primary-600">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">Limited Community Tools</h3>
                          <p className="mt-2 text-gray-600">Existing group messaging lacks crypto-native features for communities</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              
              {/* Our Solution */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mr-4">2</span>
                  Our Solution
                </h2>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <p className="text-xl mb-6">Tribes Wallet combines the security of Signal messaging with the functionality of a Solana wallet.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Seamless Messaging + Crypto</h3>
                        <p className="text-gray-600">Chat and transact in one beautiful interface</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Social Transactions</h3>
                        <p className="text-gray-600">Send crypto to friends as easily as sending a message</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Community Economy</h3>
                        <p className="text-gray-600">Create tribes (groups) with shared wallets, governance, and activity</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Enterprise-grade Security</h3>
                        <p className="text-gray-600">End-to-end encryption and secure multi-device key management</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Market Opportunity */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mr-4">3</span>
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
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mr-4">4</span>
                  Business Model
                </h2>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Transaction Fees</h3>
                          <p className="text-gray-600">0.5% on crypto transactions (competitive with major exchanges)</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Premium Features</h3>
                          <p className="text-gray-600">$4.99/month for enhanced storage, custom tribes, and advanced analytics</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Enterprise Plans</h3>
                          <p className="text-gray-600">Custom pricing for organizations requiring secure messaging with treasury management</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Protocol Growth</h3>
                          <p className="text-gray-600">Long-term value accrual through the TRIBE token ecosystem</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Next Steps */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mr-4">5</span>
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