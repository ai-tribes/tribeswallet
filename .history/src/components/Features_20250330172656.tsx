import { 
  LockClosedIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'End-to-end encrypted messaging',
    description: 'All messages are encrypted using state-of-the-art protocols, ensuring that only you and your recipients can read them.',
    icon: LockClosedIcon,
  },
  {
    name: 'Group chats and tribes',
    description: 'Create private groups or public tribes around shared interests, with full control over membership and moderation.',
    icon: UserGroupIcon,
  },
  {
    name: 'Integrated cryptocurrency wallet',
    description: 'Store, send, and receive Solana and SPL tokens directly within your messaging experience.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Seamless transactions',
    description: 'Send crypto to anyone in your contacts with a simple message - no complicated addresses to remember.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'NFT support',
    description: 'Display, trade, and discuss your NFT collections with friends and communities.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Multi-device security',
    description: 'Access your wallet and messages securely across multiple devices with our advanced key management.',
    icon: ShieldCheckIcon,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The best of both worlds
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Tribes Wallet combines secure messaging with powerful cryptocurrency features in one seamless experience.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
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