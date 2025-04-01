import React from "react";

interface RoadMapCardProps {
  title: string;
  content: string[];
}

const RoadMapCard: React.FC<RoadMapCardProps> = ({ title, content }) => {
  return (
    <div
      className="relative max-w-lg p-6 mx-auto bg-white rounded-xl shadow-lg 
     w-[362px] h-[185px] md:w-[500px] md:h-[215px] 2xl:w-[654px] 2xl:h-[246px]"
    >
      <h2 className="mb-3 ml-6 text-black">
        <span
          className="font-bold bg-gradient-to-b from-[#FCC77A] via-[#F7AB44] to-[#F0931A] text-transparent bg-clip-text text-nowrap 
        font-WinterMinieRegular text-[20px] md:text-[30px] 2xl:text-[40px]"
          style={{
            WebkitTextStroke: "1px black",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </span>
      </h2>

      <ul className="pl-5 space-y-1 font-BubblegumSansRegular text-[16px] md:text-[18px] 2xl:text-[20px] text-black ml-9">
        {content.map((item, index) => (
          <li key={index} className="list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoadMapCard;
