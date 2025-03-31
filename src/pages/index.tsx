import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
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
        <Hero />
        <Features />
        <MemecoinsShowcase />
        <FAQ />
        <CTASection />
        <Footer />
      </div>
    </>
  )
} 