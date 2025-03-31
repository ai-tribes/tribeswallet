import type { ReactElement } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PhoneMockup from '@/components/PhoneMockup'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import MemecoinsShowcase from '@/components/MemecoinsShowcase'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tribes Wallet | Token-Based Messaging Platform for Crypto Communities</title>
        <meta name="description" content="Tribes Wallet - Token-gated messaging for cryptocurrency communities. Connect with other token holders and coordinate as a unified tribe." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/ai-tribes_logo_1.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          
          {/* Phone Mockup Demo */}
          <div className="bg-black py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Experience Token Communities
                </h2>
                <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                  Hold tokens to access communities, manage your personal $cashhandle, and connect with other token holders
                </p>
              </div>
              
              <div className="mx-auto w-full max-w-[375px]">
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                  <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-900">
                    {/* App UI */}
                    <div className="w-full h-full flex flex-col">
                      {/* App Status Bar */}
                      <div className="bg-gray-900 text-white p-2 flex justify-between items-center">
                        <span className="text-xs">9:41</span>
                        <div className="flex space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a2 2 0 001.732-1H15a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7.7V7h1.3a.7.7 0 01.7.7v1.3h-2V7.7z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* App Header */}
                      <div className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center border-b border-gray-800">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-white font-medium text-xs mr-2">
                            <span>$</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">$SatoshiNakamoto</p>
                            <div className="flex items-center">
                              <span className="text-xs text-gray-400">$SATOSHI</span>
                              <span className="ml-2 text-xs px-1.5 py-0.5 bg-green-900 text-green-300 rounded-full">+12.4%</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Token Communities */}
                      <div className="flex-1 bg-gray-900 text-white overflow-y-auto px-3 py-2">
                        <div className="mb-4 flex items-center">
                          <p className="text-sm text-gray-400">Token Communities</p>
                          <div className="ml-2 flex-1 h-px bg-gray-800"></div>
                        </div>
                        
                        {/* Community List */}
                        <div className="space-y-3">
                          {/* PEPE Community */}
                          <div className="flex items-center p-2 bg-gray-800 rounded-lg">
                            <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs mr-3">
                              <span>PEPE</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <p className="text-sm font-medium">Pepe Community</p>
                                <span className="text-xs text-gray-400">2m ago</span>
                              </div>
                              <p className="text-xs text-gray-400 truncate">Ribbit! New meme competition starting...</p>
                            </div>
                          </div>
                          
                          {/* DOGE Community */}
                          <div className="flex items-center p-2 bg-gray-800 rounded-lg">
                            <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xs mr-3">
                              <span>DOGE</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <p className="text-sm font-medium">Dogecoin Community</p>
                                <span className="text-xs text-gray-400">5m ago</span>
                              </div>
                              <p className="text-xs text-gray-400 truncate">Much wow! New updates from the dev team...</p>
                            </div>
                          </div>
                          
                          {/* SHIB Community */}
                          <div className="flex items-center p-2 bg-gray-800 rounded-lg">
                            <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs mr-3">
                              <span>SHIB</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <p className="text-sm font-medium">SHIB Army</p>
                                <span className="text-xs text-gray-400">12m ago</span>
                              </div>
                              <p className="text-xs text-gray-400 truncate">Voting is live for the new governance proposal...</p>
                            </div>
                          </div>
                          
                          {/* BONK Community */}
                          <div className="flex items-center p-2 bg-gray-800 rounded-lg">
                            <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xs mr-3">
                              <span>BONK</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <p className="text-sm font-medium">BONK Squad</p>
                                <span className="text-xs text-gray-400">25m ago</span>
                              </div>
                              <p className="text-xs text-gray-400 truncate">Solana ecosystem updates and new partnership...</p>
                            </div>
                          </div>
                          
                          {/* $TRIBES Community */}
                          <div className="flex items-center p-2 bg-gradient-to-r from-purple-800 to-indigo-800 rounded-lg">
                            <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xs mr-3">
                              <span>$TRIBE</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <p className="text-sm font-medium">$TRIBES Main Community</p>
                                <span className="text-xs text-gray-300">1m ago</span>
                              </div>
                              <p className="text-xs text-gray-300 truncate">Welcome new tribal members! Check out our new AI...</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom Navigation */}
                      <div className="bg-gray-900 border-t border-gray-800 flex justify-between items-center px-2 py-3">
                        <button className="flex flex-col items-center justify-center w-16 text-purple-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                          </svg>
                          <span className="text-xs mt-1">Feed</span>
                        </button>
                        <button className="flex flex-col items-center justify-center w-16 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                          </svg>
                          <span className="text-xs mt-1">Chats</span>
                        </button>
                        <button className="flex flex-col items-center justify-center w-16 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                          </svg>
                          <span className="text-xs mt-1">Tribes</span>
                        </button>
                        <button className="flex flex-col items-center justify-center w-16 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                          </svg>
                          <span className="text-xs mt-1">AI</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <HowItWorks />
          <Features />
          <MemecoinsShowcase />
          <FAQ />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return page
} 