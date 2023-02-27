import React from 'react';

const Hero = ({ img }) => {
  return (
    <section
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${
          img ? img : '/assets/hero.jpg'
        })`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="h-80 w-full relative"
    >
      <div className="h-48 w-full absolute bottom-0 bg-gradient-to-t from-[#13131a] to-transparent "></div>
    </section>
  );
};

export default Hero;
