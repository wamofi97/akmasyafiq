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
    }, 1500);
  };

  return (
    <div className="relative mx-auto flex h-screen max-w-[700px] flex-col items-center justify-center overflow-hidden bg-white text-center">
      <div className="relative h-full w-full bg-[url('/background.png')] bg-cover bg-center">
        <div className="absolute inset-0 mx-auto flex max-w-[500px] flex-col items-center justify-center space-y-4 text-center">
          <p className="text-2xl">Walimatul Urus</p>
          <img src="/logo.png" alt="logo" className="my-12 w-40" />
          <h1 className="text-4xl font-medium">Akma & Syafiq</h1>
          <div>
            <p className="text-lg">Sabtu, May 3, 2025</p>
          </div>
          <p className="my-8 text-neutral-500">
            “Dan segala sesuatu kami ciptakan berpasangan supaya kamu mengingati
            (kebesaran Allah).” [51:49]
          </p>
          <button
            onClick={closeModal}
            className="rounded-lg bg-pink-200 px-6 py-3 text-lg font-medium shadow-md hover:bg-pink-300"
          >
            Enter
          </button>
          <p>#theperfectFiqforAkma</p>
        </div>
      </div>

      {/* Curtain Effect */}
      {showCurtain && (
        <div>
          <motion.div
            className="absolute top-0 left-0 z-50 h-full w-full bg-gray-900"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
