import Sunlight from "../../assets/images/sun light.png";
import AboutCloud from "../../assets/images/TextCloud.png";
import FrogAboutGif from "../../assets/images/FrogAboutGif.gif";
import FlatClod from "../../assets/images/FlatCloud.png";
import BirdGif from "../../assets/images/BridGif.gif";
import CloudGif from "../../assets/images/CloudGif.gif";

export default function About() {
  return (
    <div
      className=" bg-[#47A4CF] w-full h-auto max-w-[1920px] mx-auto flex flex-col  items-center justify-between"
      id="about"
    >
      <div className="flex flex-col items-center 2xl:mt-[160px] w-full relative  ">
        {/* Text */}
        <div className="flex font-WinterMinieRegular">
          <h1
            className="text-[40px] 2xl:text-[80px] md:text-[60px] font-bold bg-gradient-to-b from-[#FCC77A] via-[#F7AB44] to-[#F0931A] text-transparent bg-clip-text text-nowrap"
            style={{
              WebkitTextStroke: "1.5px black",
              WebkitTextFillColor: "transparent",
            }}
          >
            About FeFe Frog
          </h1>
        </div>

        {/* other content */}
        <div className="flex flex-col lg:flex-row   w-full max-w-[1920px] mx-auto md:mt-[64px]  justify-between">
          {/* Image & Centered Text */}
          <div className="relative flex justify-center w-full max-w-[1920px] 2xl:translate-x-[11%] lg:translate-x-[2%] xl:translate-x-[7%] z-10 ">
            {/* Image */}
            <img
              src={AboutCloud}
              alt="about"
              className="w-[382px] h-[250px] md:w-[500px] md:h-[320px]  2xl:w-[652px] 2xl:h-[428px] "
            />

            {/* Centered Text */}
            <div
              className="absolute w-[312px] md:w-[400px] 2xl:w-[463px] md:top-[44%] left-1/2 lg:top-[37%] 
                    transform -translate-x-1/2 md:-translate-y-3 text-center  translate-y-[94px] lg:-translate-y-[%] "
            >
              <h2 className="text-[16px] 2xl:text-[20px] font-BubblegumSansRegular text-black leading-relaxed">
                FeFe Frog is a fun, community-driven token inspired by
                adventure. Earn tokens through staking and enjoy exclusive
                rewards and experiences. Join us for a sky-high journey where
                the fun never stops!
              </h2>
            </div>
          </div>

          <div className="absolute z-0 flex items-center justify-center  left-[20%] transform -translate-x-1/2 md:left-[0%] md:-translate-x-0 translate-y-60 md:translate-y-72 lg:translate-y-0 lg:left-[40%] 2xl:translate-x-36 2xl:-translate-y-10 xl:translate-x-4 sm:translate-y-[38%]">
            <img
              src={BirdGif}
              alt="Birdgif"
              className="flex md:w-[350px] md:h-[255px] lg:w-[400px] lg:h-[300px] 2xl:w-[500px] 2xl:h-[364px]"
            />
          </div>

          {/* Frog GIF & Cloud */}
          <div className="flex flex-col   2xl:h-[470px]  w-full justify-between lg:-translate-y-[10%]">
            {/* GIF */}
            <div className="z-20 flex justify-center ">
              <img
                src={FrogAboutGif}
                alt="aboutgif"
                className="w-[114px] h-[217px] 2xl:w-[209px] 2xl:h-[400px] 2xl:translate-y-[9px] translate-y-[60px] md:w-[150px] md:h-[285px]"
              />
            </div>

            {/* Cloud */}
            <div className="flex items-center justify-center  2xl:-translate-y-[110px] z-10 w-full ">
              <img
                src={FlatClod}
                alt="flatcloud"
                className="w-[382px] h-[92px] 2xl:w-[703px] 2xl:h-[171px] md:w-[400px] md:h-[125px]"
              />
            </div>
          </div>
        </div>
        {/* Sunlight */}

        <div className="absolute right-0 2xl:-top-60 ">
          <img
            src={Sunlight}
            alt="sunlight"
            className="hidden lg:flex lg:w-[330px] lg:h-[400px] 2xl:w-auto 2xl:h-auto xl:w-[450px] "
          />
        </div>
      </div>
      {/* Cloud gif */}
      <div className="absolute w-full 2xl:mt-[350px] mt-[700px] md:mt-[800px] lg:mt-[300px] xl:mt-[260px] -z-1">
        <img
          src={CloudGif}
          alt="bgCloud"
          className="w-full h-full mix-blend-screen "
        />
      </div>
    </div>
  );
}
