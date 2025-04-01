import Cloud1 from "../../assets/images/Cloud01.png";
import Cloud2 from "../../assets/images/Cloud02.png";
import Flight from "../../assets/images/Flight.png";
import Frog from "../../assets/images/FrogGif.gif";
import Frog2 from "../../assets/images/FrogGif2.gif";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      // Mobile animations
      gsap.to(".cloud1", {
        x: "30vw", // Smaller distance
        duration: 6,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".cloud2", {
        x: "40vw",
        duration: 6,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      });
    });

    mm.add("(min-width: 769px) and (max-width: 1280px)", () => {
      // Tablet animations
      gsap.to(".cloud1", {
        x: "10vw",
        duration: 4,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".cloud2", {
        x: "15vw",
        duration: 7,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      });
    });

    mm.add("(min-width: 1281px)", () => {
      // Desktop animations
      gsap.to(".cloud1", {
        x: "10vw",
        duration: 4,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".cloud2", {
        x: "20vw",
        duration: 10,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => mm.revert(); // Clean up when component unmounts
  }, []);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      // Mobile animation
      gsap.fromTo(
        ".flight",
        { x: "100vw" }, // Start from off-screen right
        {
          x: "-90vw", // Move off-screen left
          duration: 5, // Speed for mobile
          ease: "linear",
          repeat: -1,
        }
      );
    });

    mm.add("(min-width: 769px) and (max-width: 1280px)", () => {
      // Tablet animation
      gsap.fromTo(
        ".flight",
        { x: "100vw" },
        {
          x: "-120vw",
          duration: 7, // Slower speed for tablets
          ease: "linear",
          repeat: -1,
        }
      );
    });

    mm.add("(min-width: 1281px)", () => {
      // Desktop animation
      gsap.fromTo(
        ".flight",
        { x: "120vw" },
        {
          x: "-150vw",
          duration: 10, // Slowest speed for large screens
          ease: "linear",
          repeat: -1,
        }
      );
    });

    return () => mm.revert(); // Clean up when component unmounts
  }, []);

  return (
    <div
      className="bg-[#47A4CF] w-full xl:h-[600px] max-w-[1920px] mx-auto relative flex flex-col  lg:h-[840px]  md:h-[900px] h-[800px]  2xl:h-[850px] "
      id="home"
    >
      {/* Clouds Cover */}
      <div className="absolute inset-0 flex flex-wrap items-center justify-center w-full h-auto">
        {/* Cloud 1 - Top Left */}
        <img
          src={Cloud2}
          alt="cloud2"
          className="2xl:w-[217px] 2xl:h-[159px] flex absolute cloud2 sm:top-[24%] sm:left-0 bottom-[40%] right-[-30%] md:w-[180px] md:h-[130px] w-[217px] h-[159px]"
        />

        {/* Cloud 2 - Top Right */}
        <img
          src={Cloud1}
          alt="cloud1"
          className="2xl:w-[217px] 2xl:h-[159px] hidden sm:flex absolute cloud1 sm:top-[0%] sm:right-[47%] md:w-[180px] md:h-[130px]"
        />

        {/* Cloud 3 - Middle Left */}
        <img
          src={Cloud2}
          alt="cloud2"
          className="2xl:w-[217px] 2xl:h-[159px] absolute cloud2 sm:left-[17%] sm:top-[40%] md:flex bottom-0 left-0 top-[25%] sm:hidden md:w-[180px] md:h-[130px] w-[217px] h-[159px]"
        />

        {/* Cloud 4 - Middle Right */}
        <img
          src={Cloud1}
          alt="cloud1"
          className="2xl:w-[217px] 2xl:h-[159px] hidden sm:flex absolute cloud1 sm:right-[4%] sm:top-[10%] md:w-[180px] md:h-[130px]"
        />

        {/* Cloud 5 - Bottom Left */}
        <img
          src={Cloud1}
          alt="cloud1"
          className="2xl:w-[217px] 2xl:h-[159px] absolute cloud1  sm:left-[7%] sm:top-[58%] right-[7%] bottom-[11%] md:w-[180px] md:h-[130px] w-[217px] h-[159px]"
        />

        {/* Cloud 6 - Bottom Right */}
        <img
          src={Cloud1}
          alt="cloud1"
          className="2xl:w-[217px] 2xl:h-[159px] absolute cloud1 sm:top-[44%] sm:right-[16%]  hidden sm:flex md:w-[180px] md:h-[130px]"
        />
      </div>

      {/* Other Contents */}
      <div className="absolute top-0 left-0 w-full h-auto bg-[#47A4CF] bg-opacity-10 flex flex-col items-center">
        {/* Flight */}
        <div className="z-10 flex w-full translate-y-2 2xl:ml-[180px] ml-[60px]">
          <img
            src={Flight}
            alt="flight"
            className="w-[217px] h-[100px] md:w-[390px] md:h-[150px] 2xl:w-[544px] 2xl:h-[250px] flight sm:w-[260px] sm:h-[120px]"
          />
        </div>

        {/* Title Text */}
        <div className="flex justify-center items-center font-WinterMinieRegular z-20 mt-[56px] md:-mt-2 lg:-mt-24 2xl:h-[230px]">
          <h1
            className="text-[80px] md:text-[140px] 2xl:text-[200px] font-bold bg-gradient-to-b from-[#FCC77A] via-[#F7AB44] to-[#F0931A] text-transparent bg-clip-text text-nowrap"
            style={{
              WebkitTextStroke: "2px black",
              WebkitTextFillColor: "transparent",
            }}
          >
            FeFe Frog
          </h1>
        </div>

        {/* Frog Section */}
        <div className="z-30 flex flex-col items-center w-full">
          <div className="flex justify-center z-30 -mt-[24px] lg:-mt-[80px] xl:-mt-[100px]">
            <img
              src={Frog}
              alt="frogif"
              className="w-[382px] h-[280px] md:w-[450px] md:h-[320px] lg:w-[450px] lg:h-[300px] 2xl:w-[633px] 2xl:h-[500px]"
            />
          </div>

          {/* Buy Button */}
          <div className="flex mt-[30px] 2xl:mt-[24px] z-50">
            <button className="text-black transition bg-[#FFDA42] border-4 border-black rounded-xl shadow-md font-WinterMinieRegular hover:scale-105 text-[20px] md:text-[36px] xl:text-[40px] w-[218px] h-[55px] md:w-[308px] md:h-[78px]">
              BUY NOW
            </button>
          </div>

          {/* Small Frog Image */}
          <div className="flex w-full  2xl:-translate-y-64  xl:-translate-y-44 ml-[3%] md:-translate-y-20">
            <img
              src={Frog2}
              alt="frogif2"
              className="w-[67px] h-[80px] md:w-[150px] md:h-[178px] sm:w-[100px] sm:h-[118px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
