import React, { useState, useRef, useCallback, useEffect } from "react";

import Logo from "./Logo";

import Button from "./Button";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const buttonRef: any = useRef(null);
  const { data: session } = useSession();

  const scrollToWaitlist = () => {
    // Scroll to the Waitlist section
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   signOut({
  //     callbackUrl: "/",
  //   });
  // };

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

  const renderContent = useCallback(
    () => (
      <>
        <div className="flex items-center justify-between lg:px-2 px-4 py-2 lg:px-32">
          <div className="pt-4 pl-2 md:pl-0">
            <Logo />
          </div>
          <div className="hidden md:flex">
            <Button
              onClick={scrollToWaitlist}
              className="lg:mt-4 bg-white text-black border border-black mr-2"
            >
              I'm a company
            </Button>
            <Button
              onClick={scrollToWaitlist}
              className="lg:mt-4 bg-black text-white"
            >
              I'm a developer
            </Button>
          </div>
        </div>
        <div className="border-gray-400"></div>
      </>
    ),
    [session, userMenuIsOpen, isMobileMenuOpen]
  );

  return renderContent();
};

export default Navbar;
