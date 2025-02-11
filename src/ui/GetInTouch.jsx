import { ImLinkedin2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp, IoMdOpen } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import Title from "./Title";
import { GiSmartphone } from "react-icons/gi";

const GetInTouch = () => {
  return (
    <div className="flex flex-col items-center px-18 sm:px-14 md:px-1 py-6">
      <Title title="Get In Touch" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Email Card */}
        <div className="bg-gray-950 text-white p-6 rounded-3xl flex flex-col items-center shadow-lg w-full transition-all duration-500 hover:scale-107">
          <div className="flex justify-between w-full">
            <MdEmail size={45} />
            <button
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-md"
              onClick={() => {
                navigator.clipboard.writeText("03shreyanshgoel@gmail.com");
                toast(`✉️ Email Copied!`, { position: "bottom-right" });
              }}
            >
              <IoCopyOutline size={25} />
            </button>
          </div>
          <div className="mt-18 pt-4 border-t w-full text-center">
            <a
              href="mailto:03shreyanshgoel@gmail.com"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              03shreyanshgoel@gmail.com
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="bg-blue-700 text-white p-6 rounded-3xl flex flex-col items-center shadow-lg w-full transition-all duration-500 hover:scale-107">
          <div className="flex justify-between w-full">
            <ImLinkedin2 size={45} />
            <a
              className="bg-blue-800 hover:bg-blue-900 p-2 rounded-md"
              href="https://sa.linkedin.com/in/03shreyanshgoel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdOpen size={25} />
            </a>
          </div>
          <div className="mt-18 pt-4 border-t w-full text-center">
            <a
              href="https://sa.linkedin.com/in/03shreyanshgoel"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @03shreyanshgoel
            </a>
          </div>
        </div>

        {/* WhatsApp Card */}
        <div className="bg-green-600 text-white p-6 rounded-3xl flex flex-col items-center shadow-lg w-full transition-all duration-500 hover:scale-107">
          <div className="flex justify-between w-full">
            <IoLogoWhatsapp size={45} />
            <a
              className="bg-green-700 hover:bg-green-800 p-2 rounded-md"
              href="https://wa.me/918791202546"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GiSmartphone size={25} />
            </a>
          </div>
          <div className="mt-18 pt-4 border-t w-full text-center">
            <a
              href="https://wa.me/918791202546"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 8791202546
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
