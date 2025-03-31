import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import SuccessStories from '@/components/SuccessStories'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tribes Wallet | Token-Based Messaging Platform by AITRIBES.com</title>
        <meta name="description" content="Tribes Wallet - The secure messaging app with integrated cryptocurrency wallet. A product by AITRIBES.com combining messaging with token-based community governance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/ai-tribes_logo_1.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Features />
        <SuccessStories />
        <FAQ />
        <CTASection />
        <Footer />
      </div>
    </>
  )
} 