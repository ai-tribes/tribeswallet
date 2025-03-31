export interface SuccessStory {
  name: string;
  image: string;
  ticker: string;
  socialPlatforms: string[];
  blockchains: string[];
  stats: string[];
  testimonial: string;
}

export const successStories: SuccessStory[] = [
  {
    name: '@mecha.dreams',
    image: '/images/success-stories/mech.jpg',
    ticker: '$MECHA',
    socialPlatforms: ['youtube', 'instagram'],
    blockchains: ['ethereum', 'solana'],
    stats: [
      'Mecha Designs: 200+ pieces',
      'Average NFT Value: $2,400',
      'Token Market Cap: $32M'
    ],
    testimonial: "AI Tribes helps me bring my cyberpunk mecha designs to life through motion and animation. Each design starts as a 3D model and evolves into a full cinematic piece. My collectors get exclusive access to the design process and motion studies!"
  },
  {
    name: '@SarahsKitchen',
    image: '/images/success-stories/sarahskitchen.jpg',
    ticker: '$CHEF',
    socialPlatforms: ['instagram', 'tiktok'],
    blockchains: ['ethereum', 'bnb'],
    stats: [
      'Recipe Collection: 1000+ dishes',
      'Community Size: 2.5M followers',
      'Token Market Cap: $100M'
    ],
    testimonial: "From a home kitchen to a global food community! AI Tribes helps me create content in 6 languages, and my token has turned my recipes into a thriving business. My followers love being part of my culinary journey and earning rewards for sharing their own creations!"
  },
  {
    name: '@FitWithJen',
    image: '/images/success-stories/fitwithjen.jpg',
    ticker: '$FIT',
    socialPlatforms: ['instagram', 'youtube'],
    blockchains: ['ethereum', 'btc', 'solana'],
    stats: [
      'Monthly Workouts: 60+ routines',
      'Community Growth: +800% in 6 months',
      'Token Market Cap: $15M'
    ],
    testimonial: "AI Tribes transformed my fitness coaching into a movement. The AI creates personalized workout plans while I focus on motivation. My token rewards active community members, and we're building the future of fitness together!"
  },
  {
    name: '@0xNightCode',
    image: '/images/success-stories/nightcode.jpg',
    ticker: '$CODE',
    socialPlatforms: ['github', 'discord'],
    blockchains: ['ethereum', 'btc', 'solana'],
    stats: [
      'Open Source Projects: 42',
      'GitHub Stars: 13.5K',
      'Token Market Cap: $85M'
    ],
    testimonial: "AI Tribes turned my GitHub repos into a thriving dev ecosystem. Each commit generates value, and my token holders get early access to my AI tools and custom APIs. The platform's smart contracts automatically distribute rewards to contributors. We're building the future of decentralized software development!"
  },
  {
    name: '@SophieGoesSocial',
    image: '/images/success-stories/sophiegoessocial.jpg',
    ticker: '$VIRAL',
    socialPlatforms: ['tiktok', 'instagram'],
    blockchains: ['ethereum', 'bnb'],
    stats: [
      'TikTok Views: 12M+ daily',
      'Viral Hits: 500+ videos',
      'Token Market Cap: $45M'
    ],
    testimonial: "AI Tribes revolutionized my TikTok strategy game! The AI predicts viral trends and helps me create thumb-stopping content that consistently hits the FYP. My marketing insights token is now the go-to for brands wanting to crack the TikTok code. My community gets early access to trend forecasts and earns rewards for spotting the next big wave!"
  },
  {
    name: '@neo.glitch.art',
    image: '/images/success-stories/glitchart.jpg',
    ticker: '$GLITCH',
    socialPlatforms: ['github', 'instagram'],
    blockchains: ['ethereum', 'btc', 'solana'],
    stats: [
      'Generative Collections: 50+',
      'Active Collectors: 3.2K',
      'Token Market Cap: $2.5M'
    ],
    testimonial: "My generative art algorithms create unique anime-inspired pieces that blend traditional aesthetics with digital chaos. AI Tribes helps me turn my Processing sketches into dynamic NFTs. Each token holder gets to influence the next evolution of my art system!"
  }
]; 