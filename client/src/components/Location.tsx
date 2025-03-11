import { SiGooglemaps } from "react-icons/si";
import { FaWaze } from "react-icons/fa";

import Title from "./Title";

const Location = () => {
  return (
    <div className="my-8 flex flex-col items-center">
      <Title title="Lokasi" />
      <p>NO. 241, BLOK 9, FELDA PERASU, 18300 GUA MUSANG, KELANTAN</p>
      <button className="flex items-center">
        <FaWaze />
        Waze
      </button>
      <button className="flex items-center">
        <SiGooglemaps />
        Google Map
      </button>
    </div>
  );
};

export default Location;
