import Head from 'next/head';
import { ArrowDownTrayIcon, DevicePhoneMobileIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Download() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Download Tribes Wallet | Tribify.AI Ecosystem</title>
        <meta name="description" content="Download Tribes Wallet for iOS, Android, Windows, macOS, or Linux. Start accessing token-based messaging communities." />
        <link rel="icon" href="/tribify-favicon.ico" />
      </Head>

      <Header />
      
      <main className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Download Tribes Wallet
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join the 51% revolution. Get started with Tribes Wallet on your preferred device and take control of your communities.
            </p>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Mobile */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <DevicePhoneMobileIcon className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-base font-semibold leading-7 text-white">Mobile</h2>
              <p className="mt-2 text-sm leading-7 text-gray-400">
                Take Tribes Wallet with you and manage your tribe governance on the go.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.05 2.53C10.92 1.66 11.34 0.33 11.18 0C10.18 0.06 8.98 0.78 8.23 1.63C7.52 2.38 7.05 3.66 7.23 4C8.33 4.08 9.13 3.42 10.05 2.53ZM12.36 4.39C12.26 4.39 11.13 4.39 10.36 5.38C10.07 5.8 9.85 6.46 9.85 7.12C9.85 8.41 10.43 9.47 11.28 9.47C11.36 9.47 11.88 9.47 12.38 9.09C12.64 8.87 13.31 8.4 13.31 7.11C13.31 5.83 12.54 4.39 12.36 4.39ZM17.91 14.55C17.96 14.37 17.25 14.13 16.4 13.46C15.55 12.78 15.17 12.14 15 11.87C14.95 11.8 14.34 11.95 13.96 12.74C13.58 13.54 13.96 14.19 14.04 14.31C14.11 14.43 14.61 15.18 14.99 15.49C15.36 15.8 16.24 16.44 16.78 16.57C17.33 16.75 17.85 16.75 17.91 14.55Z" />
                  </svg>
                  Download for iOS
                </a>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 3.5V16.5C3 17.327 3.673 18 4.5 18H15.5C16.327 18 17 17.327 17 16.5V3.5C17 2.673 16.327 2 15.5 2H4.5C3.673 2 3 2.673 3 3.5ZM10 15.5C9.172 15.5 8.5 14.828 8.5 14C8.5 13.172 9.172 12.5 10 12.5C10.828 12.5 11.5 13.172 11.5 14C11.5 14.828 10.828 15.5 10 15.5Z" />
                  </svg>
                  Download for Android
                </a>
              </div>
            </div>

            {/* Desktop */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <ComputerDesktopIcon className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-base font-semibold leading-7 text-white">Desktop</h2>
              <p className="mt-2 text-sm leading-7 text-gray-400">
                Use Tribes Wallet on your computer for full control over your tribe governance.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM7.41 13L6 11.59L8.59 9L6 6.41L7.41 5L11.41 9L7.41 13Z" />
                  </svg>
                  Download for macOS
                </a>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 4H2C1.44772 4 1 4.44772 1 5V15C1 15.5523 1.44772 16 2 16H18C18.5523 16 19 15.5523 19 15V5C19 4.44772 18.5523 4 18 4ZM4 14V6H16V14H4Z" />
                  </svg>
                  Download for Windows
                </a>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7.13516 10C7.13516 8.40301 8.40301 7.13516 10 7.13516C11.597 7.13516 12.8648 8.40301 12.8648 10C12.8648 11.597 11.597 12.8648 10 12.8648C8.40301 12.8648 7.13516 11.597 7.13516 10ZM2 10C2 6.41015 4.91015 3.5 8.5 3.5H11.5C15.0899 3.5 18 6.41015 18 10C18 13.5899 15.0899 16.5 11.5 16.5H8.5C4.91015 16.5 2 13.5899 2 10Z" />
                  </svg>
                  Download for Linux
                </a>
              </div>
            </div>

            {/* Web Version */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <ArrowDownTrayIcon className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-base font-semibold leading-7 text-white">Web Version</h2>
              <p className="mt-2 text-sm leading-7 text-gray-400">
                Access Tribes Wallet directly from your browser with no installation required.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10 4C10.5523 4 11 4.44772 11 5V9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H11V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V11H5C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H9V5C9 4.44772 9.44772 4 10 4Z" />
                  </svg>
                  Launch Web App
                </a>
                <div className="pt-4 text-center">
                  <p className="text-xs text-gray-500">
                    Note: Some features may be limited in the web version due to browser security constraints.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white">
              51% Majority Governance
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
              With Tribes Wallet, every token is a tribe. Control 51% of a token and you control its governance:
            </p>
            <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white mb-6">
                  <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold leading-7 text-white">Community Governance</h3>
                <p className="mt-4 text-gray-400">
                  Control tribe rules, content moderation, and collective decision-making through simple majority ownership.
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white mb-6">
                  <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold leading-7 text-white">AI Agent Control</h3>
                <p className="mt-4 text-gray-400">
                  Define your tribe's AI agent capabilities, behavior, and permissions through collective voting or majority decisions.
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white mb-6">
                  <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold leading-7 text-white">Treasury Management</h3>
                <p className="mt-4 text-gray-400">
                  Manage tribal funds, approve expenditures, and allocate resources based on 51% majority consensus.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-24 bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-white mb-6">Join the 51% Revolution</h2>
                <p className="text-gray-300 mb-8">
                  Sign up for early access and be among the first to create your own tribe or take control of existing tokens.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-black font-semibold px-4 py-3 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Request Early Access
                  </button>
                </form>
              </div>
              <div className="hidden md:block relative">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl font-bold mb-2">51%</div>
                    <div className="text-xl">Majority Rules</div>
                  </div>
                </div>
                <div className="h-full bg-gradient-to-tr from-gray-900 to-black"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 