import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const HorizontalScroll = ({images}) => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const sections = panelsRef.current;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="flex w-[300%] h-screen flex-nowrap bg-black "
      >
        {images.map((src, index) => (
          <section
            key={index}
            ref={el => (panelsRef.current[index] = el)}
            className="w-[800px] px-2 h-full flex justify-center items-center bg-black "
          >
            <img src={src} alt={`Slide ${index + 1}`} className="h-[80%] border-none outline-none w-auto object-contain rounded-2xl"/>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
