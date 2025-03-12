import { useState } from "react";
import WelcomePage from "./WelcomePage";
import InvitationCard from "./InvitationCard";

const WeddingLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      <WelcomePage isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      {!isModalOpen && (
        <div className="">
          <InvitationCard />
        </div>
      )}
    </div>
  );
};

export default WeddingLanding;
