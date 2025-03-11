import Title from "./Title";

const Guestbook = () => {
  return (
    <div className="my-8 flex flex-col items-center">
      <Title title="Ucapan" />
      <div
        className="bg mx-auto mb-4 max-w-96 overflow-y-auto"
        style={{ maxHeight: "300px" }}
      >
        {wishes &&
          wishes.map((wish, index) => {
            return (
              <div key={index} className="mx-auto">
                <p className="font-medium">{wish?.name}</p>
                <p className="text-sm font-light italic">{wish?.message}</p>
                <hr className="mx-auto my-4 h-1 w-full bg-neutral-500 opacity-5" />
              </div>
            );
          })}
      </div>
      <button className="button wedding-primary" onClick={openUcapan}>
        Hantar Ucapan
      </button>
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
