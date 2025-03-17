import { MessageCircle, Phone } from "lucide-react";
import Title from "./Title";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.8,
      }}
      className="primary-text mt-8 mb-24 flex flex-col items-center px-9"
    >
      <Title title="Hubungi Kami" />
      <p className="secondary-text">Bagi sebarang pertanyaan, sila hubungi</p>
      <div className="my-8 flex w-full flex-col items-center gap-4 font-semibold">
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
    </motion.div>
  );
};

export default Contact;
