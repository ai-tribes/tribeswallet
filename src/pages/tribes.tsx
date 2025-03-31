import React, { useState } from 'react';
import Head from 'next/head';
import { motion, useAnimation, PanInfo } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define interfaces for the tribe data
interface SocialLinks {
  telegram?: string;
  twitter?: string;
  discord?: string;
  website?: string;
}

interface Tribe {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  description: string;
  problem: string;
  solution: string;
  marketCap?: string;
  holders?: number;
  tokenPrice?: string;
  volume24h?: string;
  telegramMembers?: number;
  discordMembers?: number;
  twitterFollowers?: number;
  color: string;
  socialLinks: SocialLinks;
}

// AI TRIBES data
const tribes: Tribe[] = [
  {
    id: 'metabuilders',
    name: 'MetaBuildersDAO',
    symbol: 'BUILD',
    logo: '/tribe-assets/metabuilders.png',
    description: "A community of builders and creators working on next-generation decentralized applications. MetaBuildersDAO focuses on collaborative development and resource sharing to accelerate innovation in the web3 space.",
    problem: "Independent developers struggle to find resources, funding and collaboration opportunities in the fragmented web3 ecosystem.",
    solution: "Creating a decentralized autonomous organization that pools resources, shares knowledge, and collectively builds and invests in promising projects.",
    marketCap: "$1.2M",
    holders: 1250,
    tokenPrice: "$0.025",
    volume24h: "$78K",
    telegramMembers: 3200,
    discordMembers: 4800,
    twitterFollowers: 12500,
    color: "bg-blue-600",
    socialLinks: {
      telegram: "https://t.me/metabuildersdao",
      twitter: "https://twitter.com/metabuildersdao",
      discord: "https://discord.gg/metabuildersdao",
      website: "https://metabuildersdao.ai"
    }
  },
  {
    id: 'learning',
    name: 'Learning Tribe',
    symbol: 'LEARN',
    logo: '/tribe-assets/learning.png',
    description: "A decentralized education platform where knowledge is valued and rewarded. The Learning Tribe creates a space where teachers, students, and content creators can connect and exchange value directly.",
    problem: "Traditional education platforms centralize profits while creators receive minimal compensation for their valuable content.",
    solution: "A token-based education system where content creators earn directly from students, with community governance ensuring quality and relevance.",
    marketCap: "$850K",
    holders: 975,
    tokenPrice: "$0.018",
    volume24h: "$42K",
    telegramMembers: 2800,
    discordMembers: 3600,
    twitterFollowers: 9800,
    color: "bg-green-600",
    socialLinks: {
      telegram: "https://t.me/learningtribe",
      twitter: "https://twitter.com/learningtribe",
      discord: "https://discord.gg/learningtribe",
      website: "https://learningtribe.ai"
    }
  },
  {
    id: 'aiartists',
    name: 'AI Artists Collective',
    symbol: 'AIART',
    logo: '/tribe-assets/aiartists.png',
    description: "A community dedicated to AI-generated art and its creators. This tribe supports artists exploring the frontier of AI creativity tools and helps them monetize their unique creations.",
    problem: "AI artists lack recognition, proper monetization channels, and a collective voice in the emerging digital art landscape.",
    solution: "Building a dedicated community platform for AI artists to collaborate, showcase work, and collectively govern the distribution and valuation of AI art.",
    marketCap: "$1.5M",
    holders: 1760,
    tokenPrice: "$0.035",
    volume24h: "$95K",
    telegramMembers: 5200,
    discordMembers: 7800,
    twitterFollowers: 18900,
    color: "bg-purple-600",
    socialLinks: {
      telegram: "https://t.me/aiartistscollective",
      twitter: "https://twitter.com/aiartcollective",
      discord: "https://discord.gg/aiartists",
      website: "https://aiartists.community"
    }
  },
  {
    id: 'daohackers',
    name: 'DAO Hackers',
    symbol: 'DAOH',
    logo: '/tribe-assets/daohackers.png',
    description: "An elite group of governance experts and developers working to optimize and secure DAOs. This tribe focuses on creating tools and frameworks for decentralized governance.",
    problem: "Current DAO governance structures suffer from low participation, security vulnerabilities, and inefficient decision-making processes.",
    solution: "Developing specialized tools, security audits, and governance frameworks that help DAOs operate more efficiently and securely.",
    marketCap: "$2.1M",
    holders: 890,
    tokenPrice: "$0.065",
    volume24h: "$120K",
    telegramMembers: 2100,
    discordMembers: 3400,
    twitterFollowers: 8700,
    color: "bg-red-600",
    socialLinks: {
      telegram: "https://t.me/daohackers",
      twitter: "https://twitter.com/daohackers",
      discord: "https://discord.gg/daohackers",
      website: "https://daohackers.io"
    }
  },
  {
    id: 'defi-wizards',
    name: 'DeFi Wizards',
    symbol: 'WIZRD',
    logo: '/tribe-assets/defiwizards.png',
    description: "Financial innovators crafting the next generation of decentralized finance protocols. This tribe combines deep financial knowledge with technical expertise to create groundbreaking DeFi solutions.",
    problem: "DeFi remains complex and inaccessible to mainstream users, while suffering from inefficiencies and security risks.",
    solution: "Building user-friendly DeFi protocols with innovative financial mechanisms that prioritize security, efficiency, and accessibility.",
    marketCap: "$3.2M",
    holders: 2100,
    tokenPrice: "$0.085",
    volume24h: "$195K",
    telegramMembers: 6800,
    discordMembers: 5500,
    twitterFollowers: 22400,
    color: "bg-yellow-600",
    socialLinks: {
      telegram: "https://t.me/defiwizards",
      twitter: "https://twitter.com/defiwizards",
      discord: "https://discord.gg/defiwizards",
      website: "https://defiwizards.finance"
    }
  },
  {
    id: 'data-dao',
    name: 'Data DAO',
    symbol: 'DATA',
    logo: '/tribe-assets/datadao.png',
    description: "A collective focused on democratizing access to AI training data. This tribe works to ensure data is ethically sourced, fairly compensated, and widely available for AI advancement.",
    problem: "AI training data is controlled by centralized entities, leading to biases, lack of compensation for data producers, and limited access.",
    solution: "Creating a decentralized data marketplace where contributors are fairly compensated and data access is democratized through token governance.",
    marketCap: "$1.8M",
    holders: 1450,
    tokenPrice: "$0.042",
    volume24h: "$88K",
    telegramMembers: 3900,
    discordMembers: 4200,
    twitterFollowers: 14500,
    color: "bg-cyan-600",
    socialLinks: {
      telegram: "https://t.me/datadao",
      twitter: "https://twitter.com/datadao",
      discord: "https://discord.gg/datadao",
      website: "https://datadao.ai"
    }
  },
  {
    id: 'gaming-guild',
    name: 'AI Gaming Guild',
    symbol: 'PLAY',
    logo: '/tribe-assets/gaming.png',
    description: "A community of gamers, developers and AI enthusiasts building the future of decentralized gaming. This tribe focuses on AI-enhanced gameplay, fair revenue distribution, and player ownership.",
    problem: "Traditional gaming concentrates value with publishers while players who generate content and community receive minimal benefits.",
    solution: "Creating decentralized gaming ecosystems where players earn ownership, participate in governance, and benefit from the value they create.",
    marketCap: "$2.4M",
    holders: 3200,
    tokenPrice: "$0.055",
    volume24h: "$145K",
    telegramMembers: 9500,
    discordMembers: 14800,
    twitterFollowers: 27600,
    color: "bg-indigo-600",
    socialLinks: {
      telegram: "https://t.me/aigamingguild",
      twitter: "https://twitter.com/aigamingguild",
      discord: "https://discord.gg/aigamingguild",
      website: "https://aigamingguild.io"
    }
  },
  {
    id: 'climatetribe',
    name: 'Climate Action Tribe',
    symbol: 'CLIMATE',
    logo: '/tribe-assets/climate.png',
    description: "Environmental activists leveraging blockchain and AI to combat climate change. This tribe focuses on transparent carbon markets, environmental monitoring, and sustainable initiatives.",
    problem: "Climate initiatives suffer from lack of transparency, inefficient resource allocation, and difficulties in measuring real impact.",
    solution: "Using blockchain for transparent carbon credit markets and AI for optimized resource allocation and impact measurement of climate initiatives.",
    marketCap: "$1.4M",
    holders: 1850,
    tokenPrice: "$0.032",
    volume24h: "$68K",
    telegramMembers: 4700,
    discordMembers: 3800,
    twitterFollowers: 16300,
    color: "bg-green-700",
    socialLinks: {
      telegram: "https://t.me/climateactiontribe",
      twitter: "https://twitter.com/climatetribe",
      discord: "https://discord.gg/climatetribe",
      website: "https://climatetribe.earth"
    }
  },
  {
    id: 'healthdao',
    name: 'Health & Wellness DAO',
    symbol: 'HEALTH',
    logo: '/tribe-assets/health.png',
    description: "A community dedicated to decentralized health data management and wellness initiatives. This tribe works on patient-owned health records, wellness incentives, and medical research funding.",
    problem: "Health data is siloed, patient control is limited, and wellness initiatives lack proper incentive structures.",
    solution: "Creating token-based incentives for wellness activities and patient-controlled health data sharing systems that preserve privacy while enabling research.",
    marketCap: "$950K",
    holders: 1280,
    tokenPrice: "$0.022",
    volume24h: "$45K",
    telegramMembers: 3100,
    discordMembers: 2800,
    twitterFollowers: 9400,
    color: "bg-red-500",
    socialLinks: {
      telegram: "https://t.me/healthwellnessdao",
      twitter: "https://twitter.com/healthdao",
      discord: "https://discord.gg/healthdao",
      website: "https://healthdao.care"
    }
  },
  {
    id: 'creators',
    name: 'Creators Tribe',
    symbol: 'CREATE',
    logo: '/tribe-assets/creators.png',
    description: "A community supporting content creators, influencers, and digital artists. This tribe builds tools for direct fan support, content monetization, and creator independence.",
    problem: "Content creators rely on centralized platforms that take large cuts and control distribution, monetization, and audience relationships.",
    solution: "Building decentralized content platforms where creators own their relationship with audiences and receive direct support through tokens and NFTs.",
    marketCap: "$2.8M",
    holders: 4100,
    tokenPrice: "$0.048",
    volume24h: "$175K",
    telegramMembers: 11500,
    discordMembers: 13200,
    twitterFollowers: 34800,
    color: "bg-orange-500",
    socialLinks: {
      telegram: "https://t.me/creatorstribe",
      twitter: "https://twitter.com/creatorstribe",
      discord: "https://discord.gg/creatorstribe",
      website: "https://creatorstribe.network"
    }
  },
  {
    id: 'aiagents',
    name: 'AI Agents Alliance',
    symbol: 'AGENT',
    logo: '/tribe-assets/aiagents.png',
    description: "Pioneers developing autonomous AI agents that perform valuable tasks on behalf of the community. This tribe focuses on self-improving AI systems for decentralized task management.",
    problem: "Current AI systems lack autonomy, coordination capabilities, and aligned incentives with their users.",
    solution: "Developing autonomous agent frameworks with token incentives that align agent behavior with community goals and enable coordination between multiple specialized agents.",
    marketCap: "$3.5M",
    holders: 1920,
    tokenPrice: "$0.078",
    volume24h: "$210K",
    telegramMembers: 5300,
    discordMembers: 6700,
    twitterFollowers: 19800,
    color: "bg-violet-600",
    socialLinks: {
      telegram: "https://t.me/aiagentsalliance",
      twitter: "https://twitter.com/aiagents",
      discord: "https://discord.gg/aiagents",
      website: "https://aiagents.alliance"
    }
  },
  {
    id: 'web3media',
    name: 'Web3 Media Collective',
    symbol: 'W3MEDIA',
    logo: '/tribe-assets/web3media.png',
    description: "Journalists, writers and media professionals building decentralized news platforms. This tribe focuses on credible, censorship-resistant information systems with proper attribution and token incentives.",
    problem: "Traditional media faces credibility issues, centralized control, and misaligned incentives between publishers, journalists, and readers.",
    solution: "Creating token-based news platforms where credibility is verified on-chain, journalists are fairly compensated, and readers participate in governance.",
    marketCap: "$1.1M",
    holders: 1350,
    tokenPrice: "$0.028",
    volume24h: "$62K",
    telegramMembers: 4100,
    discordMembers: 3500,
    twitterFollowers: 13600,
    color: "bg-blue-700",
    socialLinks: {
      telegram: "https://t.me/web3media",
      twitter: "https://twitter.com/web3mediacollective",
      discord: "https://discord.gg/web3media",
      website: "https://web3media.network"
    }
  },
  {
    id: 'identitytribe',
    name: 'Identity Tribe',
    symbol: 'IDENT',
    logo: '/tribe-assets/identity.png',
    description: "A coalition working on decentralized identity solutions and reputation systems. This tribe focuses on self-sovereign identity, portable reputation, and privacy-preserving verification.",
    problem: "Digital identity remains fragmented, controlled by centralized entities, with poor privacy protections and limited user control.",
    solution: "Building decentralized identity frameworks that give users control over their data, enable portable reputation, and provide privacy-preserving verification methods.",
    marketCap: "$1.7M",
    holders: 1580,
    tokenPrice: "$0.038",
    volume24h: "$85K",
    telegramMembers: 3800,
    discordMembers: 4500,
    twitterFollowers: 12900,
    color: "bg-teal-600",
    socialLinks: {
      telegram: "https://t.me/identitytribe",
      twitter: "https://twitter.com/identitytribe",
      discord: "https://discord.gg/identitytribe",
      website: "https://identitytribe.id"
    }
  },
  {
    id: 'aigov',
    name: 'AI Governance DAO',
    symbol: 'AIGOV',
    logo: '/tribe-assets/aigov.png',
    description: "A multidisciplinary community focused on ethical AI governance and regulation. This tribe works on frameworks for responsible AI development and ethical standards for AI systems.",
    problem: "AI development lacks standardized ethical frameworks, transparent governance, and mechanisms to align AI systems with human values.",
    solution: "Creating decentralized governance structures for AI systems with token-based voting, transparent development standards, and ethical guidelines.",
    marketCap: "$2.2M",
    holders: 1050,
    tokenPrice: "$0.058",
    volume24h: "$110K",
    telegramMembers: 2900,
    discordMembers: 3700,
    twitterFollowers: 11200,
    color: "bg-gray-700",
    socialLinks: {
      telegram: "https://t.me/aigovernancedao",
      twitter: "https://twitter.com/aigovdao",
      discord: "https://discord.gg/aigovdao",
      website: "https://aigovernance.dao"
    }
  }
];

