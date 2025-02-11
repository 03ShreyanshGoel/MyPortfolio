import { useState, useEffect } from "react";
import AvatorImg from "../../public/avatarImg.png";

const HelloMe = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowText(true);
          setTimeout(() => {
            setShowText(false);
          }, 3000);
        } else {
          setShowText(false);
        }
      },
      { rootMargin: "0px 0px -40% 0px" }
    );
    observer.observe(document.querySelector(".hello-me"));
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    setShowText(true);
    setTimeout(() => {
      setShowText(false);
    }, 3000);
  };
  return (
    <div
      className="hello-me relative flex h-full overflow-hidden rounded-2xl justify-center items-center"
      onClick={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
    >
      <img
        src={AvatorImg}
        className="rounded-full h-80 md:h-60 lg:h-80 w-auto cursor-pointer overflow-visible  bg-gradient-to-t from-gray-100 to-gray-200 transition-transform duration-700 ease-in-out"
        alt=""
      />
      {showText && (
        <span className="absolute  left-18 sm:left-36 lg:left-18 top-[20%] sm:top-[30%] md:top[0%] lg:top-[25%]  -translate-x-1/2 transform rounded-lg bg-black px-3 py-1 text-xl text-white transition-opacity duration-600 ">
          Hello there !
        </span>
      )}
    </div>
  );
};

export default HelloMe;
