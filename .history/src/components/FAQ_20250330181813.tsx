import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What is the 51% governance model?",
    answer: "In Tribes Wallet, holding 51% or more of a specific token gives you majority control over that token's tribe. This includes moderation powers, the ability to set tribe rules, and control over any AI agents associated with that tribe. It's a direct implementation of on-chain governance at the community level."
  },
  {
    question: "How do I create my own tribe?",
    answer: "Creating a tribe is as simple as creating a token. Within Tribes Wallet, you can mint a new token with customizable parameters, and a tribe is automatically formed around it. You'll start as the majority holder with full governance rights, and can then distribute tokens to grow your community."
  },
  {
    question: "What are AI Tribe Agents?",
    answer: "AI Tribe Agents are AI assistants that represent and serve your token community. They can perform various functions like answering questions about your token, moderating conversations, and executing tasks based on the tribe's governance decisions. Their capabilities and behaviors are determined by the tribe's 51% majority."
  },
  {
    question: "Can tribes be taken over?",
    answer: "Yes, if someone acquires 51% or more of a token, they can take over the tribe associated with it. This is by design and creates an ecosystem where community control is directly tied to token ownership. Strategic token distribution is a key aspect of maintaining decentralized governance."
  },
  {
    question: "What is a cash handle?",
    answer: "Cash handles are username-based payment addresses (like $username) that make sending and receiving cryptocurrency as simple as tagging someone on social media. Every user in Tribes Wallet automatically gets their own cash handle and personal token, making everyone tokenized by default."
  },
  {
    question: "How does token-gated messaging work?",
    answer: "When you hold any amount of a specific token, you automatically gain access to its tribe chat. This creates token-gated communities where all holders can communicate with each other. The more tokens you hold, the more weight your voice carries in governance decisions."
  },
  {
    question: "Can I remain anonymous while participating in tribes?",
    answer: "Yes, Tribes Wallet supports privacy through multi-address distribution. You can spread your token holdings across multiple wallets while still receiving all tribal communications. This allows you to maintain privacy about your total position while participating fully in the community."
  },
  {
    question: "Which blockchains are supported?",
    answer: "Tribes Wallet is designed to be multi-chain from the ground up. We currently support Ethereum, Solana, and several other major blockchains, with more being added regularly. The tribal experience remains unified regardless of which blockchain the tokens exist on."
  },
  {
    question: "How do I monetize content within a tribe?",
    answer: "All content created within Tribes Wallet is automatically hash-verified on-chain and can be instantly converted to NFTs with a single tap. This allows creators to monetize their contributions, with additional options for tribe-based revenue sharing and token-incentivized content creation."
  }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function FAQ() {
  return (
    <div id="faq" className="bg-black">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center">Frequently asked questions</h2>
          <p className="mt-4 text-lg text-gray-400 text-center max-w-3xl mx-auto">
            Learn more about how Tribes Wallet is redefining community governance through blockchain technology
          </p>
        </motion.div>
        <div className="mt-12">
          <dl className="space-y-6 divide-y divide-gray-800">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-white">
                          <span className="font-medium text-white">{faq.question}</span>
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
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 