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
        className="primary-text mt-6 mb-4 flex min-h-[85vh] w-full flex-col justify-evenly px-9 text-center"
      >
        {/* <Title title="Walimatul Urus" /> */}
        <img
          className="mx-auto my-4 w-60"
          src="bismillah.png"
          alt="bismillah"
        />
        <motion.p className="secondary-text">
          Assalamualaikum & Salam Sejahtera
        </motion.p>
        <motion.div className="names my-1 space-y-2 text-xl font-medium sm:text-2xl">
          <div className="">
            <h2>Mohd Zin bin Hassan</h2>
            <h6>&</h6>
            <h2>Hazlina binti Jusoh</h2>
          </div>
          <hr className="accent-color mx-8" />
          <div className="">
            <h2>Suhaimi bin Mohamed Noor</h2>
            <h6>&</h6>
            <h2>Nor Asmawati binti Mat Ali</h2>
          </div>
        </motion.div>

        <motion.div className="secondary-text">
          <p>
            Dengan segala hormatnya kami ingin menjemput Dato’/ Datin/ Tuan/
            Puan/ Encik/ Cik seisi keluarga ke majlis perkahwinan puteri kami
          </p>
        </motion.div>
        <motion.div className="names my-2 rounded-lg border-3 border-dotted border-[#cbb79f] px-2 py-4 text-2xl font-semibold tracking-wider sm:text-3xl">
          {/* <hr className="accent-color mx-2" /> */}
          <div className="">
            <h2>Norakmal binti Suhaimi</h2>
          </div>
          <h6>&</h6>
          <div className="">
            <h2>Mohd Syafiq Azfar bin Rizaman</h2>
          </div>
          {/* <hr className="accent-color mx-2" /> */}
        </motion.div>
        <motion.div className="space-y-2">
          <div>
            <p className="secondary-text">Pada Tarikh</p>
            <p className="font-medium uppercase">3 Mei 2025</p>
          </div>
          <div>
            <p className="secondary-text">Bertempat Di</p>
            <p className="font-medium uppercase">
              NO. 241, BLOK 9, FELDA PERASU, 18300 GUA MUSANG, KELANTAN
            </p>
          </div>
          <div>
            <p className="secondary-text">Masa</p>
            <p className="font-medium uppercase">12.00PM - 5.00PM</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventDetails;
