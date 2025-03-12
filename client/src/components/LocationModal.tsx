import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import Title from "./Title";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LocationModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
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
    <div className="primary-text fixed inset-0 flex w-full flex-col items-center justify-center bg-black/40 px-2">
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-lg bg-neutral-50 px-6 py-3 shadow-lg"
      >
        <Title title="Lokasi" />
        <p className="my-4 text-lg">
          NO. 241, BLOK 9, FELDA PERASU, 18300 GUA MUSANG, KELANTAN
        </p>

        <a
          className="mx-auto flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#A75F5F] px-4 py-2 text-lg font-medium text-white transition-colors duration-300 hover:bg-[#b86969]"
          href="https://maps.app.goo.gl/WeCnhFnC6RKoU3ZP7"
          target="_blank"
        >
          <SiGooglemaps />
          Google Map
        </a>
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

export default LocationModal;
