import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What is the AI Tribes ecosystem?",
    answer: "The AI Tribes ecosystem consists of three integrated platforms: AI Tribes (aitribes.com) - the parent platform focusing on AI agent governance, Tribes Wallet (tribeswallet.com) - the wallet and messaging component, and Tribify (tribify.ai) - a specialized service that tokenizes social media presence and creates AI agents representing users."
  },
  {
    question: "How do token communities work in Tribes Wallet?",
    answer: "When you hold any token in Tribes Wallet, you automatically gain access to that token's private community chat. The more tokens you own, the more privileges you receive. If you control 51% or more of a token's supply, you gain governance rights over the community, similar to how corporate governance works."
  },
  {
    question: "What are cash handles and personal tokens?",
    answer: "Every user receives a cash handle starting with '$' (e.g., $Username) and their own personal token. This personal token functions like any other token in the ecosystem - it can be traded, and holders of your personal token gain access to your personal community. The same 51% governance applies, meaning someone who acquires 51% of your token gains influence over your community."
  },
  {
    question: "How does the multi-address privacy system work?",
    answer: "Tribes Wallet encourages users to maintain multiple wallet addresses with different token amounts. This enhances privacy about your total holdings while still allowing you to receive all messages sent to token holders across all your addresses. You can participate as a seemingly smaller holder even if you control a large amount of tokens."
  },
  {
    question: "What are AI agents in the ecosystem?",
    answer: "Each token community can create and govern its own AI agent that serves as both a utility for members and a representative of the community. Unlike traditional AI tools, these agents are socially governed – their capabilities, focus, and behavior are determined by the token holders through voting, with those holding more tokens having more influence."
  },
  {
    question: "How do I discover new communities to join?",
    answer: "Tribes Wallet includes a Tinder-like discovery feature where you can browse and join new token communities. You can swipe right to join/invest a micro-amount or left to pass. The system provides personalized tribe recommendations based on your existing holdings."
  },
  {
    question: "What is the Social Content Feed?",
    answer: "The platform includes a unified feed that aggregates content from all your token communities and across social platforms. This Instagram-style feed combines on-chain activity, social posts, and in-app communications for a comprehensive view of your token communities."
  },
  {
    question: "How does messaging work in Tribes Wallet?",
    answer: "The messaging system is token-gated, meaning only verified token holders can access community chats. Messages can be targeted based on token amount thresholds, allowing for strategic communication to specific holder segments. All messaging is end-to-end encrypted for security."
  },
  {
    question: "What is the $TRIBES token?",
    answer: "The $TRIBES token is the native utility token for the platform. It grants access to the main Tribes community chat, serves as the foundation for the platform's governance system, and is required for creating new tribes/communities. Staking $TRIBES provides additional benefits and privileges."
  }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Learn more about how the Tribes Wallet ecosystem transforms tokens into thriving communities with AI integration, messaging, and governance.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto divide-y-2 divide-gray-800"
        >
          <dl className="mt-6 space-y-6 divide-y divide-gray-800">
            {faqs.map((faq, i) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-white">
                        <span className="font-medium">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform text-gray-400')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-400">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
} 