import Telegram from "../assets/images/Telegram.png";
import Spacex from "../assets/images/SpaceX.png";
import Infint from "../assets/images/Dextool.png";
import Seeklogo from "../assets/images/Stack.png";

const SocialIcons = () => {
  const icons = [
    { src: Infint, width: "70%", height: "70%" },
    { src: Telegram, width: "80%", height: "70%" },
    { src: Spacex, width: "80%", height: "60%" },
    { src: Seeklogo, width: "90%", height: "90%" },
  ];

  return (
    <div className="flex gap-[24px] 2xl:gap-[40px] md:gap-[15px] lg:gap-[30px] xl:gap-[35px] flex-col">
  {icons.map((icon, index) => (
    <a
      key={index}
      href="#"
      className="relative flex items-center justify-center 
      xl:w-[66px] xl:h-[66px] w-[40px] h-[40px] 
      bg-black hover:scale-90 rounded-[8px]"
    >
      {/* Icon */}
      <img
        src={icon.src}
        alt="Social Icon"
        className="relative"
        style={{ width: icon.width, height: icon.height }}
      />
    </a>
  ))}
</div>

  );
};

export default SocialIcons;
