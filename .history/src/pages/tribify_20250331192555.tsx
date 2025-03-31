import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/tribify/Hero'
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
          <Hero />
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