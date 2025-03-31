import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            How Tribes Wallet Works
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            A new paradigm where tokens become thriving communities with integrated messaging, AI agents, and governance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Step 1: Token Access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
              <span className="text-xl font-bold">1</span>
            </div>
            <div className="ml-16">
              <h3 className="text-xl font-medium text-white">Token Access</h3>
              <div className="mt-6 bg-gray-900 rounded-lg p-6 h-64 flex flex-col">
                <p className="text-gray-400 mb-4">
                  Hold any token to automatically gain access to its private community chat. 
                  The more tokens you own, the more privileges you receive.
                </p>
                <div className="flex-1 relative mt-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-md opacity-20"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center items-center">
                    <div className="p-2 bg-gray-800 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9" />
                      </svg>
                    </div>
                    <span className="text-white text-center">Token Ownership = Community Access</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2: Community Governance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
              <span className="text-xl font-bold">2</span>
            </div>
            <div className="ml-16">
              <h3 className="text-xl font-medium text-white">51% Governance</h3>
              <div className="mt-6 bg-gray-900 rounded-lg p-6 h-64 flex flex-col">
                <p className="text-gray-400 mb-4">
                  If you control 51% or more of a token's supply, you gain governance rights over the community, 
                  including moderation and control of the community's AI agent.
                </p>
                <div className="flex-1 relative mt-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-md opacity-20"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center items-center">
                    <div className="p-2 bg-gray-800 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                      </svg>
                    </div>
                    <span className="text-white text-center">Majority Token Control = Community Governance</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3: AI Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
              <span className="text-xl font-bold">3</span>
            </div>
            <div className="ml-16">
              <h3 className="text-xl font-medium text-white">AI Representation</h3>
              <div className="mt-6 bg-gray-900 rounded-lg p-6 h-64 flex flex-col">
                <p className="text-gray-400 mb-4">
                  Each token community has its own AI agent that serves as both a utility for members and 
                  a representative of the community, governed by token holders.
                </p>
                <div className="flex-1 relative mt-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-md opacity-20"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center items-center">
                    <div className="p-2 bg-gray-800 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                      </svg>
                    </div>
                    <span className="text-white text-center">Community-Governed AI Representation</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900 rounded-lg p-8"
        >
          <h3 className="text-xl font-bold text-white mb-4">The Three Integrated Platforms</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="border border-purple-500 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-purple-400 mb-2">AI Tribes</h4>
              <p className="text-gray-400">
                The parent platform focusing on AI agent governance and ecosystem management. 
                Creates the technology for social governance of AI.
              </p>
            </div>
            <div className="border border-blue-500 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Tribes Wallet</h4>
              <p className="text-gray-400">
                The wallet and messaging platform that transforms tokens into communities with 
                integrated messaging, AI agents, and governance.
              </p>
            </div>
            <div className="border border-indigo-500 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-indigo-400 mb-2">Tribify</h4>
              <p className="text-gray-400">
                A specialized service that tokenizes social media presence and creates AI agents 
                representing users across platforms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 