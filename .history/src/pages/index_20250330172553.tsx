import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tribes Wallet | Secure Messaging & Crypto Wallet</title>
        <meta name="description" content="Tribes Wallet - The secure messaging app with integrated cryptocurrency wallet. Combining the best of Signal and SolFlare in one platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Footer />
      </div>
    </>
  )
} 