import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const companyRef = useRef(null);
  const taskHoursRef = useRef(null);
  const conclusionRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Intro Animation
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Company Animation
    gsap.fromTo(
      companyRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: companyRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Task + Hours Animation
    gsap.fromTo(
      taskHoursRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        scrollTrigger: {
          trigger: taskHoursRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Conclusion Animation
    gsap.fromTo(
      conclusionRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        scrollTrigger: {
          trigger: conclusionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stars Animation
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: direction * (100 + index * 20),
        y: direction * (100 + index * 20),
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50] text-white"
    >
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Container */}
      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col gap-12 items-center">
        {/* About Me Title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center opacity-0"
        >
          About Me
        </h1>

        {/* Intro Text + Image */}
        <div
          ref={introRef}
          className="w-full flex md:flex-row flex-col justify-between items-center gap-10 opacity-0"
        >
          <h3 className="text-sm md:text-2xl font-bold text-purple-200 tracking-wider md:max-w-[45rem] text-center md:text-left">
            Hi, I'm Ian Mendoza, a student with a growing foundation in
            programming and IoT, currently studying at Mapúa University. I'm
            passionate about building intelligent systems that merge sensor data
            with interactive front-end experiences. My focus lies in creating
            seamless connections between hardware and user interfaces to deliver
            meaningful designs.
          </h3>

          <img
            className="lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-harden"
            src="/images/person3.png"
            alt="profile-img"
          />
        </div>

        {/* About Company Section */}
        <div
          ref={companyRef}
          className="w-full flex flex-col items-center text-center opacity-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Company
          </h2>
          <p className="text-sm md:text-xl text-purple-200 max-w-4xl">
            I am currently an Intern at STMicroelectronics, in Calamba, Laguna.
            STMicroelectronics is renowned for its high-tech semiconductor
            manufacturing operations. The company is dedicated to delivering
            intelligent and energy-efficient semiconductor solutions that power
            modern electronics—from smart homes and factories to automotive
            systems and IoT devices.
          </p>
        </div>

        {/* Task Given & Hours Rendered */}
        <div
          ref={taskHoursRef}
          className="w-full flex flex-col sm:flex-row justify-between items-start text-white gap-6 opacity-0"
        >
          {/* Task Given */}
          <div className="w-full sm:w-1/2">
            <h3 className="text-2xl md:text-4xl font-bold mb-2">
              Task Given
            </h3>
            <p className="text-sm md:text-lg text-purple-200 text-left">
              I was assigned to develop a system that automates the socket inventory process for both MEMS and Non-MEMS systems. The goal is to implement traceability for each socket so the production line can accurately identify and manage them. Currently, sockets are labeled with small QR codes or Data Matrix stickers that can be scanned using a barcode reader. With this system in place, personnel on the production floor will be able to efficiently determine the status of each socket whether it requires repair, is ready for use, or should be marked as obsolete. This will enhance operational efficiency and reduce errors caused by manual tracking.
            </p>
          </div>

          {/* Hours Rendered */}
          <div className="w-full sm:w-1/2 text-right">
            <h3 className="text-2xl md:text-4xl font-bold mb-2">
              Hours Rendered
            </h3>
            <p className="text-sm md:text-lg text-purple-200">
              I needed to complete 486 internship hours, starting with 42.5 hours of company orientation covering rules and regulations. After that, 100 hours were spent learning the operations of my department. I dedicated 150 hours to understanding the socket inventory automation project, followed by another 150 hours developing the system for MEMS and Non-MEMS sockets. The final hours were used to polish and finalize the project for deployment. Throughout the internship, I gained hands-on experience in system design and real-time traceability. It also deepened my understanding of how automation can enhance production efficiency and reliability.
            </p>
          </div>
        </div>

        {/* Conclusion Section */}
        <div
          ref={conclusionRef}
          className="w-full flex flex-col items-center text-center mt-10 opacity-0"
        >
          <h3 className="text-2xl md:text-4xl font-bold mb-3">Conclusion</h3>
          <p className="text-sm md:text-lg text-purple-200 max-w-2xl">
            My internship at STMicroelectronics was an incredibly valuable experience that contributed significantly to my professional growth, something I’m eager to share with future generations. One key realization was the importance of mastering the fundamentals of coding. Due to corporate restrictions, we had to work with legacy coding practices, which challenged me to sharpen my core skills. This experience strengthened my adaptability, allowing me to work effectively within constraints while still delivering high-quality outputs to the best of my ability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
