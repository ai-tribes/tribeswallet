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
    name: 'Token-Based Group Chats',
    description: 'Each cryptocurrency token creates a group chat. Hold tokens to access the chat, just like Telegram or Signal but for token communities.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: '51% Majority Governance',
    description: 'Hold 51% of tokens to control the group, set moderation rules, and manage the tribe. Just like shareholders controlling a company.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Direct Messages to Token Holders',
    description: 'Send messages to token holders without knowing their identity - the message goes to whoever holds the tokens.',
    icon: UserGroupIcon,
  },
  {
    name: 'AI Tribe Representatives',
    description: 'Each tribe has an AI at its center that serves as the public face and can be controlled by majority token holders through votes.',
    icon: CpuChipIcon,
  },
  {
    name: 'Private Blockchain Messaging',
    description: 'Keep messages private between token holders. Sign with your private key to authenticate and prove token ownership.',
    icon: LockClosedIcon,
  },
  {
    name: 'Multiple Tribe Membership',
    description: 'Hold multiple tokens to participate in different tribe chats, with a feed to see activities across all your tribes.',
    icon: HashtagIcon,
  },
  {
    name: 'Stake Tokens for Voting',
    description: 'Use your tokens to propose and vote on motions that determine the direction and activities of the tribe and its AI.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Private Multi-Wallet Support',
    description: 'Maintain privacy by spreading your token holdings across multiple addresses while participating in communities.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Discover New Tribes',
    description: 'Browse and join new token communities with a Tinder-like discovery function that helps you find tribes aligned with your interests.',
    icon: FingerPrintIcon,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-white font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Messaging for Token Communities
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Tribes Wallet transforms tokens from financial assets into vibrant communication networks where holding tokens gives you access to private group chats.
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