import { useLayoutEffect, useRef } from "react";
import GridItem from "./GridItem";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Vid1 from "../../asset/16.mp4";
import Vid2 from "../../asset/36.mp4";
import Vid3 from "../../asset/37.mp4";
import Vid4 from "../../asset/725.mp4";
import Vid5 from "../../asset/756.mp4";
import Vid6 from "../../asset/822.mp4";
import Vid7 from "../../asset/998.mp4";
import Vid8 from "../../asset/2904.mp4";
import Vid9 from "../../asset/3599.mp4";
import Vid10 from "../../asset/3840.mp4";
import Vid11 from "../../asset/3925.mp4";
import Vid12 from "../../asset/4144.mp4";
import Vid13 from "../../asset/4201.mp4";
import Vid14 from "../../asset/4625.mp4";
import Vid15 from "../../asset/5161.mp4";
import Vid16 from "../../asset/5251.mp4";
import Vid17 from "../../asset/5257.mp4";
import Vid18 from "../../asset/5284.mp4";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: 0,
    videoSrc: Vid1,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549646/4th%20slide/4625_d0tiqt.mp4",
  },
  {
    id: 1,
    videoSrc: Vid2,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549632/4th%20slide/998_pclvsh.mp4",
  },
  {
    id: 2,
    videoSrc: Vid3,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549576/4th%20slide/822_upf2sq.mp4",
  },
  {
    id: 3,
    videoSrc: Vid4,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549543/4th%20slide/2904_jxbbhd.mp4",
  },
  {
    id: 4,
    videoSrc: Vid5,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549295/4th%20slide/5161_yaxm7r.mp4",
  },
  {
    id: 5,
    videoSrc: Vid6,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549245/4th%20slide/37_hqksf8.mp4",
  },
  {
    id: 6,
    videoSrc: Vid7,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549223/4th%20slide/36_liz2ik.mp4",
  },
  {
    id: 7,
    videoSrc: Vid8,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549295/4th%20slide/5161_yaxm7r.mp4",
  },
  {
    id: 8,
    videoSrc: Vid9,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549245/4th%20slide/37_hqksf8.mp4",
  },
  {
    id: 9,
    videoSrc: Vid10,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549223/4th%20slide/36_liz2ik.mp4",
  },
  {
    id: 10,
    videoSrc: Vid11,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549186/4th%20slide/3599_rbcqgv.mp4",
  },
  {
    id: 11,
    videoSrc: Vid12,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549186/4th%20slide/3599_rbcqgv.mp4",
  },
  {
    id: 12,
    videoSrc: Vid13,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549160/4th%20slide/756_w78kti.mp4",
  },
  {
    id: 13,
    videoSrc: Vid14,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659548956/4th%20slide/4201_iergve.mp4",
  },
  {
    id: 14,
    videoSrc: Vid15,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659548934/4th%20slide/5257_s3dmzs.mp4",
  },
  {
    id: 15,
    videoSrc: Vid16,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659548897/4th%20slide/3925_v3s9vb.mp4",
  },
  {
    id: 16,
    videoSrc: Vid17,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659548875/4th%20slide/5284_ofkbst.mp4",
  },
  {
    id: 17,
    videoSrc: Vid18,
    // "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659548872/4th%20slide/5251_xlkpo1.mp4",
  },
];

export default function VideoGallery() {
  let backgroundRef = useRef(null);
  let videoRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(backgroundRef, {
      scrollTrigger: {
        trigger: backgroundRef,
        toggleActions: "restart none none reset",
        end: "bottom 20%",
      },
      // backgroundColor: "#151414",
      // color: "white",
      delay: 3,
      duration: 1,
      ease: Power3.easeOut,
    });

    // gsap.from(videoRef, {
    //   scrollTrigger: {
    //     trigger: videoRef,
    //     toggleActions: "restart none none reset",
    //     start: "top center"
    //   },
    //   // rotate: 45,
    //   width: 0,
    //   duration: 1,
    //   delay: .5,
    //   ease: Power3.easeOut
    // });
    
    // gsap.to(videoRef, {
    //   scrollTrigger: {
    //     trigger: videoRef,
    //     toggleActions: "restart none none reset",
    //     // start: "top center",
    //   },
    //   scale: 0.1,
    //   y: 60,
    //   // yoyo: true,
    //   // repeat: -1,
    //   ease: Power3.easeIn,
    //   delay: 1,
    //   duration: 1,
    //   stagger: {
    //     amount: 1,
    //     grid: "auto",
    //     from: "center",
    //   },
    // });
  }, []);

  return (
    <div
      className="py-8 md:py-20 lg:py-16 bg-[#151414] px-8 md:px-16 lg:px-40 text-white"
      ref={(el) => (backgroundRef = el)}
    >
      <h1 className="text-center text-3xl md:text-6xl font-ibm font-bold mb-10 md:mb-20">Mint up to 5 Souls</h1>

      <div
        ref={(el) => (videoRef = el)}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-12 w-full"
      >
        {data.map((video, index) => (
          <div key={index} className="">
            <video
              src={video.videoSrc}
              muted
              autoPlay
              playsInline
              className=""
              loop
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
}
