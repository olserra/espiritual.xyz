import React, { useState, useRef, useCallback, useEffect } from "react";

import Logo from "./Logo";
import { RiMenu4Line } from "react-icons/ri";

import Button from "./Button";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Arrow } from "./Arrow";
import CloseIcon from "@/assets/close-icon.png";
import { handleSignIn } from "@/helpers/handleSignIn";

const Navbar = () => {
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [avatarImg, setAvatarImg] = useState("");
  const buttonRef: any = useRef(null);
  const { data: session } = useSession();

  useEffect(() => {
    session?.user?.image && setAvatarImg(session.user.image);
  }, [session]);

  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signOut({
      callbackUrl: "/",
    });
  };

  const handleClickOutside = (event: { target: any }) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setUserMenuIsOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const TabItems = () => (
    <div className="flex lg:flex-row pr-4 lg:pl-52">
      <div className="flex flex-row items-center text-gray-200">
        {session ? (
          <div
            className="flex flex-row justify-center items-center lg:ml-8 hover:cursor-pointer"
            onClick={toggleMenu}
          >
            <Image
              src={avatarImg}
              alt="user icon"
              width={30}
              height={20}
              className="max-h-[30px] max-w-[30px] mr-4 mt-4 rounded-2xl"
            />
            <Arrow direction="down" className="lg:mt-6" />
          </div>
        ) : (
          <div className="mt-3">
            <Button onClick={handleSignIn}>Get started</Button>
          </div>
        )}
      </div>
    </div>
  );

  const BurguerMenu = () => {
    return (
      <div className="block lg:hidden mr-2 mt-2">
        <button onClick={toggleMenu} aria-controls="mobile-menu">
          <RiMenu4Line className="w-5 h-5" />
        </button>
      </div>
    );
  };

  const BurgerMenuItem = () => {
    return (
      <div
        className="fixed top-0 left-0 w-full bg-black p-2 text-gray-200 border-t border-gray-700"
        ref={buttonRef}
      >
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col text-sm gap-4 p-4 text-gray-200">
            {session ? (
              <button
                onClick={handleSignOut}
                className="text-gray-200 underline mt-4 text-start"
              >
                Sign out
              </button>
            ) : (
              <button
                onClick={handleSignIn}
                className="text-gray-200 underline mt-4"
              >
                Get started
              </button>
            )}
          </div>
          <div className="p-4" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src={CloseIcon}
              alt="Close Icon"
              className="cursor-pointer"
              height={15}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderContent = useCallback(
    () => (
      <>
        <div className="flex flex-row items-center justify-between lg:justify-between lg:px-16 xl:px-36 px-6 py-2">
          <div className="">
            <Logo />
          </div>
          <div className="cursor-pointer md:pl-0 lg:hidden">
            <BurguerMenu />
          </div>
          <div className="hidden lg:block">
            <TabItems />
          </div>
        </div>
        <div className="border-gray-400">
          {isMobileMenuOpen ? <BurgerMenuItem /> : null}
        </div>
      </>
    ),
    [
      session,
      userMenuIsOpen,
      isMobileMenuOpen,
      BurgerMenuItem,
      BurguerMenu,
      TabItems,
    ]
  );

  return renderContent();
};

export default Navbar;
