import { MessageCircle, Phone } from "lucide-react";
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
    <div className="primary-text fixed inset-0 flex w-full flex-col items-center justify-center bg-black/40 px-2">
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-lg bg-neutral-50 px-6 py-3 shadow-lg"
      >
        <p>Bagi sebarang pertanyaan, sila hubungi</p>
        <div className="my-6 flex w-full flex-col items-center gap-4 text-lg font-semibold">
          <div className="flex w-full items-center">
            <p className="w-3/5 text-start">Mohd Zin</p>
            <div className="flex w-2/5 justify-end gap-6">
              <a href="tel:+60148357418" className="">
                <Phone />
              </a>
              <a href="https://wa.me/60148357418" target="blank" className="">
                <MessageCircle />
              </a>
            </div>
          </div>
          <div className="flex w-full items-center">
            <p className="w-3/5 text-start">Kak Na</p>
            <div className="flex w-2/5 justify-end gap-6">
              <a href="tel:+601110995401" className="">
                <Phone />
              </a>
              <a href="https://wa.me/601110995401" target="blank" className="">
                <MessageCircle />
              </a>
            </div>
          </div>
          <div className="flex w-full items-center">
            <p className="w-3/5 text-start">Aidil</p>
            <div className="flex w-2/5 justify-end gap-6">
              <a href="tel:+601117821968" className="">
                <Phone />
              </a>
              <a href="https://wa.me/601117821968" target="blank" className="">
                <MessageCircle />
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 cursor-pointer text-3xl"
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
