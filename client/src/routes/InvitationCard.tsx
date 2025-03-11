import { motion } from "framer-motion";
import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";
import Contact from "../components/Contact";
import Location from "../components/Location";
import Song from "../components/Song";
import Guestbook from "../components/Guestbook";
import Navigation from "../components/Navigation";

const InvitationCard = () => {
  return (
    <>
      <div className="absolute inset-0 mx-auto max-w-[700px] overflow-hidden">
        <motion.div
          className="absolute top-0 -left-[50%] z-50 h-full w-full bg-rose-900"
          initial={{ x: 0 }}
          animate={{ x: -1000 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 left-[50%] z-50 h-full w-full bg-rose-900"
          initial={{ x: 0 }}
          animate={{ x: 1000 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
      <div className="mx-auto flex max-w-[700px] flex-col items-center justify-center bg-slate-100 text-center">
        <h1 className="text-4xl font-bold">Walimatul Urus</h1>

        <EventDetails />
        <Navigation />

        <Countdown />

        <Location />

        <Guestbook />

        {/* <Song /> */}

        <Contact />
      </div>
    </>
  );
};

export default InvitationCard;
