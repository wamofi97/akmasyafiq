import Title from "./Title";
import { motion } from "framer-motion";

const EventDetails = () => {
  const container = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 1000 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        delayChildren: 1,
        duration: 2.5,
      },
    },
  };

  return (
    <div>
      {/* <div className="absolute h-screen w-full bg-[url('/background.png')] bg-cover bg-center"></div> */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="primary-text my-8 flex min-h-[75vh] w-full flex-col justify-evenly px-4 text-center"
      >
        <Title title="Walimatul Urus" />
        <motion.p className="text-neutral-600">
          Assalamualaikum & Salam Sejahtera, kami
        </motion.p>
        <motion.div>
          <div className="primary-text my-3 font-bold">
            <h2>MOHD ZIN BIN HASAN</h2>
            <h6>&</h6>
            <h2>HAZLINA BINTI JUSOH</h2>
          </div>
          <hr className="accent-color mx-8" />
          <div className="primary-text my-3 font-bold">
            <h2>SUHAIMI BIN MOHAMED NOOR</h2>
            <h6>&</h6>
            <h2>NOR ASMAWATI BINTI MAT ALI</h2>
          </div>
        </motion.div>

        <motion.div className="text-neutral-600">
          <p>
            Dengan segala hormatnya kami ingin menjemput
            Dato’/Datin/Tuan/Puan/Encik/Cik untuk menyerikan majlis perkahwinan
            puteri kami
          </p>
        </motion.div>
        <motion.div className="names my-4 text-4xl font-bold tracking-widest">
          <hr className="accent-color mx-2" />
          <div className="mt-3">
            <h2>Norakmal binti Suhaimi</h2>
          </div>
          <h6>&</h6>
          <div className="mb-4">
            <h2>Mohd Syafiq Azfar bin Rizaman</h2>
          </div>
          <hr className="accent-color mx-2" />
        </motion.div>
        <motion.div>
          <p className="text-neutral-600">Pada Tarikh</p>
          <p className="mb-4 text-lg font-medium uppercase">3 Mei 2025</p>
          <p className="text-neutral-600">Bertempat Di</p>
          <p className="mb-4 text-lg font-medium uppercase">
            NO. 241, BLOK 9, FELDA PERASU, 18300 GUA MUSANG, KELANTAN
          </p>
          <p className="text-neutral-600">Masa</p>
          <p className="text-lg font-medium uppercase">12.00PM - 5.00PM</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventDetails;
