import Link from 'next/link';
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Player from '../Player/Player';
import { motion } from 'framer-motion';
import { BsFillHouseFill } from 'react-icons/bs';
import { SiCoronaengine } from 'react-icons/si';
import {
  RiAlbumFill,
  RiGpsFill,
  RiMenu3Fill,
  RiChatUploadFill,
} from 'react-icons/ri';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const pages = [
    {
      id: 1,
      name: 'home',
      route: '/',
      icon: <BsFillHouseFill />,
    },
    {
      id: 2,
      name: 'genres',
      route: '/genres',
      icon: <SiCoronaengine />,
    },
    {
      id: 3,
      name: 'albums',
      route: '/albums',
      icon: <RiAlbumFill />,
    },
    {
      id: 4,
      name: 'uploadSong',
      route: '/upload-songs',
      icon: <RiChatUploadFill />,
    },
  ];

  const style = {
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/asset/team-bg.png')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="drawer drawer-mobile bg-accent ">
        <input id="sideBar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/*  <!---------------------------- Page content here ------------------------------------> */}
          {children}
          <Footer />
          <label
            htmlFor="sideBar"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="z-50">
          <label htmlFor="sideBar" className="drawer-overlay"></label>

          <motion.ul
            animate={{ width: isOpen ? '230px' : '80px' }}
            className=" w-60 bg-[#07070aef] backdrop-blur-md  h-screen text-white pt-6"
          >
            <li className="text-white flex items-center justify-between  space-x-3 px-2 mb-8">
              <motion.div
                className={`${
                  isOpen ? 'flex ' : 'hidden'
                }  text-white items-center space-x-3`}
              >
                <span className="text-3xl text-primary">
                  <RiGpsFill />
                </span>
                <p className="text-3xl font-bold">Audit</p>
              </motion.div>
              <p
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl cursor-pointer"
              >
                <RiMenu3Fill />
              </p>
            </li>
            {/* <!----------------------------- Sidebar content here ------------------------------> */}
            {pages.map((page) => (
              <li>
                <Link key={page.id} href={page.route}>
                  <div className="py-3 text-white w-full capitalize  flex space-x-4 px-3 transition-all duration-75 ease-linear hover:bg-gradient-to-r from-[rgba(25,110,237,0.3)] to-transparent hover:border-l-4 border-primary">
                    <span className="text-2xl">{page.icon}</span>
                    <motion.p
                      animate={{
                        opacity: isOpen ? '1' : '0',
                        scale: isOpen ? [0, 1.1, 1] : [1, 0],
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 70,
                      }}
                      className="font-bold"
                    >
                      {page.name}
                    </motion.p>
                  </div>
                </Link>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      <Player />
    </>
  );
};

export default Layout;
