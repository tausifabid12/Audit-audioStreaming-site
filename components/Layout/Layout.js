import Link from 'next/link';
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Player from '../Player/Player';
import { motion } from 'framer-motion';
import { BsFillHouseFill } from 'react-icons/bs';
import { SiCoronaengine } from 'react-icons/si';
import { RiAlbumFill, RiGpsFill, RiMenu3Fill } from 'react-icons/ri';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
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
  ];

  return (
    <>
      {/* <Navbar /> */}
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          {children}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="z-50">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <motion.ul
            animate={{ width: isOpen ? '230px' : '80px' }}
            className=" w-60 bg-black/30 backdrop-blur-md  h-screen text-white pt-6"
          >
            <li className="text-white flex items-center justify-between  space-x-3 px-2 mb-8">
              <motion.div
                // animate={{
                //   opacity: isOpen ? '1' : '0',
                //   scale: isOpen ? [0, 1.1, 1] : [1, 0],
                // }}
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
            {/* <!-- Sidebar content here --> */}
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
