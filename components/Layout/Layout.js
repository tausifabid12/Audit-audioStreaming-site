import Link from 'next/link';
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Player from '../Player/Player';
import { motion } from 'framer-motion';
import { BsFillHouseFill } from 'react-icons/bs';
import { SiCoronaengine } from 'react-icons/si';
import {
  VscSignIn,
  VscSignOut,
  VscCloudUpload,
  VscFileSubmodule,
  VscHome,
} from 'react-icons/vsc';
import {
  RiAlbumFill,
  RiGpsFill,
  RiMenu3Fill,
  RiChatUploadFill,
} from 'react-icons/ri';
import Footer from '../Footer/Footer';
import { FaTimesCircle } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSmall, SetIsSmall] = useState(false);
  const pages = [
    {
      id: 1,
      name: 'home',
      route: '/',
      icon: <VscHome />,
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
      icon: <VscFileSubmodule />,
    },
    {
      id: 4,
      name: 'uploadSong',
      route: '/upload-songs',
      icon: <VscCloudUpload />,
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
      <div className="drawer drawer-mobile bg-accent overflow-hidden">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          {children}
          <Footer />
        </div>
        <motion.div
          animate={{ width: isOpen ? '230px' : '75px' }}
          className="drawer-side"
        >
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className=" w-60 bg-[#07070aef] backdrop-blur-md  h-screen text-white pt-6">
            {/* <!-- Sidebar content here --> */}
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
                className="hidden lg:block text-2xl cursor-pointer pr-2"
              >
                <RiMenu3Fill />
              </p>
              <label
                htmlFor="my-drawer-2"
                className="text-white drawer-button lg:hidden pr-2"
              >
                <FaTimesCircle size={25} />
              </label>
            </li>
            {/* side menus */}
            {pages.map((page) => (
              <li key={page.id}>
                <Link href={page.route}>
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
          </ul>
        </motion.div>
      </div>

      <Player />
    </>
  );
};

export default Layout;
