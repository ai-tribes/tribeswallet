import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-gray-900 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Own the Tribe.</span>
                <span className="block">Control the Community.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-300">
                Every token is a tribe. Join existing communities or create your own token and build a tribe around it. Govern through 51% majority control and deploy AI agents to serve your community.
              </p>
              <motion.div 
                className="mt-8 flex"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex rounded-md shadow">
                  <Link href="/download" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200">
                    Create Your Tribe
                  </Link>
                </div>
                <div className="ml-3 inline-flex">
                  <Link href="/pitch" className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gray-800">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="relative -mt-6 md:mt-0">
            <motion.div 
              className="relative h-full w-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 160 678"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M160 0v678H0V0h160z"
                  fill="#111"
                  fillRule="evenodd"
                />
              </svg>
              
              <div className="relative text-center p-8">
                <div className="text-5xl font-bold text-white mb-6">51%</div>
                <div className="text-xl text-gray-300 mb-10">Majority Governance</div>
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-300">Community</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-300">Governance</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-300">AI Agents</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-300">Tokenomics</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  All governance decisions, messaging, and AI agent behaviors are controlled by the majority token holders
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 