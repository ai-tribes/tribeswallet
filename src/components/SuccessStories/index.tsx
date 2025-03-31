import { useRef, useState } from 'react';
import { SuccessStory, successStories } from './data';
import StoryCard from './StoryCard';
import styles from './Stories.module.css';
import { motion } from 'framer-motion';

export default function SuccessStories() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (gridRef.current?.offsetLeft || 0));
    setScrollLeft(gridRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (gridRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (gridRef.current) {
      gridRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="bg-black py-24 sm:py-32" id="success-stories">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Creator Success Stories</h2>
          <p className={styles.sectionDescription}>
            See how creators, communities, and brands are using Tribify.AI to tokenize their presence 
            and build thriving communities around their content.
          </p>
        </motion.div>

        <div className={styles.carouselContainer}>
          <div 
            ref={gridRef}
            className={styles.carouselTrack}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            {successStories.map((story: SuccessStory, index: number) => (
              <StoryCard key={`${story.name}-${index}`} {...story} />
            ))}
            
            {/* Add first three stories again for seamless loop */}
            {successStories.slice(0, 3).map((story: SuccessStory, index: number) => (
              <StoryCard key={`${story.name}-repeat-${index}`} {...story} />
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className={styles.statsHighlight}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>200+</span>
              <span className={styles.statLabel}>Active Communities</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>$40M+</span>
              <span className={styles.statLabel}>Token Market Cap</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>15K+</span>
              <span className={styles.statLabel}>Token Holders</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 