import Image from 'next/image';
import { type SuccessStory } from './data';
import styles from './Stories.module.css';

export default function StoryCard({
  name,
  image,
  ticker,
  socialPlatforms,
  blockchains,
  stats,
  testimonial
}: SuccessStory) {
  // Helper function to determine the file extension for social platforms
  const getPlatformImageExtension = (platform: string) => {
    if (platform === 'instagram') return 'jpeg';
    return 'png';
  };

  return (
    <div className={styles.storyCard}>
      <div className={styles.creatorImage} style={{ position: 'relative', width: '120px', height: '120px' }}>
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover', borderRadius: '50%' }}
        />
      </div>
      <div className={styles.creatorHeader}>
        <h3>{name}</h3>
        <span className={styles.tickerSymbol}>{ticker}</span>
      </div>
      <div className={styles.platformBadges}>
        <div className={styles.socialBadges}>
          {socialPlatforms.map((platform) => (
            <div key={platform} style={{ position: 'relative', width: '48px', height: '48px' }}>
              <Image
                src={`/images/platforms/${platform}.${getPlatformImageExtension(platform)}`}
                alt={platform}
                fill
                className={styles.badgeIcon}
              />
            </div>
          ))}
        </div>
        <div className={styles.chainBadges}>
          {blockchains.map((chain) => (
            <div key={chain} style={{ position: 'relative', width: '48px', height: '48px' }}>
              <Image
                src={`/images/blockchains/${chain}.png`}
                alt={chain}
                fill
                className={styles.badgeIcon}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.stats}>
        {stats.map((stat, index) => (
          <span key={index}>{stat}</span>
        ))}
      </div>
      <p className={styles.testimonial}>{testimonial}</p>
    </div>
  );
} 