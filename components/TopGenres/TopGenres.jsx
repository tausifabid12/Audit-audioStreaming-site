import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TopGenres = () => {
  const topGenresRef = useRef(null);
  const isInView = useInView(topGenresRef);
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

  const animateCat = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="px-8 my-20">
      <h2 className="text-white font-bold text-4xl pb-12">
        Top <span className="text-primary"> Genres</span>
      </h2>
      <motion.div
        ref={topGenresRef}
        variants={container}
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-6 grid-rows-2 gap-4 h-96"
      >
        <motion.div
          variants={animateCat}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('/assets/rock.jpg')`,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
          className="col-span-2 row-span-2 rounded-2xl flex items-end p-5"
        >
          <div className="text-white font-semibold ">
            <h5 className="text-2xl">Rock Music</h5>
            <p className="text-sm">10 Songs | 5 Albums</p>
          </div>
        </motion.div>
        <motion.div
          variants={animateCat}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url('/assets/classic-music.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="rounded-2xl flex items-end p-5"
        >
          <div className="text-white font-semibold ">
            <h5 className="text-lg">Classical </h5>
            <p className="text-xs">10 Songs | 5 Albums</p>
          </div>
        </motion.div>
        <motion.div
          variants={animateCat}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('/assets/hiphop.jpg')`,
            backgroundPosition: 'left',
            backgroundSize: 'cover',
          }}
          className="col-span-2  rounded-2xl flex items-end p-5"
        >
          <div className="text-white font-semibold ">
            <h5 className="text-2xl">HipHop Music</h5>
            <p className="text-sm">10 Songs | 5 Albums</p>
          </div>
        </motion.div>
        <motion.div
          variants={animateCat}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('/assets/solo-0.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="row-span-2  rounded-2xl flex items-end p-5"
        >
          <div className="text-white font-semibold ">
            <h5 className="text-2xl">Solo Music</h5>
            <p className="text-sm">10 Songs | 5 Albums</p>
          </div>
        </motion.div>
        <motion.div
          variants={animateCat}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('/assets/metal.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="col-span-2  rounded-2xl flex items-end p-5"
        >
          <div className="text-white font-semibold ">
            <h5 className="text-2xl">Metal Music</h5>
            <p className="text-sm">10 Songs | 5 Albums</p>
          </div>
        </motion.div>
        <motion.div
          variants={animateCat}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('/assets/romantic.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="rounded-2xl flex items-end p-5"
        >
          <div className="text-white font-semibold ">
            <h5 className="text-lg">Romantic </h5>
            <p className="text-sm">10 Songs | 5 Albums</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TopGenres;
