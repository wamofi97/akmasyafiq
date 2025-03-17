import { motion } from "framer-motion";
import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";
import Contact from "../components/Contact";
import Location from "../components/Location";
import Guestbook from "../components/Guestbook";
import Navigation from "../components/Navigation";

import ParticlesBackground from "../components/ParticlesBackground";
import Aturcara from "../components/Aturcara";

const InvitationCard = () => {
  return (
    <div className="relative mx-auto max-w-[700px] overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 z-50 h-full w-full bg-[#a75f5f]"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        className="absolute top-0 left-0 z-50 h-full w-full bg-[#a75f5f]"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        style={{ transformOrigin: "right" }}
      />

      {/* <div className="fixed top-0 left-0 h-screen w-full bg-[url('/background.webp')] bg-cover bg-center"></div> */}
      {/* <motion.div
        className="absolute top-0 left-[50%] z-50 h-full w-full bg-rose-900"
        initial={{ x: 0 }}
        animate={{ x: 1000 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        /> */}
      <div className="mx-auto flex flex-col items-center justify-center text-center">
        <ParticlesBackground />
        <div className="z-10">
          <img
            className="fixed -top-16 -left-28 w-80 opacity-90 sm:absolute sm:-top-10"
            src="/top-left.webp"
          />
          <img
            className="fixed -top-16 -right-28 w-80 opacity-90 sm:absolute sm:-top-10"
            src="/top-right.webp"
          />
          <img
            className="fixed bottom-20 -left-36 w-60 rotate-12 opacity-80 sm:absolute sm:bottom-0"
            src="/bottom-left.webp"
          />
          <img
            className="fixed -right-36 bottom-20 w-60 -rotate-12 opacity-80 sm:absolute sm:bottom-0"
            src="/bottom-right.webp"
          />
        </div>
        <EventDetails />

        <Aturcara />

        <Navigation />

        <Countdown />

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
          }}
          className="crimson relative mx-9 my-4 mt-8 rounded-lg border-2 border-dotted border-[#cbb79f] bg-[#fff2f2] p-6 text-neutral-600 italic"
        >
          “Semoga Allah memberi barakah kepadamu dan keberkahan atas pernikahan
          kamu, dan mengumpulkan kalian berdua dalam kebaikan.”
          <img
            src="/small-top-right.webp"
            className="absolute -top-6 -right-4 w-20"
          />
          <img
            src="/small-bottom-left.webp"
            className="absolute -bottom-6 -left-4 w-20"
          />
        </motion.p>

        <Location />

        <Guestbook />

        {/* <Song /> */}

        <Contact />
      </div>
    </div>
  );
};

export default InvitationCard;
