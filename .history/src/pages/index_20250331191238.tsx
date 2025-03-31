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
        <title>Tribes Wallet | Tribify.AI Secure Messaging Platform</title>
        <meta name="description" content="Tribes Wallet - The secure messaging app with integrated cryptocurrency wallet. A product by Tribify.AI combining messaging with token-based community governance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tribify-favicon.ico" />
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