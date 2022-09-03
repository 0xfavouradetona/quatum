import { gsap, Power3 } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Vid from "../../asset/S-1.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  let contentRef = useRef(null);
  let backgroundRef = useRef(null);
  let aboutRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(backgroundRef, {
      scrollTrigger: {
        trigger: contentRef,
        toggleActions: "restart none none reset",
      },
      duration: 3,
      ease: Power3.easeOut,
    });

    gsap.from(aboutRef, {
      scrollTrigger: {
        trigger: aboutRef,
        toggleActions: "restart none none none",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: Power3.easeOut,
    });

    gsap.from(contentRef, {
      scrollTrigger: {
        trigger: contentRef,
        toggleActions: "restart none none none",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.5,
      ease: Power3.easeOut,
    });
  });
  return (
    <div
      ref={(el) => (backgroundRef = el)}
      className="text-white relative grid-cols-1 grid md:grid-cols-2 items-center bg-black px-4 py-16 md:px-16 md:py-32 lg:px-40 gap-x-32"
    >
      <section className="">
        <div>
          <video
            // src="https://res.cloudinary.com/dllbqpsrp/video/upload/v1659353586/slide_three_lyprdg.mp4"
            src={Vid}
            muted
            autoPlay
            playsInline
            className="hidden md:block"
            loop
          ></video>
        </div>
      </section>

      <section className="">
        <h3
          className="font-ibm font-bold text-2xl md:text-4xl mb-6 about text-left"
          ref={(el) => (aboutRef = el)}
        >
          ABOUT QNTM COMMUNITY
        </h3>

        <p
          className="text-regular font-ibm font-regular leading-8 text-left"
          ref={(el) => (contentRef = el)}
        >
          <span className="mb-3 md:mb-4 inline-block">Love, freedom, evolution, and community. These four are what bind us
          together. </span> <span className="mb-3 md:mb-4 inline-block">We bring the missing piece into society. Receive the answers
          to any mystical questions, and help yourself connect all the puzzles
          in your soul. </span> <span className="mb-3 md:mb-4 inline-block"> We are a community that encourages love, unity, and
          evolution with rooted ethics backed by real universal laws and shared
          cultural values.</span> <span> Join the community, take your spirituality to the
          Metaverse by ascending to the higher dimensions and finding the ONE
          within you.</span>
        </p>
      </section>
    </div>
  );
}
