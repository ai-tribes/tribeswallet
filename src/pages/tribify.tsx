import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/tribify/Hero'
import BuildDigitalEmpire from '@/components/tribify/BuildDigitalEmpire'
import Messaging from '@/components/tribify/Messaging'
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
        <header className="bg-black text-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="https://aitribes.com" className="-m-1.5 p-1.5">
                <span className="sr-only">Tribify.AI</span>
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-white">Tribify.AI</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="/" className="text-sm font-semibold leading-6 text-white hover:text-gray-300 mr-6">
                Back to Tribes Wallet
              </a>
            </div>
          </nav>
        </header>
        <main>
          <Hero />
          <BuildDigitalEmpire />
          <Messaging />
          <SuccessStories />
          <FAQ />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
} 