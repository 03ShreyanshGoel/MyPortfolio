import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { GrDocumentUser } from "react-icons/gr";

const Header = ({ active }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navItems = ["About Me", "Skills", "Projects"];

  const handleNavClick = (item, e) => {
    e.preventDefault();
    const id = item.toLowerCase().replace(" ", "-");
    const element = document.getElementById(id);

    if (element) {
      const offsetTop = window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-600 px-4 sm:mx-auto sm:max-w-[85rem]">
      {/* Main header section */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3 md:gap-5">
          <a
            href="#"
            className="logo-holder flex items-center font-extrabold text-4xl text-gray-900"
          >
            <div className="logo flex items-center justify-center text-white bg-black h-10 w-10 rounded-full text-xl">
              S
            </div>
            <span className="ml-2">Shreyansh</span>
          </a>
        </div>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10 text-lg md:text-xl">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`${
                      active === item.toLowerCase().replace(" ", "-")
                        ? "border-b-4 border-gray-900 pb-2 px-5"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <BsGithub
              title="My GitHub"
              size={24}
              className="cursor-pointer text-gray-800 hover:text-gray-950 md:h-9 md:w-9"
              onClick={() =>
                window.open("https://github.com/03ShreyanshGoel", "_blank")
              }
            />
            <span
              title="Download Resume"
              className="h-6 w-6 cursor-pointer rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-950 md:h-9 md:w-9"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/pdfs/Shreyansh Goel Resume.pdf";
                link.download = "Shreyansh Goel Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <GrDocumentUser className="text-white" />
            </span>
            {/* Mobile Menu Toggle */}
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h10"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden pb-3 flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-3 text-lg">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`${
                    active === item.toLowerCase().replace(" ", "-")
                      ? "border-b-4 border-gray-900 pb-2 px-5"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
