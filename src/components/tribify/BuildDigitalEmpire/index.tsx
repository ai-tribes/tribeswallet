import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { socialPlatforms, wallets, blockchains, aiFeatures } from './data';
import styles from './BuildDigitalEmpire.module.css';

export default function BuildDigitalEmpire() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToSection = () => {
      const section = document.getElementById('build-empire');
      if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    };

    // Check if we should scroll on mount
    if (window.location.hash === '#build-empire') {
      // Small delay to ensure the section is rendered
      setTimeout(scrollToSection, 100);
    }

    // Also listen for hash changes
    const handleHashChange = () => {
      if (window.location.hash === '#build-empire') {
        scrollToSection();
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="build-empire" className={styles.sectionContainer}>
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Build Your Digital Empire</h2>
          <p className={styles.sectionSubtitle}>
            Launch your AI-powered tribe in four simple steps and start building your digital legacy
          </p>
        </motion.div>

        <motion.div 
          ref={contentRef} 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className={styles.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>1</div>
              <h3>Connect your socials</h3>
            </div>
            <p>Connect social media accounts to import your content.
               Let your tribe help expand your online presence.
               Grow your audience across Instagram, TikTok, YouTube, and X.</p>
            <div className={styles.iconGrid}>
              {socialPlatforms.slice(0, 4).map((platform) => (
                <div key={platform.name} className={styles.iconWrapper}>
                  <div className={styles.iconCircle}>
                    <Image src={platform.icon} alt={platform.name} width={48} height={48} />
                  </div>
                  <span className={styles.iconSubtitle}>{platform.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>2</div>
              <h3>Connect your wallet</h3>
            </div>
            <p>Choose your preferred wallet to manage your digital assets.
               Connect with MetaMask, Coinbase, Phantom, or Trust Wallet.
               Seamlessly interact with the blockchain ecosystem.</p>
            <div className={styles.iconGrid}>
              {wallets.slice(0, 4).map((wallet) => (
                <div key={wallet.name} className={styles.iconWrapper}>
                  <div className={styles.iconCircle}>
                    <Image src={wallet.icon} alt={wallet.name} width={48} height={48} />
                  </div>
                  <span className={styles.iconSubtitle}>{wallet.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>3</div>
              <h3>Create Your AI Agents</h3>
            </div>
            <p>Enhance your content creation with powerful AI tools.
               Generate engaging written content, visuals, and audio.
               Create exceptional media that stands out.</p>
            <div className={styles.iconGrid}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <Image src="/images/ai/chatgpt.jpeg" alt="ChatGPT" width={48} height={48} />
                </div>
                <span className={styles.iconSubtitle}>ChatGPT</span>
              </div>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <Image src="/images/ai/suno.png" alt="Suno" width={48} height={48} />
                </div>
                <span className={styles.iconSubtitle}>Suno</span>
              </div>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <Image src="/images/ai/midjourney.jpeg" alt="Midjourney" width={48} height={48} />
                </div>
                <span className={styles.iconSubtitle}>Midjourney</span>
              </div>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <Image src="/images/ai/runway.png" alt="Runway" width={48} height={48} />
                </div>
                <span className={styles.iconSubtitle}>Runway</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>4</div>
              <h3>Launch your token</h3>
            </div>
            <p>Select your preferred blockchain network for launch.
               Choose from Ethereum, Polygon, BSC, or Solana.
               Create your token with custom tokenomics and governance.</p>
            <div className={styles.iconGrid}>
              {blockchains.slice(0, 4).map((chain) => (
                <div key={chain.name} className={styles.iconWrapper}>
                  <div className={styles.iconCircle}>
                    <Image src={chain.icon} alt={chain.name} width={48} height={48} />
                  </div>
                  <span className={styles.iconSubtitle}>{chain.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 