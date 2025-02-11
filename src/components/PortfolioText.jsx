import { useEffect, useRef } from "react";

const PortfolioText = () => {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const yearRef = useRef(null);

  useEffect(() => {
    // Iterate over each letter and apply animation
    lettersRef.current.forEach((letter, index) => {
      if (letter) {
        const animationDelay = index * 0.2; // Delay between letters
        letter.style.transition = `transform 1s ease ${animationDelay}s`;
        letter.style.transform = `translateX(${index * 20}px)`; // Dynamic move to the right
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden rounded-xl border-5 border-gray-900 bg-gradient-to-r from-red-500 via-green-500 to-blue-500"
    >
      <h1 className="font-accent h-full w-full text-7xl text-white md:text-[12rem]">
        {/* Individual letters */}
        {Array.from("Portfolio").map((char, index) => (
          <span
            key={index}
            ref={(el) => (lettersRef.current[index] = el)}
            className="absolute"
            style={{
              right: "0px", // Initial position
              position: "relative", // Ensures proper placement
            }}
          >
            {char}
          </span>
        ))}

        {/* Year display */}
        <span
          ref={yearRef}
          className="absolute bottom-0 left-0 block text-white md:text-9xl"
        >
          2025
        </span>
      </h1>
    </div>
  );
};

export default PortfolioText;
