import CloudText from "@/components/CloudText";
import cloudImage from "../../assets/images/TextCloud.png";
import AirplaneGif from "../../assets/images/AirplaneGif.gif";

export default function Tokenomics() {
  return (
    <div className=" bg-[#47A4CF] ">
      <div
        className="flex flex-col items-center justify-center  max-w-[1920px] mx-auto   "
        id="tokenomics"
      >
        {/* Text */}
        <div className="relative w-full ">
          <div className="flex justify-center  font-WinterMinieRegular 2xl:mt-[160px] mt-[60px]">
            <h1
              className="text-[40px] z-10 2xl:text-[80px] md:text-[60px] font-bold bg-gradient-to-b from-[#FCC77A] via-[#F7AB44] to-[#F0931A] text-transparent bg-clip-text text-nowrap"
              style={{
                WebkitTextStroke: "1.5px black",
                WebkitTextFillColor: "transparent",
              }}
            >
              Tokenomics
            </h1>
          </div>

          {/* Clouds  */}
          <div className="flex flex-col items-center justify-center w-full lg:flex-row">
            <div className="flex flex-wrap justify-center gap-6 p-4 2xl:gap-[90px] z-10">
              <CloudText
                title="Total Supply"
                items={["100,000,000 Fefe Frog"]}
                imageUrl={cloudImage}
              />
              <CloudText
                title="Liquidity Pool"
                items={["40%"]}
                imageUrl={cloudImage}
              />
              <CloudText
                title="Staking Rewards"
                items={["25%"]}
                imageUrl={cloudImage}
              />
            </div>
          </div>

          <div className="absolute left-0 z-0  2xl:top-[160px] 2xl:-left-10 md:top-0 top-2/4">
            <img src={AirplaneGif} alt="airplaneGif" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
