import Title from "./Title";

const Guestbook = () => {
  return (
    <div className="my-8 flex flex-col items-center">
      <Title title="Ucapan" />
      <textarea
        className="mt-2 h-24 w-80 rounded-lg border p-2"
        placeholder="Write your message..."
      ></textarea>
      <button className="mt-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-800">
        Submit
      </button>
    </div>
  );
};

export default Guestbook;
