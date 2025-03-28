import { motion } from "framer-motion";
import { useState } from "react";

const WelcomePage = ({
  isOpen,
  setIsModalOpen,
}: {
  isOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showCurtain, setShowCurtain] = useState(false);

  if (!isOpen) return null;

  const closeModal = () => {
    setShowCurtain(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 750);
  };

  return (
    <div className="relative mx-auto flex h-screen max-w-[700px] flex-col items-center justify-center overflow-hidden bg-white text-center">
      <div className="absolute hidden h-full w-full bg-[url('/background.webp')] bg-cover bg-center sm:block"></div>
      <div className="absolute h-full w-3/4 -translate-x-28 bg-[url('/background.webp')] bg-cover bg-left sm:hidden"></div>
      <div className="absolute h-full w-3/4 -translate-y-5 translate-x-28 bg-[url('/background.webp')] bg-cover bg-right sm:hidden"></div>
      <div className="absolute inset-0 mx-auto flex max-w-[500px] flex-col items-center justify-center px-4 text-center">
        <p className="cinzel accent-color text-xl font-bold tracking-[0.3em] uppercase">
          Walimatul Urus
        </p>
        <div className="my-8 flex flex-col items-center">
          <img src="/logo.png" alt="logo" className="my-4 w-32" />
          <h1 className="names primary-color text-4xl font-medium tracking-wider">
            Akma & Syafiq
          </h1>
        </div>
        <div className="primary-text flex items-center gap-6 text-xl uppercase">
          <div className="space-y-2">
            <hr />
            <p>Sabtu</p>
            <hr />
          </div>
          <div>
            <p>MEI</p>
            <p className="text-4xl">03</p>
            <p>2025</p>
          </div>
          <div className="space-y-2">
            <hr />
            <p>12.00 PM</p>
            <hr />
          </div>
        </div>
        <p className="crimson my-6 text-lg text-neutral-500 italic">
          “Dan segala sesuatu kami ciptakan berpasangan supaya kamu mengingati
          (kebesaran Allah).” [51:49]
        </p>
        <button
          onClick={closeModal}
          className="primary-text cursor-pointer rounded-lg bg-[#A75F5F] px-6 py-3 text-lg font-medium tracking-widest transition-colors duration-300 hover:bg-[#b86969]"
        >
          <p className="text-white">Buka</p>
        </button>
        <p className="accent-color primary-text my-4">#theperfectFiqforAkma</p>
      </div>

      {/* Curtain Effect */}
      {showCurtain && (
        <div>
          <motion.div
            className="absolute top-0 left-0 z-50 h-full w-full bg-[#a75f5f]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
