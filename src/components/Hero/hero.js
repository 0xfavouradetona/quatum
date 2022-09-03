import { useLayoutEffect, useRef } from "react";
import qntmlogo from "../../asset/qntmlogo.png";
import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { gsap, Power3 } from "gsap";

export default function Hero() {
  let textRef = useRef(null);

  useLayoutEffect(() => {
    let allChildren = textRef.children;

    gsap.from(allChildren, {
      duration: 1,
      y: 800,
      stagger: 0.2,
      ease: Power3.easeInOut,
    });
  }, []);

  return (
    <section
      className="relative pt-4 h-screen object-cover"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.2) 0.01%, rgba(0, 0, 0, 0.05) 13.97%), linear-gradient(90deg, #141414 10.71%, rgba(0, 0, 0, 0) 110.18%)",
      }}
    >
      <div className="relative flex items-center gap-4 justify-between px-2 sm:px-4 md:px-16">
        <div className="hidden md:block">
          <img src={qntmlogo} alt="logo" width="200px" height="70px" />
        </div>

        <div className="md:hidden block">
          <img src={qntmlogo} alt="logo" width="150px" height="70px" />
        </div>

        <div className="flex gap-x-3 md:gap-x-5 items-center">
          <a href="https://twitter.com/qntmverse">
            <FaTwitter size={24} color="fff" />
          </a>
          <a href="https://discord.gg/invite/qntmverse">
            <SiDiscord size={24} color="fff" />
          </a>
            <button className="bg-blue-500 font-ibm rounded text-sm font-semibold px-3 py-2 md:px-6 md:py-3 text-white md:text-lg hover:bg-blue-700 transition-all">
              <a href="http://qntm.vercel.app" target="_blank" rel="noreferrer">Mint Now</a>
            </button>
        </div>
      </div>

      <div
        ref={(el) => (textRef = el)}
        className="relative flex flex-col justify-center h-[80vh] items-center text-[1.5rem] sm:text-[2rem] md:text-[4.5rem] font-extrabold text-white font-ibm"
      >
        <span className="leading-20">We're The First</span>
        <span className="leading-10">All-Encompassing</span>
        <span>Evolutionary Community</span>

        <button type="button" className="bg-blue-500 font-ibm mt-6 md:mt-2 rounded font-semibold px-4 py-2 md:px-6 md:py-3 text-white text-base md:text-lg hover:bg-blue-700 transition-all">Get Started</button>
      </div>

      <div className="h-screen">
        <video
          src="https://res.cloudinary.com/dllbqpsrp/video/upload/v1659346907/Wide_16_9_3840x2160_amq-13_r9htuu.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="h-full w-full object-cover absolute top-0 -z-10"
        ></video>
      </div>
    </section>
  );
}
