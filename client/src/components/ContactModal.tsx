import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex w-full flex-col items-center justify-center bg-black/50">
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-lg bg-pink-200 p-6 shadow-lg"
      >
        <h5>RSVP</h5>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 text-3xl"
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
