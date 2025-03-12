import { useEffect, useState } from "react";
import Title from "./Title";
import GuestbookModal from "./GuestbookModal";
import { motion } from "framer-motion";

type Wish = {
  name: string;
  message: string;
};

const Guestbook = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isGuestbookOpenModal, setIsGuestbookOpenModal] = useState(false);

  const openGuestbookModal = () => {
    setIsGuestbookOpenModal(true);
  };

  const closeGuestbookModal = () => {
    setIsGuestbookOpenModal(false);
  };

  const fetchWishes = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/wishes`);
      const data = await response.json();
      console.log(data);
      setWishes(data);
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.8,
      }}
      className="primary-text my-8 flex flex-col items-center"
    >
      <Title title="Ucapan" />
      <div className="mx-auto mb-4 max-h-[300px] w-full overflow-y-auto rounded-lg p-2">
        {wishes?.length === 0 && (
          <p className="text-center text-neutral-600">
            Belum ada ucapan. Jadi orang pertama yang beri ucapan.
          </p>
        )}
        {wishes &&
          wishes.map((wish, index) => {
            return (
              <div key={index} className="mx-auto">
                <p className="text-lg font-medium">{wish?.name}</p>
                <p className="font-light text-neutral-500 italic">
                  {wish?.message}
                </p>
                <hr className="mx-auto my-4 h-1 w-full text-neutral-100" />
              </div>
            );
          })}
      </div>

      <button
        onClick={openGuestbookModal}
        className="mt-2 flex items-center gap-2 rounded-lg bg-[#A75F5F] px-4 py-2 text-lg font-medium text-white"
      >
        Hantar Ucapan
      </button>

      <GuestbookModal
        isOpen={isGuestbookOpenModal}
        onClose={closeGuestbookModal}
        fetchWishes={fetchWishes}
      />
    </motion.div>
  );
};

export default Guestbook;
