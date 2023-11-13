import React, { useState } from "react";
import Cookies from "js-cookie";
import Button from "./Button";

const PrivacyModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleAccept = () => {
    Cookies.set("privacyChoice", "accepted");
    setIsOpen(false);
  };

  const handleReject = () => {
    Cookies.set("privacyChoice", "rejected");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-300 p-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">We value your privacy</h2>
        <p className="mb-4">
          We use cookies to enhance your browsing experience, serve personalized
          ads or content, and analyze our traffic. By clicking "Accept All", you
          consent to our use of cookies.
        </p>
        <div className="flex justify-start">
          <Button
            onClick={handleReject}
            className="px-4 py-2 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 mr-2"
          >
            Reject All
          </Button>
          <Button
            onClick={handleAccept}
            className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-700"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
