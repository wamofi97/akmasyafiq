import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node | null)
      ) {
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
    <div className="primary-text fixed inset-0 flex w-full flex-col items-center justify-end bg-black/40 px-2">
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.25 }}
        ref={modalRef}
        className="relative mb-20 w-full max-w-md rounded-lg bg-neutral-50 p-6 shadow-lg"
      >
        <p className="pt-4">Bagi sebarang pertanyaan, sila hubungi</p>
        <div className="my-6 flex w-full flex-col items-center gap-4 text-lg font-semibold">
          <div className="flex w-full items-center">
            <p className="w-3/5 text-start">Mohd Zin</p>
            <div className="flex w-2/5 justify-end gap-6">
              <a
                href="tel:+60148357418"
                className="transition-colors duration-300 hover:text-[#d17b7b]"
              >
                <Phone />
              </a>
              <a
                href="https://wa.me/60148357418"
                target="blank"
                className="transition-colors duration-300 hover:text-[#d17b7b]"
              >
                <MessageCircle />
              </a>
            </div>
          </div>
          <div className="flex w-full items-center">
            <p className="w-3/5 text-start">Kak Na</p>
            <div className="flex w-2/5 justify-end gap-6">
              <a
                href="tel:+601110995401"
                className="transition-colors duration-300 hover:text-[#d17b7b]"
              >
                <Phone />
              </a>
              <a
                href="https://wa.me/601110995401"
                target="blank"
                className="transition-colors duration-300 hover:text-[#d17b7b]"
              >
                <MessageCircle />
              </a>
            </div>
          </div>
          <div className="flex w-full items-center">
            <p className="w-3/5 text-start">Aidil</p>
            <div className="flex w-2/5 justify-end gap-6">
              <a
                href="tel:+601117821968"
                className="transition-colors duration-300 hover:text-[#d17b7b]"
              >
                <Phone />
              </a>
              <a
                href="https://wa.me/601117821968"
                target="blank"
                className="transition-colors duration-300 hover:text-[#d17b7b]"
              >
                <MessageCircle />
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 cursor-pointer text-3xl transition-colors duration-300 hover:text-[#d17b7b]"
        >
          <IoClose />
        </button>
      </motion.div>
    </div>
  );
};

export default ContactModal;
