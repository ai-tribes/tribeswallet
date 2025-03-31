import { 
  LockClosedIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  FingerPrintIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ClipboardDocumentListIcon,
  HashtagIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: '51% Governance Mechanics',
    description: 'Control tribe rules, content moderation, and AI agent behavior by holding 51% or more of a token. Tribes can be taken over through token acquisition.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Token-Gated Tribe Access',
    description: 'Holding a token automatically grants you access to its tribe chat, allowing seamless communication with fellow token holders.',
    icon: UserGroupIcon,
  },
  {
    name: 'Cash Handles & Personal Tokens',
    description: 'Every user receives a $Username cash handle and personal token, making everyone tokenized by default in the ecosystem.',
    icon: HashtagIcon,
  },
  {
    name: 'Multi-Address Privacy',
    description: 'Distribute holdings across multiple addresses to maintain privacy about your total position while still receiving all tribal communications.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Tribal AI Agents',
    description: 'Create AI agents that represent your community and perform tasks, with capabilities determined by token holders through governance votes.',
    icon: CpuChipIcon,
  },
  {
    name: 'Multi-Chain Support',
    description: 'Manage tokens across Ethereum, Solana, and other blockchains while maintaining a unified tribal experience.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'On-Chain Content Verification',
    description: 'All user-generated content is automatically hash-verified on-chain and can be instantly converted to NFTs for monetization.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Swipe-to-Invest Discovery',
    description: 'Find new tribes through a Tinder-like swiping interface that lets you micro-invest in communities that interest you.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'E2E Encrypted Messaging',
    description: 'All tribal communications are secured with end-to-end encryption, ensuring privacy and security.',
    icon: LockClosedIcon,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-white font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Cryptocurrency as Community
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Tribes Wallet transforms tokens from mere assets into thriving communities with governance, messaging, and AI representation.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-black rounded-lg px-6 pb-8 h-full border border-gray-800">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-black" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 