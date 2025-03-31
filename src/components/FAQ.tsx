import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "How is Tribes Wallet different from other messaging apps?",
    answer: "Unlike traditional messaging apps, Tribes Wallet automatically creates group chats based on cryptocurrency token ownership. If you hold tokens for a particular cryptocurrency, you can access its group chat and communicate with other holders, similar to how shareholders might communicate in a company."
  },
  {
    question: "What does the 51% majority governance mean?",
    answer: "Similar to corporate governance, holding 51% or more of a particular token gives you majority control over that token's tribe chat. You can set message moderation rules, determine who can post, and control the tribe's AI representative. It directly links token ownership to community governance."
  },
  {
    question: "How do messages reach token holders?",
    answer: "When you send a message to a token, it's encrypted and made available to anyone who can prove they hold that token by signing with their private key. This means messages flow to the tokens themselves, not specific individuals, and whoever holds the tokens can read them."
  },
  {
    question: "What is the AI at the center of each tribe?",
    answer: "Each tribe has an AI representative that serves as the public face of the community. This AI can be customized by the community through voting, with those holding more tokens having more influence. The AI can answer questions about the tribe, help moderate discussions, and execute tasks based on community decisions."
  },
  {
    question: "Can I use Tribes Wallet like a regular cryptocurrency wallet?",
    answer: "Yes, Tribes Wallet functions as a full cryptocurrency wallet, allowing you to store, send and receive various tokens across multiple blockchains. The messaging functionality is integrated directly with these wallet capabilities, creating a seamless experience."
  },
  {
    question: "Can I maintain privacy while using Tribes Wallet?",
    answer: "Yes, you can spread your token holdings across multiple wallets while still participating in tribe communications. This allows you to maintain privacy about your total position and identity while still receiving all messages directed to tokens you hold."
  },
  {
    question: "How do I discover new tribes to join?",
    answer: "Tribes Wallet includes a Tinder-like discovery feature where you can browse and join new token communities. You can see basic information about each tribe and directly purchase tokens to join communities that align with your interests."
  },
  {
    question: "Can I stake my tokens for voting?",
    answer: "Yes, you can stake your tokens to participate in governance votes that determine the direction and activities of the tribe and its AI representative. The more tokens you stake, the more influence you have in these decisions, similar to shareholder voting."
  },
  {
    question: "What happens if someone acquires 51% of a tribe's tokens?",
    answer: "If someone acquires 51% of a token, they gain majority control of the tribe, similar to a corporate takeover. They can set new governance rules, control moderation, and direct the tribe's AI representative. This creates a dynamic ecosystem where community control directly reflects token ownership."
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
            Learn more about how Tribes Wallet connects token ownership to messaging and community governance
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