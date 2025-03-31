import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Messaging() {
  return (
    <section id="messaging" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-tribify-blue to-tribify-pink">
            Token-Based Messaging
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connecting communities through token ownership. Only token holders can access tribe messaging.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gray-900 p-6 border border-gray-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-tribify-blue/20 to-tribify-pink/20 blur-2xl rounded-full -mr-10 -mt-10"></div>
            <div className="relative">
              <div className="bg-black rounded-lg p-4 mb-6 text-left">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-tribify-blue flex items-center justify-center mr-3">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Token Holder (8 tokens)</p>
                    <p className="text-white font-semibold">Alex</p>
                  </div>
                </div>
                <p className="text-gray-300">Hey everyone! I just joined this tribe. The tokenomics look great!</p>
              </div>

              <div className="bg-black rounded-lg p-4 mb-6 text-left">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-tribify-pink flex items-center justify-center mr-3">
                    <span className="text-white font-bold">J</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Token Holder (25 tokens)</p>
                    <p className="text-white font-semibold">Jamie</p>
                  </div>
                </div>
                <p className="text-gray-300">Welcome Alex! Glad to have you here. This community is growing fast!</p>
              </div>

              <div className="bg-black rounded-lg p-4 text-left">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-tribify-orange flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Tribe AI Assistant</p>
                    <p className="text-white font-semibold">TribeBot</p>
                  </div>
                </div>
                <p className="text-gray-300">Welcome to our community, Alex! I've analyzed your profile and noticed you're interested in NFTs. We have a special NFT collection launching next week. Would you like more information?</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-tribify-blue to-tribify-pink p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Token-Gated Access</h3>
                  <p className="text-gray-300">Only token holders can participate in tribe messaging. The more tokens you hold, the more privileges you gain within the community.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-tribify-orange to-tribify-pink p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Community Governance</h3>
                  <p className="text-gray-300">Majority token holders (51%+) have governance control over the tribe. Vote on decisions, moderate content, and direct the community's future.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-tribify-blue to-tribify-orange p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AI-Powered Assistance</h3>
                  <p className="text-gray-300">Each tribe comes with an AI assistant that can be customized and trained according to the community's needs and preferences.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 