const TribesBrowser = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<string | null>(null);
  const controls = useAnimation();

  const currentTribe = tribes[currentIndex];

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    const swipe = Math.abs(offset.x) * velocity.x;

    if (swipe < -1000 && currentIndex < tribes.length - 1) {
      // Swiped left - show next tribe
      controls.start({ x: '-100%', transition: { duration: 0.3 } }).then(() => {
        setDirection('left');
        setCurrentIndex(currentIndex + 1);
        controls.set({ x: '100%' });
        controls.start({ x: 0, transition: { duration: 0.3 } });
      });
    } else if (swipe > 1000 && currentIndex > 0) {
      // Swiped right - show previous tribe
      controls.start({ x: '100%', transition: { duration: 0.3 } }).then(() => {
        setDirection('right');
        setCurrentIndex(currentIndex - 1);
        controls.set({ x: '-100%' });
        controls.start({ x: 0, transition: { duration: 0.3 } });
      });
    } else {
      // Reset if swipe wasn't strong enough
      controls.start({ x: 0, transition: { duration: 0.3 } });
    }
  };

  const handleLike = () => {
    if (currentIndex < tribes.length - 1) {
      controls.start({ x: '-100%', opacity: 0, transition: { duration: 0.3 } }).then(() => {
        setDirection('left');
        setCurrentIndex(currentIndex + 1);
        controls.set({ x: '100%', opacity: 0 });
        controls.start({ x: 0, opacity: 1, transition: { duration: 0.3 } });
      });
    }
  };

  const handlePass = () => {
    if (currentIndex < tribes.length - 1) {
      controls.start({ x: '100%', opacity: 0, transition: { duration: 0.3 } }).then(() => {
        setDirection('right');
        setCurrentIndex(currentIndex + 1);
        controls.set({ x: '-100%', opacity: 0 });
        controls.start({ x: 0, opacity: 1, transition: { duration: 0.3 } });
      });
    }
  };

  return (
    <>
      <Head>
        <title>AI Tribes Browser | Tribes Wallet</title>
        <meta name="description" content="Discover and join innovative token communities in the AI Tribes ecosystem. From DeFi to AI Governance, find your tribe and connect with like-minded members." />
      </Head>

      <Header />
      
      <main>
        <div className="py-12 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Discover <span className="text-indigo-400">AI Tribes</span>
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-gray-300">
                Find your tribe, join the community, and help build the future of decentralized AI ecosystems.
              </p>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center">
              {/* Tribe Card */}
              <motion.div 
                className="bg-gray-900 rounded-xl shadow-xl overflow-hidden w-full max-w-lg"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                animate={controls}
                initial={{ x: 0 }}
              >
                {/* Tribe Header */}
                <div className={`${currentTribe.color} px-6 py-8 flex items-center`}>
                  <div className="h-20 w-20 rounded-full bg-white p-1 mr-6 flex-shrink-0">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src={currentTribe.logo} 
                        alt={currentTribe.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/tribe-assets/placeholder.png"; // Fallback image
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{currentTribe.name}</h2>
                    <div className="flex items-center mt-1">
                      <span className="text-white font-medium mr-3">${currentTribe.symbol}</span>
                      <span className="bg-black bg-opacity-30 text-green-300 px-2 py-0.5 rounded-full text-sm">
                        {currentTribe.tokenPrice}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tribe Details */}
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-gray-300 mb-4">{currentTribe.description}</p>
                    
                    <div className="mt-4">
                      <h3 className="text-lg font-medium text-white mb-2">Problem</h3>
                      <p className="text-gray-400">{currentTribe.problem}</p>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="text-lg font-medium text-white mb-2">Solution</h3>
                      <p className="text-gray-400">{currentTribe.solution}</p>
                    </div>
                  </div>

                  {/* Token Stats */}
                  <div className="bg-gray-800 rounded-lg p-4 mb-6">
                    <h3 className="text-white font-medium mb-3">Token Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 text-sm">Market Cap</p>
                        <p className="text-white font-medium">{currentTribe.marketCap}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Token Price</p>
                        <p className="text-white font-medium">{currentTribe.tokenPrice}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Volume (24h)</p>
                        <p className="text-white font-medium">{currentTribe.volume24h}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Holders</p>
                        <p className="text-white font-medium">{currentTribe.holders?.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Community Stats */}
                  <div className="bg-gray-800 rounded-lg p-4 mb-6">
                    <h3 className="text-white font-medium mb-3">Community</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {currentTribe.telegramMembers && (
                        <div className="flex flex-col items-center">
                          <p className="text-white font-medium">{(currentTribe.telegramMembers / 1000).toFixed(1)}K</p>
                          <p className="text-gray-400 text-sm">Telegram</p>
                        </div>
                      )}
                      {currentTribe.discordMembers && (
                        <div className="flex flex-col items-center">
                          <p className="text-white font-medium">{(currentTribe.discordMembers / 1000).toFixed(1)}K</p>
                          <p className="text-gray-400 text-sm">Discord</p>
                        </div>
                      )}
                      {currentTribe.twitterFollowers && (
                        <div className="flex flex-col items-center">
                          <p className="text-white font-medium">{(currentTribe.twitterFollowers / 1000).toFixed(1)}K</p>
                          <p className="text-gray-400 text-sm">Twitter</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 mb-6">
                    {currentTribe.socialLinks.telegram && (
                      <a href={currentTribe.socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-2.5 13.5c.3 0 .5-.2.5-.5v-2.5h2.5c.3 0 .5-.2.5-.5v-2c0-.3-.2-.5-.5-.5h-2.5v-2.5c0-.3-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5v2.5h-2.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5h2.5v2.5c0 .3.2.5.5.5h2z" />
                        </svg>
                      </a>
                    )}
                    {currentTribe.socialLinks.twitter && (
                      <a href={currentTribe.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    )}
                    {currentTribe.socialLinks.discord && (
                      <a href={currentTribe.socialLinks.discord} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.608 1.2495-1.8447-.2762-3.6677-.2762-5.4878 0-.1634-.3933-.4-.8902-.6117-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                        </svg>
                      </a>
                    )}
                    {currentTribe.socialLinks.website && (
                      <a href={currentTribe.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between">
                    <button 
                      onClick={handlePass}
                      className="w-24 h-24 rounded-full bg-red-500 text-white flex items-center justify-center text-xl font-bold shadow-lg hover:bg-red-600 transition-colors"
                    >
                      PASS
                    </button>
                    <button 
                      onClick={handleLike}
                      className="w-24 h-24 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold shadow-lg hover:bg-green-600 transition-colors"
                    >
                      JOIN
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Progress Bar */}
              <div className="w-full max-w-lg mt-6 bg-gray-800 rounded-full h-2.5">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full" 
                  style={{ width: `${((currentIndex + 1) / tribes.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-gray-400 mt-2">Tribe {currentIndex + 1} of {tribes.length}</p>
            </div>

            {/* How to Join a Tribe */}
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-white text-center mb-8">How to Join a Tribe</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mb-4 text-xl font-bold text-white">1</div>
                  <h3 className="text-xl font-medium text-white mb-2">Choose a Tribe</h3>
                  <p className="text-gray-400">Browse through available tribes and find one that matches your interests and values.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mb-4 text-xl font-bold text-white">2</div>
                  <h3 className="text-xl font-medium text-white mb-2">Acquire Tokens</h3>
                  <p className="text-gray-400">Purchase the tribe's token through supported exchanges or directly through the Tribes Wallet app.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mb-4 text-xl font-bold text-white">3</div>
                  <h3 className="text-xl font-medium text-white mb-2">Access Community</h3>
                  <p className="text-gray-400">Once you hold tokens, you'll automatically gain access to the tribe's private community and governance rights.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default TribesBrowser; 