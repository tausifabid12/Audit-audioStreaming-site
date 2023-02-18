import React from 'react';
import { FaArtstation, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <section
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/assets/footer.jpg')`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
      className="w-full h-80 relative grid place-content-center"
    >
      <div className="relative z-20  space-y-10">
        <h1 className="text-center text-5xl text-white">
          Explore Our Mobile Application
        </h1>
        <div className="space-x-7 flex justify-center ">
          <button className="btn btn-primary w-40 space-x-3">
            <span className="mr-2">
              <FaGooglePlay />
            </span>
            Google Play
          </button>
          <button className="btn btn-primary w-40">
            <span className="mr-2">
              <FaArtstation />
            </span>
            App Store
          </button>
        </div>
      </div>
      <div className="w-full h-80 bg-gradient-to-b absolute top-0 from-[rgba(19,19,26,1)] to-[rgba(19,19,26,0.1)]  z-10"></div>
    </section>
  );
};

export default Footer;
