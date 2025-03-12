import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";

type GuestbookModalProps = {
  isOpen: boolean;
  onClose: () => void;
  fetchWishes: () => void;
};

type Wish = {
  name: string;
  message: string;
};

const GuestbookModal: React.FC<GuestbookModalProps> = ({
  isOpen,
  onClose,
  fetchWishes,
}) => {
  const modalRef = useRef<HTMLDivElement>();
  const successRef = useRef();
  const [loading, setLoading] = useState(false);
  const [wishData, setWishData] = useState({
    name: "",
    message: "",
  });

  const { name, message } = wishData;
  const [wish, setWish] = useState<Wish[]>([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const submissionData = {
      name,
      message,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/wishes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
      if (response.ok) {
        successRef.current.style.display = "block";
        setLoading(false);
        const data = await response.json();
        console.log(data);
        setWish((prevWish) => [submissionData, ...prevWish]);
        setWishData({ name: "", message: "" });
        fetchWishes();
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (e) => {
    setWishData((prevWishData) => ({
      ...prevWishData,
      [e.target.name]: e.target.value,
    }));
  };

  const ok = () => {
    successRef.current.style.display = "none";
    onClose();
  };

  return (
    <div
      className={`primary-text fixed ${isOpen && "z-30"} inset-0 flex w-full flex-col items-center justify-center bg-black/40 px-2`}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-lg bg-slate-50 p-6 shadow-lg"
      >
        <div className="relative w-full rounded-lg p-6">
          <h5 className="mb-4 text-center text-2xl font-bold"> Ucapan</h5>
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-2 text-3xl"
          >
            <IoClose />
          </button>
          <form onSubmit={handleSubmit}>
            <label className="pr mb-1 block text-start" htmlFor="name">
              Nama{" "}
              <input
                required
                className="mb-3 w-full rounded-xl bg-slate-100 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-amber-400 focus:outline-none"
                type="text"
                name="name"
                placeholder="Nama anda"
                value={name}
                onChange={handleChange}
              />
            </label>

            <label className="pr mb-1 block text-start" htmlFor="message">
              Ucapan
            </label>
            <textarea
              required
              className="mb-3 w-full rounded-xl bg-slate-100 px-4 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-amber-400 focus:outline-none"
              name="message"
              placeholder="Ucapan anda "
              value={message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="button wedding-primary">
              {loading ? (
                <div className="flex items-center gap-2">
                  <p className="pr">Menghantar..</p>
                </div>
              ) : (
                "Hantar"
              )}
            </button>
          </form>
          <div
            ref={successRef}
            className="fixed top-0 left-0 bg-black/80"
            style={{ display: "none", height: "100vh", width: "100%" }}
          >
            <div className="m-[50vh] mx-auto flex max-w-[450px] translate-y-[-50%] flex-col items-center rounded-xl bg-[f4f4f4] bg-white p-4 text-center">
              <p className="my-2 text-4xl text-green-700">
                <FaRegCheckCircle />
              </p>
              <p className="my-2">Terima kasih untuk ucapan anda 😁</p>
              <button onClick={ok} className="button btn-secondary mt-2">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestbookModal;
