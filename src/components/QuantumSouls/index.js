import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Aa from "../../asset/aa.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function QuantumSoul() {
  let contentRef = useRef(null);
  let videoRef = useRef(null);
  let titleRef = useRef(null);
  let textRef = useRef(null);

  const t1 = gsap.timeline();

  useLayoutEffect(() => {
    gsap.from(textRef, {
      scrollTrigger: {
        trigger: textRef,
        toggleActions: "restart none none reset",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.5,
      ease: Power3.easeOut,
    });

    gsap.from(titleRef, {
      scrollTrigger: {
        trigger: titleRef,
        toggleActions: "restart none none none",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: Power3.easeOut,
    });

    gsap.to(contentRef, {
      scrollTrigger: {
        trigger: contentRef,
        toggleActions: "restart none none reset",
        end: "bottom 5%",
      },
      // backgroundColor: "#F5F5F4",
      // color: "black",
      delay: 3,
      duration: 1,
      ease: Power3.easeOut,
    });

    gsap.from(videoRef, {
      scrollTrigger: {
        trigger: contentRef,
        toggleActions: "restart none none reset",
      },
      scale: 1,
      duration: 1,
      delay: 1,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <section
      ref={(el) => (contentRef = el)}
      // className="grid overflow-hidden grid-cols-1 gap-y-6 md:grid-cols-2 py-8 px-4 md:px-16 md:py-32 lg:px-36 gap-x-32 items-center text-white bg-[#151414]"
      className="flex flex-col md:flex-row overflow-hidden justify-between gap-y-6 py-8 px-4 md:px-16 md:py-32 lg:px-40 gap-x-32 items-center text-white bg-[#151414]"
    >
      <div className="col-span-1">
        <p
          className="font-ibm font-bold text-2xl md:text-4xl mb-6 text-start"
          ref={(el) => (titleRef = el)}
        >
          Digital Art Vision
        </p>

        <p
          className="font-ibm font-medium leading-8 text-start max-w-[450px]"
          ref={(el) => (textRef = el)}
        >
          Quantum Souls is a generative collection of geometrical nodes
          containing 5550 pieces of digital animated souls stored on Ethereum
          Blockchain where each soul is unique and exclusive. The goal is to
          generate singular souls which instigate the imagination of the one who
          observes them. Each person will have a particular perception on each
          piece, bringing up the imagination in its purest form. Using your own
          visions and experiences, the beauty is to discover them and get lost
          in ideas and thoughts, watching the countless possibilities of what
          each and every one can mean to you.
        </p>
      </div>

      <div
        className=""
        ref={(el) => (videoRef = el)}
        // style={{ border: "10px solid #121212" }}
      >
        <video
          // src="https://res.cloudinary.com/dllbqpsrp/video/upload/v1659350983/Untitled_design_kfshga.mp4"
          // src={Canva}
          src = {Aa}
          loop
          muted
          autoPlay
          playsInline
          // className=" h-full md:h-[600px] object-cover"
          // width="100%"
          className = "object-cover"
        ></video>
      </div>
    </section>
  );
}

// md:h-[700px]
