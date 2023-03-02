import React, { useEffect, useRef } from 'react';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import MusicCard from '../MusicCard/MusicCard';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';

const NewSongSec = () => {
  const { state } = useMusicData();

  const ref = useRef(null);
  const isInView = useInView(ref);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const animateCard = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: [0, 1.1, 1],
    },
  };

  return (
    <div className="px-7 w-full relative z-20 pt-12">
      <h2 className="text-white font-bold text-4xl pb-5">
        New To <span className="text-primary">Audit</span>
      </h2>
      <motion.div
        ref={ref}
        variants={container}
        animate={isInView ? 'visible' : 'hidden'}
        className="h-full grid grid-cols-2 lg:grid-cols-5 gap-5 "
      >
        {state?.songData.length &&
          state?.songData.slice(0, 5).map((data) => (
            <motion.div variants={animateCard} key={data?._id}>
              <MusicCard data={data} />
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default NewSongSec;
