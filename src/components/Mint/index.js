import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import Team from "../../asset/team.jpg";

export default function Mint() {
  return (
    <section className="text-black bg-[#F5F5F4] grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 md:py-32 lg:px-24 gap-16 items-center py-8">
      {/* <video
        src="https://res.cloudinary.com/dllbqpsrp/video/upload/v1659565828/4th%20slide/3911_mqci0x.mp4"
        muted
        autoPlay
        playsInline
        className="h-[200] md:h-[300] lg:h-[650px]"
        loop
      ></video> */}

      <div>
        <h1 className="font-ibm font-bold text-3xl md:text-5xl mb-6 md:mb-10 text-start">
          QNTM TEAM
        </h1>

        <p className="font-ibm font-medium text-lg md:text-2xl leading-8 mb-6 md:mb-8 text-start max-w-[550px]">
          Bound by global love and freedom. What you see in front of your eyes
          is the doing of a team that spans across 4 continents. We're
          expanding, transcending, and helping everyone around us become part of
          the evolution.
        </p>

        <div className="flex gap-x-5 items-center mb-8">
          <a href="https://twitter.com/qntmverse">
            <FaTwitter size={36} color="black" />
          </a>
          <a href="https://discord.gg/gnvjQy4p">
            <SiDiscord size={36} color="black" />
          </a>
        </div>

        <a href = '/' className="bg-blue-500 font-ibm rounded font-semibold px-6 py-3 md:px-10 md:py-4 text-white text-base md:text-lg hover:bg-blue-700 transition-all">
          Join Now
        </a>
      </div>

      <div>
        <img src= {Team} alt = "team" />
      </div>
    </section>
  );
}
