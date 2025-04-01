import RoadMapCard from "@/components/RoadMapCard";
import RoadmapFrog from "../../assets/images/RoadmapFrog.png";
import HelicopterGif from "../../assets/images/HelicopterGif.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";

export default function Roadmap() {
  const roadmapData = [
    {
      title: "Jump Start",
      content: [
        "Token Launch",
        "Build a vibrant community",
        "Marketing campaigns to spread the word",
      ],
    },
    {
      title: "Growth Phase",
      content: [
        "Partnerships with key players",
        "Scaling the platform",
        "Engaging more users",
      ],
    },
    {
      title: "Expansion",
      content: [
        "International reach",
        "Innovative features",
        "Sustained marketing",
      ],
    },
  ];

  return (
    <div
      className="bg-[#47A4CF]  h-auto w-full  max-w-[1920px] mx-auto flex flex-col  "
      id="roadmap "
    >
      {/* text */}
      <div className="flex justify-center  font-WinterMinieRegular 2xl:mt-[160px] mt-[60px]">
        <h1
          className="text-[40px] z-10 2xl:text-[80px] md:text-[60px] font-bold bg-gradient-to-b from-[#FCC77A] via-[#F7AB44] to-[#F0931A] text-transparent bg-clip-text text-nowrap"
          style={{
            WebkitTextStroke: "1.5px black",
            WebkitTextFillColor: "transparent",
          }}
        >
          RoadMap
        </h1>
      </div>

      {/* other content */}
      <div className="flex flex-col items-center justify-between lg:flex-row">
        {/* Roadmapfrog */}
        <div className="z-10 flex 2xl:ml-[260px] lg:ml-[40px] xl:ml-[130px]  mt-[20px]">
          <img
            src={RoadmapFrog}
            alt="froggif"
            className="2xl:w-[480px] 2xl:h-[500px] w-[336px] h-[350px]"
          />
        </div>

        {/* Directly render RoadMapCard components */}
        <div className="z-10 flex flex-col 2xl:mr-[200px] lg:mr-[0px]  xl:mr-[0px] mt-[40px] relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            className="w-full max-w-[628px] h-auto custom-swiper"
          >
            {roadmapData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="roadmap-card">
                  <RoadMapCard title={item.title} content={item.content} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="relative">
        <div className="absolute right-0  2xl:-top-[600px] -top-[260px] lg:-top-[400px] md:-top-[350px]">
          <img
            src={HelicopterGif}
            alt="helicopterGif"
            className="w-[166px] h-[50px] 2xl:w-[512px] 2xl:h-[154px] lg:w-[240px] lg:h-[70px] "
          />
        </div>
      </div>
    </div>
  );
}
