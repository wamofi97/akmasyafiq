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
      className="primary-text mt-8 mb-24 flex flex-col items-center"
    >
      <Title title="Hubungi Kami" />
      <p className="text-neutral-600">Bagi sebarang pertanyaan, sila hubungi</p>
      <div className="my-8 flex w-full flex-col items-center gap-4 text-lg font-semibold">
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
    </motion.div>
  );
};

export default Contact;
