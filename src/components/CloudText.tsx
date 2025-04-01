import React from "react";

interface CloudTextProps {
  title: string;
  items: string[]; // accept multiple text items
  imageUrl: string;
}

const CloudText: React.FC<CloudTextProps> = ({ title, items, imageUrl }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center md:w-[300px] md:h-[180px] bg-no-repeat bg-contain bg-center 2xl:w-[420px] 2xl:h-[275px] w-[260px] h-[170px]"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Title */}
      <h2 className="text-center">
        <span
          className="font-bold bg-gradient-to-b from-[#FCC77A] via-[#F7AB44] to-[#F0931A] text-transparent bg-clip-text text-nowrap font-WinterMinieRegular 2xl:text-[40px] text-[20px] lg:text-[28px]"
          style={{
            WebkitTextStroke: "0.5px black",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </span>
      </h2>

      {/* List (Centered) */}
      <ul className="text-center space-y-1 font-BubblegumSansRegular 2xl:text-[20px] text-[16px] text-black">
        {items.map((item, index) => (
          <li key={index} className="">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CloudText;
