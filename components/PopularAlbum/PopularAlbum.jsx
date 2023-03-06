import React, { useEffect, useRef, useState } from 'react';
import AlbumCard from '../AlbumCard/AlbumCard';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { useMusicData } from '../../Contexts/MusicProvider/MusicProvider';

const PopularAlbum = () => {
  const [data, setData] = useState();
  const { state } = useMusicData(); // data form global state

  const albumRef = useRef(null); //animation refs
  const isInView = useInView(albumRef);

  useEffect(() => {
    fetch('/api/getAlbum')
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
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const animateCard = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="my-14 px-8 hidden lg:block">
      <h2 className="text-white font-bold text-4xl pb-8">
        Popular <span className="text-primary">Albums</span>
      </h2>
      <motion.div
        ref={albumRef}
        variants={container}
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-3 gap-3"
      >
        {state?.albumData &&
          state?.albumData?.slice(1, 7).map((d) => (
            <motion.div key={d._id} variants={animateCard}>
              <AlbumCard data={d} />
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default PopularAlbum;
