import { motion } from "framer-motion";
import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";
import Contact from "../components/Contact";
import Location from "../components/Location";
import Guestbook from "../components/Guestbook";
import Navigation from "../components/Navigation";
import ParticlesBackground from "../components/ParticlesBackground";

const InvitationCard = () => {
  return (
    <div className="relative mx-auto max-w-[700px]">
      <motion.div
        className="absolute top-0 left-0 z-50 h-full w-full bg-rose-900"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        className="absolute top-0 left-0 z-50 h-full w-full bg-rose-900"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        style={{ transformOrigin: "right" }}
      />

      {/* <div className="fixed top-0 left-0 h-screen w-full bg-[url('/background.png')] bg-cover bg-center"></div> */}
      {/* <motion.div
        className="absolute top-0 left-[50%] z-50 h-full w-full bg-rose-900"
        initial={{ x: 0 }}
        animate={{ x: 1000 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      /> */}
      <div className="mx-auto flex flex-col items-center justify-center px-2 text-center">
        <ParticlesBackground />
        <EventDetails />

        <Navigation />

        <Countdown />

        <p className="crimson my-8 rounded-sm bg-[#f0ebe4] p-6 text-neutral-600 italic">
          “Semoga Allah memberi barakah kepadamu dan keberkahan atas pernikahan
          kamu, dan mengumpulkan kalian berdua dalam kebaikan.”
        </p>

        <Location />

        <Guestbook />

        {/* <Song /> */}

        <Contact />
      </div>
    </div>
  );
};

export default InvitationCard;
