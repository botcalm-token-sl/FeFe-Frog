import { useState, useEffect } from "react";
import { SectionRefs } from "../types/MainLayoutTypes"; 
import Logo from "../assets/images/FefeFrog Logo.png";


interface NavbarProps {
  sectionRefs: SectionRefs;
}

const Navbar: React.FC<NavbarProps> = ({ sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (section: string) => {
    setIsOpen(false);

    
    const sectionKey = section.toLowerCase() as keyof SectionRefs;

    if (sectionRefs[sectionKey] && sectionRefs[sectionKey].current) {
      sectionRefs[sectionKey].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex max-w-[1920px] mx-auto justify-center">
      <nav
        className={`fixed w-full z-50 transition-all max-w-[1920px] ${
          isScrolled
            ? "bg-[#FFFFFF]/20 backdrop-blur-sm shadow-md"
            : "bg-[#FFFFFF]/40"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-3 mx-auto lg:px-12">
          {/* Logo */}
          <div className="flex items-center 2xl:ml-[120px]">
            <img
              src={Logo}
              alt="Fefe Frog"
              className="w-[85px] h-[24px] md:w-[178px] md:h-[50px]"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden 2xl:space-x-[48px] text-black font-WinterMinieRegular lg:flex lg:text-[17px] xl:text-[20px] lg:space-x-[32px]">
            {["home", "about", "features", "tokenomics", "roadmap"].map(
              (item) => (
                <li
                  key={item}
                  className="uppercase cursor-pointer hover:scale-105"
                  onClick={() => handleScrollToSection(item)}
                >
                  {item}
                </li>
              )
            )}
          </ul>

          {/* Signup Button (Desktop) */}
          <div className="2xl:mr-[120px]">
            <button className="hidden px-9 py-1 text-black transition bg-[#FFDA42] border-4 border-black rounded-xl shadow-md font-WinterMinieRegular lg:block hover:scale-105 lg:text-[16px] xl:text-[20px]">
              SIGNUP
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center lg:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-[33px] h-[22px] md:w-[40px] md:h-[29px]"
              viewBox="0 0 33 22"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
            >
              <line x1="1" y1="2" x2="32" y2="2" strokeLinecap="round" />
              <line x1="1" y1="11" x2="32" y2="11" strokeLinecap="round" />
              <line x1="1" y1="20" x2="32" y2="20" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 w-full shadow-md bg-[#FFFFFF]/20 backdrop-blur-sm lg:hidden top-full">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {["home", "about", "features", "tokenomics", "roadmap"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-lg text-black uppercase cursor-pointer font-WinterMinieRegular hover:scale-105"
                    onClick={() => handleScrollToSection(item)}
                  >
                    {item}
                  </li>
                )
              )}
              <button className="px-6 py-2 text-black transition bg-[#FFDA42] border-4 border-black rounded-xl shadow-md font-WinterMinieBold hover:scale-105">
                SIGNUP
              </button>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
