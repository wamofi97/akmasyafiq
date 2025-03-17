import { motion } from "framer-motion";
import Title from "./Title";

const Aturcara = () => {
  const aturcara = [
    {
      time: "12:00PM",
      activity: "Majlis mula",
    },
    {
      time: "1:30PM",
      activity: "Ketibaan Pengantin",
    },
    {
      time: "5:00PM",
      activity: "Majlis tamat",
    },
  ];
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
      <Title title="Aturcara Majlis" />
      <div className="space-y-2">
        {aturcara.map((item) => (
          <div key={item.time}>
            <p className="secondary-text">{item.time}</p>
            <p className="font-medium">{item.activity}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Aturcara;
