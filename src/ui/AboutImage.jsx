import AboutImg from "../../src/assets/myBestImg.jpg";
const AboutImage = () => {
  return (
    <div
      className="w-full cursor-grab rounded-3xl bg-gray-500 bg-cover bg-center bg-no-repeat px-7 py-4 grayscale filter"
      style={{ backgroundImage: `url(${AboutImg})` }}
      loading="lazy"
    >
      <div className="flex h-full flex-col gap-50 text-white md:justify-between">
        <h3 className="w-60 text-6xl">
          <span className="block text-3xl font-extralight">Hello,</span>
          My name is
          <span className="decoration-italic underline decoration-pink-400 decoration-wavy decoration-2 ">
            <span> Shreyansh</span>
          </span>
        </h3>
        <p className="text-right text-2xl text-balance text-gray-300">
          I consider myself a hardworking problem solver who constantly seeks
          new skills and explores new technologies to deliver high-quality
          solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutImage;
