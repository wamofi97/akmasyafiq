import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { GiLoveSong } from "react-icons/gi";

import Song from "./Song";
import { useState } from "react";
import ContactModal from "./ContactModal";

const Navigation = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const openLocationModal = () => {
    setIsLocationModalOpen(true);
  };

  const closeLocationModal = () => {
    setIsLocationModalOpen(false);
  };

  return (
    <div className="fixed bottom-0 flex w-full max-w-[700px] items-center justify-evenly bg-pink-100 py-4">
      <button onClick={openContactModal} className="flex items-center">
        <IoIosCall size={30} />
        Contact
      </button>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />

      <button onClick={openLocationModal} className="flex items-center">
        <FaLocationDot size={30} />
        Location
      </button>
      <button className="flex items-center">
        <GiLoveSong size={30} />
        Song
      </button>
      <Song />
    </div>
  );
};

export default Navigation;
