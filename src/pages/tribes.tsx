import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Define interfaces for the tribe data
interface Agent {
  name: string;
  role: string;
  avatar: string;
}

interface TokenNetwork {
  name: string;
  icon: string;
}

interface SocialLinks {
  telegram?: string;
  twitter?: string;
  discord?: string;
  website?: string;
  github?: string;
  youtube?: string;
  twitch?: string;
}

interface Tribe {
  id: string;
  name: string;
  symbol: string;
  category: string;
  backgroundImage: string;
  description: string;
  tokenPrice: string;
  priceChange: string;
  isPositive: boolean;
  volume: string;
  marketCap: string;
  networks: TokenNetwork[];
  agents: Agent[];
  color: string;
  gradientFrom: string;
  gradientTo: string;
  socialLinks: SocialLinks;
}

// AI TRIBES data
const tribes: Tribe[] = [
  {
    id: 'arts',
    name: 'Arts Tribe',
    symbol: '$ART',
    category: 'ARTS',
    backgroundImage: '/tribe-assets/backgrounds/arts-tribe.jpg',
    description: "AI art creation and curation",
    tokenPrice: "$2.3M",
    priceChange: "+8.32%",
    isPositive: true,
    volume: "$24.6M",
    marketCap: "$2.3M",
    networks: [
      { name: 'Ethereum', icon: '/tribe-assets/networks/ethereum.svg' },
      { name: 'Polygon', icon: '/tribe-assets/networks/polygon.svg' }
    ],
    agents: [
      { name: 'CuratorBot', role: 'Curator', avatar: '/tribe-assets/agents/curator-bot.jpg' }
    ],
    color: "bg-red-600",
    gradientFrom: "from-red-800",
    gradientTo: "to-red-500",
    socialLinks: {
      twitter: "https://twitter.com/artstribe",
      discord: "https://discord.gg/artstribe",
      website: "https://artstribe.ai"
    }
  },
  {
    id: 'climate',
    name: 'Climate Action Tribe',
    symbol: '$ECO',
    category: 'CLIMATIC',
    backgroundImage: '/tribe-assets/backgrounds/climate-tribe.jpg',
    description: "Environmental initiatives and climate solutions powered by AI",
    tokenPrice: "$0.850",
    priceChange: "-3.21%",
    isPositive: false,
    volume: "$987.7K",
    marketCap: "$8.6M",
    networks: [
      { name: 'Ethereum', icon: '/tribe-assets/networks/ethereum.svg' },
      { name: 'Polygon', icon: '/tribe-assets/networks/polygon.svg' },
      { name: 'Bitcoin', icon: '/tribe-assets/networks/bitcoin.svg' }
    ],
    agents: [
      { name: 'ClimateGPT', role: 'Climate Advisor', avatar: '/tribe-assets/agents/climate-gpt.jpg' },
      { name: 'EcoBot', role: 'Eco Advocate', avatar: '/tribe-assets/agents/eco-bot.jpg' }
    ],
    color: "bg-green-600",
    gradientFrom: "from-green-800",
    gradientTo: "to-green-500",
    socialLinks: {
      twitter: "https://twitter.com/climatetribe",
      discord: "https://discord.gg/climatetribe",
      website: "https://climatetribe.earth",
      github: "https://github.com/climate-tribe"
    }
  },
  {
    id: 'learning',
    name: 'Learning Tribe',
    symbol: '$EDU',
    category: 'EDUSOL',
    backgroundImage: '/tribe-assets/backgrounds/learning-tribe.jpg',
    description: "AI-enhanced learning platform with personalized tutoring",
    tokenPrice: "$1.650",
    priceChange: "+12.45%",
    isPositive: true,
    volume: "$3.5M",
    marketCap: "$16.8M",
    networks: [
      { name: 'Ethereum', icon: '/tribe-assets/networks/ethereum.svg' },
      { name: 'Polygon', icon: '/tribe-assets/networks/polygon.svg' },
      { name: 'Bitcoin', icon: '/tribe-assets/networks/bitcoin.svg' }
    ],
    agents: [
      { name: 'EduGPT', role: 'Educator', avatar: '/tribe-assets/agents/edu-gpt.jpg' },
      { name: 'TutorBot', role: 'Tutor', avatar: '/tribe-assets/agents/tutor-bot.jpg' }
    ],
    color: "bg-yellow-600",
    gradientFrom: "from-yellow-700",
    gradientTo: "to-yellow-500",
    socialLinks: {
      twitter: "https://twitter.com/learningtribe",
      discord: "https://discord.gg/learningtribe",
      website: "https://learningtribe.ai",
      youtube: "https://youtube.com/learningtribe"
    }
  },
  {
    id: 'metagame',
    name: 'MetaGame Guild',
    symbol: '$PLAY',
    category: 'GAMING',
    backgroundImage: '/tribe-assets/backgrounds/metagame-tribe.jpg',
    description: "Gaming community with AI coaches and strategy advisors",
    tokenPrice: "$3.920",
    priceChange: "-5.67%",
    isPositive: false,
    volume: "$5.7M",
    marketCap: "$39.0M",
    networks: [
      { name: 'Ethereum', icon: '/tribe-assets/networks/ethereum.svg' },
      { name: 'Polygon', icon: '/tribe-assets/networks/polygon.svg' },
      { name: 'Solana', icon: '/tribe-assets/networks/solana.svg' }
    ],
    agents: [
      { name: 'GameGPT', role: 'Game Designer', avatar: '/tribe-assets/agents/game-gpt.jpg' },
      { name: 'StrategyBot', role: 'Strategy Advisor', avatar: '/tribe-assets/agents/strategy-bot.jpg' }
    ],
    color: "bg-purple-600",
    gradientFrom: "from-purple-800",
    gradientTo: "to-purple-500",
    socialLinks: {
      twitter: "https://twitter.com/metagameguild",
      discord: "https://discord.gg/metagameguild",
      website: "https://metagameguild.io",
      twitch: "https://twitch.tv/metagameguild"
    }
  },
  {
    id: 'news',
    name: 'News Network Tribe',
    symbol: '$NEWS',
    category: 'PRISMATIC',
    backgroundImage: '/tribe-assets/backgrounds/news-tribe.jpg',
    description: "AI-powered news curation and fact-checking",
    tokenPrice: "$0.450",
    priceChange: "+15.89%",
    isPositive: true,
    volume: "$789.0K",
    marketCap: "$4.5M",
    networks: [
      { name: 'Ethereum', icon: '/tribe-assets/networks/ethereum.svg' },
      { name: 'Polygon', icon: '/tribe-assets/networks/polygon.svg' }
    ],
    agents: [
      { name: 'NewsGPT', role: 'News Analyst', avatar: '/tribe-assets/agents/news-gpt.jpg' },
      { name: 'FactCheckerBot', role: 'Fact Checker', avatar: '/tribe-assets/agents/fact-checker-bot.jpg' }
    ],
    color: "bg-red-600",
    gradientFrom: "from-red-700",
    gradientTo: "to-orange-500",
    socialLinks: {
      twitter: "https://twitter.com/newsnetworktribe",
      github: "https://github.com/newsnetwork",
      website: "https://newsnetwork.media"
    }
  },
  {
    id: 'metabuilders',
    name: 'MetaBuildersDAO',
    symbol: '$BUILD',
    category: 'DEV',
    backgroundImage: '/tribe-assets/backgrounds/metabuilders-tribe.jpg',
    description: "Community of builders and creators working on next-generation decentralized applications",
    tokenPrice: "$0.025",
    priceChange: "+6.24%",
    isPositive: true,
    volume: "$78K",
    marketCap: "$1.2M",
    networks: [
      { name: 'Ethereum', icon: '/tribe-assets/networks/ethereum.svg' },
      { name: 'Polygon', icon: '/tribe-assets/networks/polygon.svg' }
    ],
    agents: [
      { name: 'BuilderGPT', role: 'Dev Assistant', avatar: '/tribe-assets/agents/builder-gpt.jpg' },
      { name: 'ArchitectBot', role: 'System Architect', avatar: '/tribe-assets/agents/architect-bot.jpg' }
    ],
    color: "bg-blue-600",
    gradientFrom: "from-blue-800",
    gradientTo: "to-blue-500",
    socialLinks: {
      telegram: "https://t.me/metabuildersdao",
      twitter: "https://twitter.com/metabuildersdao",
      discord: "https://discord.gg/metabuildersdao",
      github: "https://github.com/metabuildersdao",
      website: "https://metabuildersdao.ai"
    }
  },
  {
    id: 'aiartists',
    name: 'AI Artists Collective',
    symbol: '$AIART',
    category: 'CREATIVE',
    backgroundImage: '/tribe-assets/backgrounds/aiartists-tribe.jpg',
    description: "A community dedicated to AI-generated art and its creators",
    tokenPrice: "$0.035",
    priceChange: "+9.45%",
    isPositive: true,
    volume: "$95K",
    marketCap: "$1.5M",
    networks: [
      { name: 'Ethereum', icon: '/tribe-assets/networks/ethereum.svg' },
      { name: 'Polygon', icon: '/tribe-assets/networks/polygon.svg' }
    ],
    agents: [
      { name: 'CreatorGPT', role: 'Art Generator', avatar: '/tribe-assets/agents/creator-gpt.jpg' },
      { name: 'GalleryBot', role: 'Curator', avatar: '/tribe-assets/agents/gallery-bot.jpg' }
    ],
    color: "bg-purple-600",
    gradientFrom: "from-pink-700",
    gradientTo: "to-purple-500",
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
    symbol: '$DAOH',
    category: 'GOVERNANCE',
    backgroundImage: '/tribe-assets/backgrounds/daohackers-tribe.jpg',
    description: "Elite group of governance experts and developers working to optimize and secure DAOs",
    tokenPrice: "$0.065",
    priceChange: "+2.21%",
    isPositive: true,
    volume: "$120K",
    marketCap: "$2.1M",
    networks: [
      { name: 'Ethereum', icon: '/tribe-assets/networks/ethereum.svg' },
      { name: 'Polygon', icon: '/tribe-assets/networks/polygon.svg' }
    ],
    agents: [
      { name: 'GovGPT', role: 'Governance Advisor', avatar: '/tribe-assets/agents/gov-gpt.jpg' },
      { name: 'SecurityBot', role: 'Security Auditor', avatar: '/tribe-assets/agents/security-bot.jpg' }
    ],
    color: "bg-red-600",
    gradientFrom: "from-red-900",
    gradientTo: "to-red-700",
    socialLinks: {
      telegram: "https://t.me/daohackers",
      twitter: "https://twitter.com/daohackers",
      discord: "https://discord.gg/daohackers",
      github: "https://github.com/dao-hackers",
      website: "https://daohackers.io"
    }
  },
  {
    id: 'defi-wizards',
    name: 'DeFi Wizards',
    symbol: '$WIZRD',
    category: 'FINANCE',
    backgroundImage: '/tribe-assets/backgrounds/defiwizards-tribe.jpg',
    description: "Financial innovators crafting the next generation of decentralized finance protocols",
    tokenPrice: "$0.085",
    priceChange: "+11.37%",
    isPositive: true,
    volume: "$195K",
    marketCap: "$3.2M",
    networks: [
      { name: 'Ethereum', icon: '/tribe-assets/networks/ethereum.svg' },
      { name: 'Polygon', icon: '/tribe-assets/networks/polygon.svg' },
      { name: 'Bitcoin', icon: '/tribe-assets/networks/bitcoin.svg' }
    ],
    agents: [
      { name: 'FinanceGPT', role: 'Financial Advisor', avatar: '/tribe-assets/agents/finance-gpt.jpg' },
      { name: 'YieldBot', role: 'Yield Optimizer', avatar: '/tribe-assets/agents/yield-bot.jpg' }
    ],
    color: "bg-yellow-600",
    gradientFrom: "from-yellow-600",
    gradientTo: "to-amber-400",
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
    symbol: '$DATA',
    category: 'DATA',
    backgroundImage: '/tribe-assets/backgrounds/datadao-tribe.jpg',
    description: "Collective focused on democratizing access to AI training data",
    tokenPrice: "$0.042",
    priceChange: "+5.13%",
    isPositive: true,
    volume: "$88K",
    marketCap: "$1.8M",
    networks: [
      { name: 'Ethereum', icon: '/tribe-assets/networks/ethereum.svg' },
      { name: 'Polygon', icon: '/tribe-assets/networks/polygon.svg' }
    ],
    agents: [
      { name: 'DataGPT', role: 'Data Analyst', avatar: '/tribe-assets/agents/data-gpt.jpg' },
      { name: 'CuratorBot', role: 'Dataset Curator', avatar: '/tribe-assets/agents/curator-bot.jpg' }
    ],
    color: "bg-cyan-600",
    gradientFrom: "from-cyan-800",
    gradientTo: "to-blue-500",
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
    symbol: '$PLAY',
    category: 'GAMING',
    backgroundImage: '/tribe-assets/backgrounds/gaming-tribe.jpg',
    description: "Community of gamers, developers and AI enthusiasts building the future of decentralized gaming",
    tokenPrice: "$0.055",
    priceChange: "+7.24%",
    isPositive: true,
    volume: "$145K",
    marketCap: "$2.4M",
    networks: [
      { name: 'Ethereum', icon: '/tribe-assets/networks/ethereum.svg' },
      { name: 'Polygon', icon: '/tribe-assets/networks/polygon.svg' },
      { name: 'Solana', icon: '/tribe-assets/networks/solana.svg' }
    ],
    agents: [
      { name: 'GameGPT', role: 'Game Designer', avatar: '/tribe-assets/agents/game-gpt.jpg' },
      { name: 'PlayerBot', role: 'Game Tester', avatar: '/tribe-assets/agents/player-bot.jpg' }
    ],
    color: "bg-indigo-600",
    gradientFrom: "from-indigo-800",
    gradientTo: "to-blue-500",
    socialLinks: {
      telegram: "https://t.me/aigamingguild",
      twitter: "https://twitter.com/aigamingguild",
      discord: "https://discord.gg/aigamingguild",
      twitch: "https://twitch.tv/aigamingguild",
      website: "https://aigamingguild.io"
    }
  },
  {
    id: 'creators',
    name: 'Creators Tribe',
    symbol: '$CREATE',
    category: 'CONTENT',
    backgroundImage: '/tribe-assets/backgrounds/creators-tribe.jpg',
    description: "Community supporting content creators, influencers, and digital artists",
    tokenPrice: "$0.048",
    priceChange: "+6.78%",
    isPositive: true,
    volume: "$175K",
    marketCap: "$2.8M",
    networks: [
      { name: 'Ethereum', icon: '/tribe-assets/networks/ethereum.svg' },
      { name: 'Polygon', icon: '/tribe-assets/networks/polygon.svg' }
    ],
    agents: [
      { name: 'ContentGPT', role: 'Content Creator', avatar: '/tribe-assets/agents/content-gpt.jpg' },
      { name: 'DistributorBot', role: 'Distribution Manager', avatar: '/tribe-assets/agents/distributor-bot.jpg' }
    ],
    color: "bg-orange-500",
    gradientFrom: "from-orange-600",
    gradientTo: "to-amber-400",
    socialLinks: {
      telegram: "https://t.me/creatorstribe",
      twitter: "https://twitter.com/creatorstribe",
      discord: "https://discord.gg/creatorstribe",
      youtube: "https://youtube.com/creatorstribe",
      website: "https://creatorstribe.network"
    }
  },
  {
    id: 'aiagents',
    name: 'AI Agents Alliance',
    symbol: '$AGENT',
    category: 'AUTONOMOUS',
    backgroundImage: '/tribe-assets/backgrounds/aiagents-tribe.jpg',
    description: "Pioneers developing autonomous AI agents that perform valuable tasks on behalf of the community",
    tokenPrice: "$0.078",
    priceChange: "+14.52%",
    isPositive: true,
    volume: "$210K",
    marketCap: "$3.5M",
    networks: [
      { name: 'Ethereum', icon: '/tribe-assets/networks/ethereum.svg' },
      { name: 'Polygon', icon: '/tribe-assets/networks/polygon.svg' }
    ],
    agents: [
      { name: 'AgentGPT', role: 'Agent Designer', avatar: '/tribe-assets/agents/agent-gpt.jpg' },
      { name: 'TaskBot', role: 'Task Coordinator', avatar: '/tribe-assets/agents/task-bot.jpg' }
    ],
    color: "bg-violet-600",
    gradientFrom: "from-violet-800",
    gradientTo: "to-purple-500",
    socialLinks: {
      telegram: "https://t.me/aiagentsalliance",
      twitter: "https://twitter.com/aiagents",
      discord: "https://discord.gg/aiagents",
      github: "https://github.com/ai-agents-alliance",
      website: "https://aiagents.alliance"
    }
  }
];

