import React, { useEffect, useRef, useState } from 'react';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';
import ArtistCard from '../ArtistCard/ArtistCard';
import { motion, useInView } from 'framer-motion';

const HomeArtistSec = () => {
  const [data, setData] = useState();
  const { state } = useMusicData();

  const artistRef = useRef(null);
  const isInView = useInView(artistRef);

  useEffect(() => {
    fetch('/api/getArtists')
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setData(data?.data);
        }
      });
  }, []);

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

  const animateArtist = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <section className="space-y-8 px-8 my-20">
      <h2 className="text-white font-bold text-4xl pb-5">
        Featured <span className="text-primary"> Artists</span>
      </h2>
      <motion.div
        ref={artistRef}
        variants={container}
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
      >
        {data?.map((d) => (
          <motion.div
            key={d._id}
            initial={{ scale: 0 }}
            variants={animateArtist}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <ArtistCard data={d} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HomeArtistSec;
