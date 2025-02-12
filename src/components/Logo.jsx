import imgLogo from "../../logo.svg";

const Logo = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <img
        src={imgLogo}
        alt="logo"
        className="h-9 w-9 cursor-pointer rounded-full bg-gray-900 p-1"
        onClick={handleClick}
      />
      {/* <span>Portfolio Website</span> */}
    </>
  );
};

export default Logo;
