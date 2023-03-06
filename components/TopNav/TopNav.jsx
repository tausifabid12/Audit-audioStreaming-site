import { useScroll } from 'framer-motion';
import React, { useState } from 'react';
import { useAuth } from '../../Contexts/AuthProvider/AuthProvider';
import LoginModal from '../LogInModal/LoginModal';
import SignUpModal from '../SignUpModal/SignUpModal';

const TopNav = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSingUpOpen, setIsSingUpOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading, logOut } = useAuth();
  console.log(user?.uid);

  if (loading) {
    return loading;
  }

  return (
    <>
      <div className="navbar bg-primary rounded-lg text-white overflow-hidden relative">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search For Your Favorite Tracks"
            className="pl-8 w-full bg-transparent placeholder:text-white outline-none border-none ring-0"
          />
        </div>
        <div className="flex-none">
          {user?.uid ? (
            <>
              <div className="">
                {/* <img
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  src="/assets/user.jpg"
                  className="w-12 h-12 rounded-full cursor-pointer"
                  alt=""
                />
                <div
                  className={`${
                    isMenuOpen ? 'absolute' : 'hidden'
                  } absolute -bottom-40 right-0 z-[100000] border border-red-500`}
                >
                  <ul className="menu bg-base-100 w-56 rounded-box ">
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                    <li>
                      <a>Item 3</a>
                    </li>
                  </ul>
                </div> */}
                <button
                  onClick={logOut}
                  className="bg-primary px-3 py-1 rounded-lg hover:bg-black/20 backdrop-blur-xl"
                >
                  LogOut
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex pl-8 lg:pl-0">
                <button
                  onClick={() => {
                    setIsLoginOpen(!isLoginOpen);
                    setIsSingUpOpen(false);
                  }}
                  className="bg-primary px-1 lg:px-3 py-1 rounded-lg hover:bg-black/20 backdrop-blur-xl"
                >
                  LogIn
                </button>
                <button
                  onClick={() => {
                    setIsSingUpOpen(!isSingUpOpen);
                    setIsLoginOpen(false);
                  }}
                  className=" bg-primary px-1 lg:px-3 py-1  rounded-lg hover:bg-black/20 backdrop-blur-xl"
                >
                  SignUp
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <LoginModal isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
      <SignUpModal
        setIsSingUpOpen={setIsSingUpOpen}
        isSingUpOpen={isSingUpOpen}
      />
    </>
  );
};

export default TopNav;
