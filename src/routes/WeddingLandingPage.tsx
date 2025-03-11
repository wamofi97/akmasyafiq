import { useState } from "react";
import WelcomePage from "./WelcomePage";
import InvitationCard from "./InvitationCard";

const WeddingLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-svh w-full overflow-hidden bg-amber-200">
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
