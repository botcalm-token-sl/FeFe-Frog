import Cloud1 from "../../assets/images/Cloud01.png";
import Cloud2 from "../../assets/images/Cloud02.png";
import FeatuerFrog from "../../assets/images/FeatureFrog.png";
import TunderGif from "../../assets/images/ThunderCloudGif.gif";
import FlyFrog from "../../assets/images/FlyFrog.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/effect-utils";
import "../../index.css";

export default function Features() {
  return (
    <div
      className="relative w-full h-auto bg-[#47A4CF] max-w-[1920px] overflow-hidden  mt-[70px] mx-auto"
      id="features"
    >
      {/* Clouds Container */}
      <div className="absolute inset-0 flex w-full h-full">
        {/* Cloud 1 - Top Left */}
        <img
          src={Cloud1}
          alt="cloud1"
          className="absolute w-[104px] h-[76px] 2xl:w-[217px] 2xl:h-[159px] bottom-0 xl:left-[39px] xl:top-[260px] cloud1 top-[60px] right-[25px] md:w-[180px] md:h-[130px]"
        />

        {/* Cloud 2 - Top Right */}
        <img
          src={Cloud2}
          alt="cloud2"
          className="absolute  w-[104px] h-[76px] 2xl:w-[217px] 2xl:h-[159px] xl:bottom-0 xl:left-[433px] xl:top-[148px] cloud2 left-[20px] top-[260px] md:w-[180px] md:h-[130px]"
        />

        {/* Cloud 3 - Middle Left */}
        <img
          src={Cloud1}
          alt="cloud1"
          className="absolute w-[104px] h-[76px] 2xl:w-[217px] 2xl:h-[159px] 2xl:bottom-0 xl:left-[203px] xl:top-[603px] cloud1 top-[110px] left-[70px] md:w-[180px] md:h-[130px]"
        />

        {/* Cloud 4 - Middle Right */}
        <img
          src={Cloud2}
          alt="cloud2"
          className="absolute w-[104px] h-[76px] 2xl:w-[217px] 2xl:h-[159px] bottom-0 right-[479px] top-[79px] cloud2 hidden md:flex md:w-[180px] md:h-[130px]"
        />

        {/* Cloud 5 - Bottom Left */}
        <img
          src={Cloud1}
          alt="cloud1"
          className="absolute w-[104px] h-[76px] 2xl:w-[217px] 2xl:h-[159px] bottom-0 right-[211px] top-[307px] cloud1 hidden md:flex md:w-[180px] md:h-[130px]"
        />

        {/* Cloud 6 - Bottom Right */}
        <img
          src={Cloud1}
          alt="cloud1"
          className="absolute w-[104px] h-[76px] 2xl:w-[217px] 2xl:h-[159px] bottom-0 right-[-40px] top-[531px] cloud1 hidden md:flex md:w-[180px] md:h-[130px]"
        />
        {/* Cloud 7 - Bottom Right */}
        <img
          src={Cloud2}
          alt="cloud2"
          className="absolute w-[104px] h-[76px] 2xl:w-[217px] 2xl:h-[159px] bottom-0 right-[342px] top-[623px] cloud2 hidden md:flex md:w-[180px] md:h-[130px]"
        />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center  font-WinterMinieRegular lg:mt-[88px] ">
            <h1
              className="text-[40px] z-10 2xl:text-[80px] md:text-[60px] font-bold bg-gradient-to-b from-[#FCC77A] via-[#F7AB44] to-[#F0931A] text-transparent bg-clip-text text-nowrap"
              style={{
                WebkitTextStroke: "1.5px black",
                WebkitTextFillColor: "transparent",
              }}
            >
              Features
            </h1>
          </div>

          {/* Center Image */}
          <div className="flex items-center justify-center w-full">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={500}
              slidesPerView={1}
              className="w-full max-w-[628px] h-auto custom-swiper"
            >
              <SwiperSlide>
                <div className="flex mt-[30px]  w-[628px] h-[482px]">
                  <img
                    src={FeatuerFrog}
                    alt="featurefrog"
                    className="w-[628px] h-[482px] "
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex mt-[30px]  w-[628px] h-[482px] ">
                  <img
                    src={FeatuerFrog}
                    alt="featurefrog"
                    className="w-[628px] h-[482px]"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col w-full  lg:flex-row lg:mt-[159px] ">
          <div className=" xl:ml-[44px] -ml-6  translate-y-[137px] xl:translate-y-0  z-0 md:translate-x-10 xl:translate-x-0 lg:translate-y-14">
            <img
              src={TunderGif}
              alt="thunderGif"
              className="xl:w-[156px] xl:h-[206px] w-[75px] h-[100px]"
            />
          </div>

          <div className="flex flex-col items-center justify-center text-center  lg:items-start lg:text-left xl:ml-[40px] ml-0 z-20">
            {/* Title */}
            <h1
              className="text-[40px] 2xl:text-[80px] md:text-[60px] font-bold bg-gradient-to-b from-[#FCC77A] via-[#F7AB44] to-[#F0931A] text-transparent bg-clip-text font-WinterMinieRegular z-20"
              style={{
                WebkitTextStroke: "1.5px black",
                WebkitTextFillColor: "transparent",
              }}
            >
              Join the Adventure
            </h1>

            {/* Description */}
            <div className="text-[16px] 2xl:text-[20px] font-BubblegumSansRegular text-black  max-w-[700px] text-center   mt-[20px] lg:text-left  w-full">
              <div className="flex lg:hidden">
                <p>
                  Ready to take the leap with Fefe Frog? <p></p>Let’s dive into
                  the future together and explore the endless <p></p>{" "}
                  possibilities of this skydiving-inspired token. Join our
                  community and become a part of the most thrilling crypto
                  adventure yet!
                </p>
              </div>
              <div className="hidden lg:flex">
                <p>
                  Ready to take the leap with Fefe Frog? <p></p> Let’s dive into
                  the future together and explore the endless possibilities of
                  thisskydiving-inspired <p></p> token. Join our community and
                  become a part of the most thrilling crypto adventure yet!
                </p>
              </div>
            </div>
            {/* Button */}
            <button className="mt-[40px] text-black transition bg-[#FFDA42] border-4 border-black rounded-xl shadow-md font-WinterMinieRegular hover:scale-105 text-[20px] md:text-[28px] 2xl:text-[40px] w-[320px] h-[55px] 2xl:w-[512px] 2xl:h-[78px]">
              BUY FEFE FROG NOW
            </button>
          </div>

          <div className="flex  2xl:ml-[210px] ml-0 justify-center items-center  mt-[40px] lg:ml-[50px] lg:mt-0">
            <img
              src={FlyFrog}
              alt="flyFrog"
              className="2xl:w-[500px] 2xl:h-[257px] lg:w-[291px] lg:h-[150px]  md:w-[400px] md:h-[220px] w-[291px] h-[150px] xl:w-[400px] xl:h-[220px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
