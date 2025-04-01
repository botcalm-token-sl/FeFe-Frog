import FooterBg from "../assets/images/FooterBgDeck.png";
import FooterBgMob from "../assets/images/FooterBgMob2.png";
import FooterGifFrog from "../assets/images/FooterFrogGif.gif";
import FooterHelicopterGif from "../assets/images/RedHelicopterGif.gif";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto flex flex-col justify-center items-center h-auto relative mt-[70px]">
      <div className="relative w-full">
        {/* Background Images */}
        <img
          src={FooterBg}
          alt="bgFooter"
          className="hidden object-cover w-full h-auto md:flex"
        />
        <img
          src={FooterBgMob}
          alt="bgFooter"
          className="flex object-cover w-full h-auto md:hidden"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#47A4CF] bg-opacity-10 ">
          <div className="flex flex-row items-center justify-between w-full h-auto px-5 md:px-10 xl:px-20">
            {/* Navigation Buttons */}
            <div className="flex flex-col">
              <ul className="space-y-6 text-[17px] text-black font-WinterMinieRegular xl:text-[20px] lg:space-y-[48px] 2xl:ml-[160px] 2xl:mt-[220px]">
                {["home", "about", "features", "tokenomics", "roadmap"].map(
                  (item) => (
                    <li
                      key={item}
                      className="uppercase transition-transform cursor-pointer hover:scale-105"
                      onClick={() => handleScrollToSection(item)}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Frog GIF */}
            <div className="flex justify-center">
              <img
                src={FooterGifFrog}
                alt="footerGif"
                className="w-[200px] h-[226px] md:w-[300px] md:h-[326px] lg:w-[400px] lg:h-[426px] xl:w-[500px] xl:h-[526px] 2xl:w-[619px] 2xl:h-[700px] object-contain"
              />
            </div>

            {/* Social Icons */}
            <div className="flex flex-col 2xl:mr-[180px] 2xl:mt-[190px]">
              <SocialIcon />
            </div>
          </div>
        </div>

        <div className="absolute 2xl:top-[144px]  2xl:left-[239px] left-[16px] top-0 xl:top-[20px] xl:left-[70px]">
          <img
            src={FooterHelicopterGif}
            alt="helicopterGif"
            className="2xl:w-[345px] 2xl:h-[120px] w-[115px] h-[40px] xl:w-[220px] xl:h-[80px]"
          />
        </div>
      </div>
    </div>
  );
}
