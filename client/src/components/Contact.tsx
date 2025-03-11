import { MessageCircle, Phone } from "lucide-react";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="my-8 flex flex-col items-center">
      <Title title="Hubungi Kami" />
      <p>Bagi sebarang pertanyaan, sila hubungi</p>
      <div className="my-8 flex w-full flex-col items-center gap-4">
        <div className="flex w-full items-center">
          <p className="w-3/5 text-start font-medium">Mohd Zin</p>
          <div className="flex w-2/5 justify-end gap-3 sm:gap-6">
            <a href="tel:+60148357418" className="">
              <Phone />
            </a>
            <a href="https://wa.me/60148357418" target="blank" className="">
              <MessageCircle />
            </a>
          </div>
        </div>
        <div className="flex w-full items-center">
          <p className="w-3/5 text-start font-medium">Kak Na</p>
          <div className="flex w-2/5 justify-end gap-3 sm:gap-6">
            <a href="tel:+601110995401" className="">
              <Phone />
            </a>
            <a href="https://wa.me/601110995401" target="blank" className="">
              <MessageCircle />
            </a>
          </div>
        </div>
        <div className="flex w-full items-center">
          <p className="w-3/5 text-start font-medium">Aidil</p>
          <div className="flex w-2/5 justify-end gap-3 sm:gap-6">
            <a href="tel:+601117821968" className="">
              <Phone />
            </a>
            <a href="https://wa.me/601117821968" target="blank" className="">
              <MessageCircle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
