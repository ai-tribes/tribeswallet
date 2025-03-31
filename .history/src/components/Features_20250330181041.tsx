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
    name: 'Token-Gated Communities',
    description: 'Every token creates its own chat group. Holding a token automatically grants you access to its community.',
    icon: UserGroupIcon,
  },
  {
    name: 'Multi-Chain Wallet',
    description: 'Manage tokens across multiple blockchains with comprehensive support for all major cryptocurrencies.',
    icon: CurrencyDollarIcon,
  },
  {
    name: '51% Governance Control',
    description: 'Token holders with 51% majority gain administrative rights over communities and their AI agents.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Cash Handles & Personal Tokens',
    description: 'Every user gets a $Username cash handle and personal token, making everyone tokenized by default.',
    icon: HashtagIcon,
  },
  {
    name: 'Tribal AI Agents',
    description: 'Create AI agents that represent your community, with behavior governed by token holders.',
    icon: CpuChipIcon,
  },
  {
    name: 'Multi-Address Privacy',
    description: 'Maintain multiple addresses with varying token amounts for enhanced privacy and security.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Content Monetization',
    description: 'All posts are automatically hash-verified on-chain and can be instantly converted to NFTs.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Tinder-Like Discovery',
    description: 'Find new tribes through a swiping interface that enables micro-investments in communities you like.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'End-to-End Encryption',
    description: 'All messages are secured with state-of-the-art encryption for maximum privacy.',
    icon: LockClosedIcon,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Where tokens become communities
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Tribes Wallet reimagines cryptocurrency as a social experience, where tokens are not just assets but gateways to vibrant communities.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
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