import React, { useRef } from 'react';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import FlatMusicCard from '../FlatMusicCard/FlatMusicCard';
import { motion, useInView } from 'framer-motion';

const TradingSongs = () => {
  const { state } = useMusicData();
  const topSongRef = useRef(null);
  const isInView = useInView(topSongRef);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const animateSongCard = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="px-8 my-12">
      <h2 className="text-white font-bold text-4xl pb-5">
        Trading <span className="text-primary">This Week</span>
      </h2>
      <motion.div
        ref={topSongRef}
        variants={container}
        animate={isInView ? 'visible' : 'hidden'}
        className="grid col-span-1 lg:grid-cols-2 gap-4"
      >
        {state.songData &&
          state.songData.slice(0, 8).map((song) => (
            <motion.div
              key={song?._id}
              variants={animateSongCard}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <FlatMusicCard data={song} />
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default TradingSongs;
