import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const UpcomingCard = () => {
  return (
    <div className="p-3">
      <div>
        <img
          src="/assets/hero.jpg"
          className="w-full h-[200px] rounded-2xl"
          alt=""
        />
      </div>
      <div className="mt-4 px-2">
        <p className="flex items-center  text-sm text-gray-400">
          <FaMapMarkerAlt className="text-lg" />
          <span>NY, New world, Nowhere</span>
        </p>
        <h1 className="text-white font-bold text-lg">
          Whats Up Band is rinsing
        </h1>
      </div>
      <div className="flex items-center justify-between px-3 mt-3">
        <img src="/assets/user.jpg" className="w-10 h-10 rounded-full" alt="" />
        <button className="border bg-primary/10 rounded-lg border-none text-primary/80 px-2 py-1">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default UpcomingCard;
