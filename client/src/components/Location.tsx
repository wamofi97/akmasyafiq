import { SiGooglemaps } from "react-icons/si";
import { motion } from "framer-motion";

import Title from "./Title";

const Location = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.8,
      }}
      className="primary-text my-8 flex flex-col items-center"
    >
      <Title title="Lokasi" />
      <p className="my-4 text-lg">
        NO. 241, BLOK 9, FELDA PERASU, 18300 GUA MUSANG, KELANTAN
      </p>

      <a
        className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#A75F5F] px-4 py-2 text-lg font-medium text-white transition-colors duration-300 hover:bg-[#b86969]"
        href="https://maps.app.goo.gl/WeCnhFnC6RKoU3ZP7"
        target="_blank"
      >
        <SiGooglemaps />
        Google Map
      </a>
    </motion.div>
  );
};

export default Location;
