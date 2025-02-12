import { useState, useEffect } from "react";
import AvatarImg from "/avatarImg.png";

const HelloMe = () => {
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsScaled(true);
        } else {
          setIsScaled(false);
        }
      },
      { rootMargin: "0px 0px -40% 0px" }
    );

    const element = document.querySelector(".hello-me");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsScaled(true);
  };

  const handleMouseLeave = () => {
    setIsScaled(false);
  };

  return (
    <div
      className="hello-me relative flex h-80 md:h-60 lg:h-100 w-auto overflow-visible justify-center items-center bg-gradient-to-t from-gray-200 to-gray-300 rounded-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={AvatarImg}
        className={`rounded-full h-80 md:h-60 lg:h-100 w-auto cursor-pointer object-cover transition-transform duration-500 ease-in-out overflow-visible ${
          isScaled ? "scale-110" : ""
        }`}
        alt="avatar"
      />
      {isScaled && (
        <span className="absolute left-1/6 top-0 transform -translate-x-1/2 rounded-lg bg-black px-3 py-1 text-xl text-white transition-opacity duration-600">
          Hello there!
        </span>
      )}
    </div>
  );
};

export default HelloMe;
