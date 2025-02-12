import { LuDot } from "react-icons/lu";
import ArrowDownShort from "../ui/ArrowDownShort";
import AvatarImg from "/avatarImg2.png";
import { useState, useEffect } from "react";

const Introduction = () => {
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
    <div className="ml-1 border-b border-gray-600 py-3 sm:mx-auto sm:max-w-[85rem] md:gap-3 md:pb-8">
      <div className="flex items-center justify-between gap-2 pb-5 md:gap-3">
        <p className="font-extrabold text-gray-900 text-left text-5xl lg:text-7xl">
          Introduction
        </p>
        <div className="flex items-center gap-1 md:gap-3">
          <p className="flex items-center rounded-xl bg-emerald-950 pr-3 text-[8px] font-semibold tracking-widest text-green-500 uppercase md:rounded-4xl md:pr-4 md:text-[11px]">
            <span className="inline-block pb-[1px] text-xl font-semibold md:h-5 md:w-5 md:pb-0.5 md:text-4xl md:tracking-tight">
              <LuDot className="md:h-5 md:w-5" />
            </span>
            Available for work
          </p>

          <ArrowDownShort />
        </div>
      </div>
      <div className="grid gap-4 rounded-3xl border border-gray-700 px-5 py-4 md:gap-0 md:px-10">
        <h2 className="text-2xl font-semibold text-gray-900 md:text-5xl">
          A Full-stack Developer
        </h2>
        <div className="flex flex-col items-center justify-between md:flex-row md:gap-5">
          <p className="text-wrap text-gray-600 text-lg">
            Hello 👋, I am Shreyansh Goel, a skilled Full Stack Developer with a
            passion for building efficient, scalable web applications. Alongside
            my development expertise, I am an avid competitive programming
            enthusiast, continually honing my problem-solving skills and
            algorithmic thinking.
          </p>

          <div
            className="mt-10 flex h-40 w-60 shrink-0 items-center justify-center overflow-visible rounded-3xl bg-gradient-to-t  from-gray-200 to-gray-300  transition-transform duration-700 ease-in-out md:mt-0 md:h-60 md:w-60 md:rounded-full "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className={`h-auto w-full  object-cover ease-in-out transition-transform duration-500 hover:scale-110 overflow-visible cursor-pointer ${
                isScaled ? "scale-110" : ""
              }`}
              src={AvatarImg}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
