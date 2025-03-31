import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '@/components/Header'
import BuildDigitalEmpire from '@/components/tribify/BuildDigitalEmpire'
import SuccessStories from '@/components/SuccessStories'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function TribifyHome() {
  return (
    <>
      <Head>
        <title>Tribify.AI | AI-powered Social Media Tokenization Platform</title>
        <meta name="description" content="Tribify.AI - Turn your social media presence into a tokenized community. Create token-gated communities with AI agents that represent your brand or persona." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tribify-favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-black">
        <Header />
        <main>
          <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-center mb-8">
                <Image src="/tribify-logo.svg" alt="Tribify.AI Logo" width={150} height={150} priority />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-tribify-blue via-tribify-orange to-tribify-pink mb-6">
                Token-Based Social Media
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
                Turn your social media presence into a tokenized community with AI agents that represent your brand
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#build-empire" className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-black shadow-sm hover:bg-gray-200 transition-colors">
                  Get Started
                </a>
                <a href="#success-stories" className="rounded-md border border-white px-6 py-3 text-lg font-semibold text-white hover:bg-gray-800 transition-colors">
                  View Success Stories
                </a>
              </div>
            </div>
          </section>
          
          <BuildDigitalEmpire />
          <SuccessStories />
          <FAQ />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
} 