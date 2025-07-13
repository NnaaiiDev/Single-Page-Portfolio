import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactSection = () => {
  // Main refs
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);

  useEffect(() => {
    // Register plugin
    gsap.registerPlugin(ScrollTrigger);

    // Cleanup ScrollTriggers on unmount
    const cleanup = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) {
          st.kill(true);
        }
      });
    };

    // Call cleanup just in case
    cleanup();

    // Set initial states
    gsap.set(circleRef.current, {
      scale: 1,
      backgroundColor: "white",
    });
    gsap.set(initialTextRef.current, { opacity: 1 });
    gsap.set(finalTextRef.current, { opacity: 0 });

    // Create the animation timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
            invalidateOnRefresh: true,
      },
    });

    // 1. Circle initial zoom in
    tl.fromTo(
      circleRef.current,
      {
        scale: 5,
        backgroundColor: "#933EEA",
      },
      {
        scale: 17,
        backgroundColor: "#E9D5FF",
        boxShadow: "0 0 50px 20px rgba(233, 213, 255, 0.3)",
        ease: "power2.inOut",
        duration: 0.5,
      },
      0.5,
    );

    // 2. Fade out initial text
    tl.to(
      initialTextRef.current,
      {
        opacity: 0,
        ease: "power1.out",
        duration: 0.2,
      },
      0.1
    );

    // 3. Fade in final text
    tl.to(
      finalTextRef.current,
      {
        opacity: 1,
        ease: "power2.in",
        duration: 0.2,
      },
      0.7,
    );

    return () => {
      cleanup();
    };
  }, []);

  return (
    <section id="contact"
      ref={sectionRef}
      className="flex items-center justify-center bg-black relative"
      style={{ overscrollBehavior: "none" }}
    >
      {/* Circle Container */}
      <div
        ref={circleRef}
        className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center relative transition-shadow duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100"
      >
        {/* Initial Text */}
        <p
          ref={initialTextRef}
            className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex items-center text-center"
            >
          SCROLL DOWN
        </p>

        {/* Final Text Content */}
        <div
          ref={finalTextRef}
          className="text-center relative flex flex-col items-center justify-center opacity-0"
        >
          <h1 className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-5">
            Step Into the Future with Ian Mendoza
          </h1>

          <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068]">
          I'm a programmer skilled in C#, Python, and Java, with a focus on front-end development using React, Vite, and Spline for 3D visuals. I integrate embedded systems like Arduino and ESP32 into interactive web interfaces, backed by experience with MongoDB, PHP, and MS Access.
          </p>

          <button className="px-10 py-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all duration-500 scale-[0.1] absolute sm:mt-9 mt-7 text-nowrap">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