export default function TribesBrowser() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const filteredTribes = activeCategory 
    ? tribes.filter(tribe => tribe.category === activeCategory) 
    : tribes;

  const scrollLeft = () => {
    const container = document.getElementById('tribes-container');
    if (container) {
      const newPosition = scrollPosition - 400;
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('tribes-container');
    if (container) {
      const newPosition = scrollPosition + 400;
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  // Extract unique categories
  const categories = Array.from(new Set(tribes.map(tribe => tribe.category)));

  return (
    <>
      <Head>
        <title>AI Tribes | Tribes Wallet</title>
        <meta name="description" content="Discover and join innovative token communities in the AI Tribes ecosystem." />
      </Head>

      <Header />
      
      <main className="bg-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
              Discover <span className="text-indigo-400">AI Tribes</span>
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-300">
              Find your tribe, join the community, and help shape the future of decentralized AI ecosystems.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  !activeCategory ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All Tribes
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeCategory === category ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tribes Grid with Scroll Controls */}
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 rounded-full p-2 text-white hover:bg-opacity-90"
              aria-label="Scroll left"
            >
              <ArrowLeftIcon className="h-6 w-6" />
            </button>
            
            <div 
              id="tribes-container"
              className="flex overflow-x-auto scrollbar-hide py-4 space-x-6"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth' 
              }}
            >
              {filteredTribes.map((tribe) => (
                <div 
                  key={tribe.id} 
                  className="flex-none w-[300px] relative rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
                >
                  {/* Card background image */}
                  <div className="h-40 relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url(${tribe.backgroundImage})`,
                        backgroundSize: 'cover'
                      }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${tribe.gradientFrom} ${tribe.gradientTo} opacity-80`}></div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                        {tribe.category}
                      </span>
                    </div>
                    
                    {/* Tribe Name */}
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{tribe.name}</h3>
                      <p className="text-white text-sm">{tribe.symbol}</p>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="bg-gray-900 p-4">
                    {/* Description */}
                    <p className="text-sm text-gray-300 mb-4 h-16 overflow-hidden">{tribe.description}</p>
                    
                    {/* Token Statistics */}
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4 text-xs text-gray-400">
                      <div className="col-span-1">
                        <div className="text-xs uppercase">PRICE</div>
                        <div className="font-medium text-white">{tribe.tokenPrice}</div>
                      </div>
                      <div className="col-span-1">
                        <div className="text-xs uppercase">24H</div>
                        <div className={`font-medium ${tribe.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                          {tribe.priceChange}
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="text-xs uppercase">VOLUME</div>
                        <div className="font-medium text-white">{tribe.volume}</div>
                      </div>
                      <div className="col-span-1">
                        <div className="text-xs uppercase">MCAP</div>
                        <div className="font-medium text-white">{tribe.marketCap}</div>
                      </div>
                    </div>
                    
                    {/* Networks */}
                    <div className="flex space-x-2 mb-4">
                      {tribe.networks.map((network, index) => (
                        <div key={index} className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                          <img 
                            src={network.icon} 
                            alt={network.name} 
                            className="w-4 h-4 object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/tribe-assets/placeholder.png";
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Active Agents */}
                    <div className="mb-4">
                      <h4 className="text-xs text-gray-400 uppercase mb-2">Active Agents</h4>
                      <div className="flex flex-wrap gap-3">
                        {tribe.agents.map((agent, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-800 mr-2 overflow-hidden">
                              <img 
                                src={agent.avatar} 
                                alt={agent.name} 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/tribe-assets/placeholder.png";
                                }}
                              />
                            </div>
                            <div>
                              <p className="text-xs font-medium text-white">{agent.name}</p>
                              <p className="text-xs text-gray-400">{agent.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <Link href={`/tribes/${tribe.id}`}>
                        <button className="w-full py-2 px-4 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-700 transition-colors">
                          View Details
                        </button>
                      </Link>
                      <Link href={`/tribes/${tribe.id}/join`}>
                        <button className="w-full py-2 px-4 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700 transition-colors">
                          Join Tribe
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 rounded-full p-2 text-white hover:bg-opacity-90"
              aria-label="Scroll right"
            >
              <ArrowRightIcon className="h-6 w-6" />
            </button>
          </div>
          
          {/* How to Join a Tribe Section */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-white text-center mb-8">How to Join a Tribe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          
          {/* Token Benefits Section */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-white text-center mb-8">$TRIBES Token Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-white mb-4">Governance Power</h3>
                <p className="text-gray-400">Token holders vote on important decisions that shape the future of their tribes and the broader AI Tribes ecosystem.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-white mb-4">Exclusive Access</h3>
                <p className="text-gray-400">Unlock private community chats, premium content, and direct access to specialized AI agents.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-white mb-4">Revenue Sharing</h3>
                <p className="text-gray-400">Participate in community revenue streams and earn rewards based on contribution and token ownership.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-white mb-4">Community Building</h3>
                <p className="text-gray-400">Connect with like-minded individuals and build networks in your areas of interest or expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <Footer />
    </>
  );
} 