import React, { useState, useRef, useCallback, useEffect } from "react";

import Logo from "./Logo";
import svgs from "../helpers/svgs";

import Button from "./Button";
import Image from "next/image";
import CloseIcon from "@/assets/close-icon.png";
import { handleSignIn } from "@/helpers/handleSignIn";
import { useFocus } from "@/context/FocusContext"; // Import the FocusContext

const Navbar = () => {
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const buttonRef: any = useRef(null);
  const { focusInput } = useFocus();

  const LandingMenuItems = [
    {
      label: `Careers`,
      href: `https://www.linkedin.com/company/boostio-ai/`,
    },
    {
      label: `FAQ`,
      href: `/faq`,
    },
  ];

  const handleClickOutside = (event: { target: any }) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setUserMenuIsOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const handleGetContacted = () => {
    focusInput();
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
      <div className="flex flex-row items-center justify-between text-gray-200">
        {LandingMenuItems.map((item, index) => (
          <a
            key={index}
            target={item.href === "Careers" ? "_blank" : "_self"}
            rel="noreferrer"
            href={item.href}
            className="lg:mt-4 lg:pr-6"
          >
            {item.label}
          </a>
        ))}
        <div className="mt-2">
          <Button onClick={handleGetContacted}>Contact Us</Button>
        </div>
      </div>
    </div>
  );

  const BurguerMenu = () => {
    return (
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 rounded-md text-white"
          onClick={toggleMenu}
          aria-controls="mobile-menu"
        >
          {svgs.burguerMenuIcon}
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
            <Button
              onClick={handleGetContacted}
              className="text-gray-200 underline mt-4"
            >
              Contact Us
            </Button>
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
        <div className="flex flex-row items-center justify-between lg:justify-between lg:px-16 xl:px-36 px-4 py-2">
          <div className="pl-2">
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
    [userMenuIsOpen, isMobileMenuOpen, BurgerMenuItem, BurguerMenu, TabItems]
  );

  return renderContent();
};

export default Navbar;
