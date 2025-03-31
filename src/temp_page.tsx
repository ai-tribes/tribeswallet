'use client';

import styles from './page.module.css';
import Start from '@/components/home/sections/1start';
import TribesSection from '@/components/home/sections/4tribes/TribesSection';
import TokenSection from '@/components/home/sections/6token/TokenSection';
import MediaSection from '@/components/home/sections/9media/MediaSection';
import Pricing from '@/components/home/sections/5pricing/Pricing';
import Team from '@/components/home/sections/8team/Team';
import FAQ from '@/components/home/sections/3faq/FAQ';
// Success Stories removed - moved to tribify.ai
import Hero from '@/components/home/sections/0hero/Hero';
import VisionSection from '@/components/home/sections/7vision/VisionSection';

export default function Home() {
  return (
    <main className={styles.mainContent}>
      <Hero />
      
      <section id="start" className={styles.section}>
        <Start />
      </section>

      {/* Success Stories section removed - moved to tribify.ai */}

      <FAQ />

      <section id="tribes" className={styles.section}>
        <TribesSection />
      </section>

      <section id="pricing" className={styles.section}>
        <Pricing />
      </section>

      <section id="token" className={styles.section}>
        <TokenSection />
      </section>

      <section id="team" className={styles.section}>
        <Team />
      </section>

      <section id="roadmap" className={styles.section}>
        <VisionSection />
      </section>

      <section id="media" className={styles.section}>
        <MediaSection />
      </section>
    </main>
  );
} 