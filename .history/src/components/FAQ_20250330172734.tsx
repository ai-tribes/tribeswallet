import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "How is my data protected in Tribes Wallet?",
    answer: "Tribes Wallet uses end-to-end encryption for all messages and transactions. Your private keys never leave your device, and we utilize secure key management systems to protect your crypto assets."
  },
  {
    question: "What cryptocurrencies does Tribes Wallet support?",
    answer: "Tribes Wallet primarily supports Solana (SOL) and SPL tokens. We have plans to add support for additional blockchains in future updates."
  },
  {
    question: "Can I use Tribes Wallet without using the crypto features?",
    answer: "Absolutely! You can use Tribes Wallet purely as a secure messaging app if you prefer. The crypto features are there when you need them, but they're entirely optional."
  },
  {
    question: "How do I backup my wallet?",
    answer: "When you create a wallet in Tribes Wallet, you'll be prompted to save your seed phrase securely. We recommend writing it down and storing it in a safe place. Never share your seed phrase with anyone."
  },
  {
    question: "Is Tribes Wallet open source?",
    answer: "Yes, Tribes Wallet is fully open source. Our code is available for review on GitHub, ensuring transparency and allowing community contributions."
  },
  {
    question: "How do tribes (groups) work?",
    answer: "Tribes are groups that can be public or private. They allow for group messaging, shared wallets for treasury management, and community governance. Tribe creators can set permissions and moderation rules."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 text-center mb-8">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-start justify-between text-left text-gray-900"
                    aria-controls={`faq-answer-${index}`}
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDownIcon
                        className={`h-6 w-6 transform ${openIndex === index ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </dt>
                <dd
                  className={`mt-2 pr-12 transition-all duration-200 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  id={`faq-answer-${index}`}
                >
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 