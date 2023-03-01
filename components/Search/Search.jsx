import React, { useState } from 'react';
import { FaSistrix } from 'react-icons/fa';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div className="flex items-center p-3 bg-primary text-white h-16 mx-6 rounded-lg space-x-4">
        <FaSistrix className="text-2xl" />
        <input
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          type="text"
          className="bg-transparent text-white placeholder:text-white w-full h-full   focus:outline-none"
          placeholder="Search for your favorite song"
        />
      </div>

      <div
        className={`${
          isOpen ? 'relative' : 'hidden'
        } mt-5 bg-black/30 backdrop-blur-md h-full w-full  z-50 mx-6 rounded-lg`}
      >
        <div className="h-80 bg-accent "></div>
      </div>
    </section>
  );
};

export default Search;
