import { SiGooglemaps } from "react-icons/si";
import { motion } from "framer-motion";

import Title from "./Title";
import { FaWaze } from "react-icons/fa6";

const Location = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.8,
      }}
      className="primary-text my-4 flex w-full flex-col items-center bg-[#fff6f6] px-9 pb-8"
    >
      <Title title="Lokasi" />
      <div className="space-y-4">
        <p>NO. 241, BLOK 9, FELDA PERASU, 18300 GUA MUSANG, KELANTAN</p>
        <div className="flex justify-center gap-2 sm:gap-4">
          <a
            className="flex w-36 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#A75F5F] px-4 py-2 text-white transition-colors duration-300 hover:bg-[#b86969] sm:w-40 sm:text-lg"
            href="https://maps.app.goo.gl/WeCnhFnC6RKoU3ZP7"
            target="_blank"
          >
            <SiGooglemaps />
            Google Map
          </a>
          <a
            className="flex w-36 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#A75F5F] px-4 py-2 text-white transition-colors duration-300 hover:bg-[#b86969] sm:w-40 sm:text-lg"
            href="https://waze.com/ul/hw2befvjc5"
            target="_blank"
          >
            <FaWaze />
            Waze
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Location;
