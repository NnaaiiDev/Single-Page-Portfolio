import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SlShareAlt } from 'react-icons/sl';

const ProjectsSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Track which cards are flipped
  const [flippedIds, setFlippedIds] = useState([]);

  const toggleFlip = (id) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // GSAP refs
  const sectionRef1 = useRef(null);
  const titleRef1 = useRef(null);
  const titleLineRef1 = useRef(null);
  const triggerRef1 = useRef(null);
  const horizontalRef1 = useRef(null);

  const sectionRef2 = useRef(null);
  const titleRef2 = useRef(null);
  const titleLineRef2 = useRef(null);
  const triggerRef2 = useRef(null);
  const horizontalRef2 = useRef(null);

  const sectionRef3 = useRef(null);
  const titleRef3 = useRef(null);
  const titleLineRef3 = useRef(null);
  const triggerRef3 = useRef(null);
  const horizontalRef3 = useRef(null);

  // Data arrays (now include description & link for flip cards)
  const projectImage = [
    {
      id: 1,
      title: 'Socket Inventory System',
      description:
        'The inventory tracking system is a web-based application developed using Python for its database logic, alongside HTML, CSS, and JavaScript for the front-end interface. Designed to streamline socket management, the system assigns a unique QR code to each socket, enabling fast identification and access to its historical status and activity logs. Prior to implementation, socket-related issues were logged manually, which was time consuming and prone to errors. With this automated setup, users can now effortlessly report problems and monitor socket conditions simply by scanning the embedded QR codes.',
      imageSrc: '/images/project-1-1.png',
      link: 'https://github.com/Heracles404/socket-inventory-system',
    },
  ];

  const moreProjectImage = [
    {
      id: 'a',
      title: 'Time Keeping',
      description:
        'An IoT‑based timekeeping system using NodeMCU and RFID tags that logs employee attendance in real‑time.',
      imageSrc: '/images/timekeep.png',
      link: 'https://github.com/Heracles404/employee-timekeep-IoT-NodeMCU-RFID',
    },
    {
      id: 'b',
      title: 'RFID Barrier',
      description:
        'An Arduino‑powered barrier that grants access via authorized RFID cards.',
      imageSrc: '/images/rfid.png',
      link: 'https://github.com/Heracles404/RFID-Controlled-Barrier-Using-Arduino',
    },
    {
      id: 'c',
      title: 'Visitor Count',
      description:
        'A laser‑based visitor counter built with Arduino Uno and WeMos D1 to track foot traffic.',
      imageSrc: '/images/Visitor.png',
      link: 'https://github.com/Heracles404/laser-visitor-counter-arduinouno-wemosD1',
    },
    {
      id: 'd',
      title: 'Capstone System',
      description:
        'A classroom environment monitoring system using sensors to track temperature, humidity, air quality, light levels (lux), and volcanic Smog.',
      imageSrc: '/images/lems.png',
      link: 'https://github.com/Heracles404/learning-environment-monitoring-system',
    },
  ];

  const seminarCertificates = [
    {
      id: 's1',
      title: 'CompTIA IT Fundamentals+',
      imageSrc: '/images/compt.png',
      link: 'https://www.credly.com/badges/ca8da3b9-b132-4133-9308-a482ebe63d10/public_url',
    },
    {
      id: 's2',
      title: 'Academy Cloud Foundations',
      imageSrc: '/images/aws.png',
      link: 'https://www.credly.com/badges/e2cf9420-e457-4ac9-895d-245df5f21e98/public_url',
    },
    {
      id: 's3',
      title: 'CCNA: Introduction to Networks',
      imageSrc: '/images/ccna.png',
      link: 'https://www.credly.com/badges/06f3376c-dbe5-404a-bb6d-70caa7054641/public_url',
    },
    {
      id: 's4',
      title: 'Secure Google Cloud Network',
      imageSrc: '/images/google.png',
      link: 'https://www.credly.com/badges/088a64a5-dfc3-4919-b51a-7e36d157ef29/public_url',
    },
  ];

  // GSAP animations (same as before)
  const setupAnimations = (
    sectionRef,
    titleRef,
    titleLineRef,
    triggerRef,
    horizontalRef,
    images,
    nextSectionRef
  ) => {
    // Title fade
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    // Underline grow
    gsap.fromTo(
      titleLineRef.current,
      { width: '0%', opacity: 0 },
      {
        width: '100%',
        opacity: 1,
        duration: 1.5,
        ease: 'power3.inOut',
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    // Content pop
    gsap.fromTo(
      triggerRef.current,
      { y: 100, rotationX: 20, opacity: 0 },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    // Parallax
    gsap.fromTo(
      sectionRef.current,
      { backgroundPosition: '50% 0' },
      {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    // Horizontal scroll
    if (images.length > 1) {
      const horizontalScroll = gsap.to(
        horizontalRef.current.querySelectorAll('.panel'),
        {
          xPercent: -100 * (images.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: () => `+=${horizontalRef.current.offsetWidth + 5000}`,
            pin: true,
            scrub: 1,
            snap: {
              snapTo: 1 / (images.length - 1),
              duration: { main: 0.2, max: 0.3 },
              delay: 0.1,
            },
            invalidateOnRefresh: true,
          },
        }
      );
      gsap.utils
        .toArray(horizontalRef.current.querySelectorAll('.panel'))
        .forEach((panel) => {
          const image = panel.querySelector('.project-image');
          const title = panel.querySelector('.project-title');
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalScroll,
              start: 'left center',
              end: 'right center',
              scrub: true,
            },
          });
          tl.fromTo(image, { scale: 0, rotate: -20 }, { scale: 1, rotate: 1, duration: 0.5 });
          if (title) tl.fromTo(title, { y: 30 }, { y: -130, duration: 0.3 }, 0.2);
        });
    }
    // Fade when next arrives
    if (nextSectionRef) {
      gsap.fromTo(
        triggerRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: nextSectionRef.current,
            start: 'top bottom-=100',
            end: 'top top+=200',
            scrub: true,
          },
        }
      );
    }
  };

  useEffect(() => {
    setupAnimations(
      sectionRef1,
      titleRef1,
      titleLineRef1,
      triggerRef1,
      horizontalRef1,
      projectImage,
      sectionRef2
    );
    setupAnimations(
      sectionRef2,
      titleRef2,
      titleLineRef2,
      triggerRef2,
      horizontalRef2,
      moreProjectImage,
      sectionRef3
    );
    setupAnimations(
      sectionRef3,
      titleRef3,
      titleLineRef3,
      triggerRef3,
      horizontalRef3,
      seminarCertificates,
      null
    );
  }, []);

  // Render helper
  const renderSection = (refs, title, images, sectionId, flipEnabled = false) => (
    <section
      ref={refs.sectionRef}
      id={sectionId}
      className="relative pt-12 pb-12 bg-[#f6f6f6] overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-6 relative z-10">
        <h2
          ref={refs.titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0"
        >
          {title}
        </h2>
        <div
          ref={refs.titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
        />
      </div>

      <div ref={refs.triggerRef} className="overflow-hidden opacity-0">
        <div
          ref={refs.horizontalRef}
          className={`horizontal-section flex ${
            images.length > 1 ? 'md:w-[400%] w-[420%]' : 'w-full justify-center'
          }`}
        >
          {images.map((project) => {
            if (flipEnabled) {
              const isFlipped = flippedIds.includes(project.id);
              return (
                <div
                  key={project.id}
                  className="panel cursor-pointer relative flex items-center justify-center w-full"
                  onClick={() => toggleFlip(project.id)}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.6s',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* Front */}
                    <div
                      style={{
                        backfaceVisibility: 'hidden',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                      }}
                      className="flex flex-col items-center justify-center p-2 sm:p-6 md:p-10 bg-[#f6f6f6] rounded-2xl"
                    >
                      <img
                        className="project-image max-w-full max-h-full rounded-2xl object-cover"
                        src={project.imageSrc}
                        alt={project.title}
                      />
                      <h2 className="project-title text-center flex items-center gap-2 md:text-3xl text-sm md:font-bold text-black mt-6 hover:text-gray-400 transition-colors duration-300">
                        {project.title}
                        <SlShareAlt />
                      </h2>
                    </div>
                    {/* Back */}
                    <div
                      style={{
                        backfaceVisibility: 'hidden',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        transform: 'rotateY(180deg)',
                      }}
                      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl"
                    >
                      <h2 className="text-2xl font-semibold mb-4 text-center text-black">
                        {project.title}
                      </h2>
                      <p
                        className="mb-6 text-black text-justify max-w-prose"
                        style={{ fontSize: '2.0rem', lineHeight: '3.75rem' }}
                      >
                        {project.description}
                      </p>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
            // non-flip (anchor)
            return (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="panel relative flex items-center justify-center w-full"
              >
                <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-6 md:p-10 z-[999]">
                  <img
                    className="project-image max-w-full max-h-full rounded-2xl object-cover"
                    src={project.imageSrc}
                    alt={project.title}
                  />
                  <h2 className="project-title text-center flex items-center gap-2 md:text-3xl text-sm md:font-bold text-black mt-6 hover:text-gray-400 transition-colors duration-300">
                    {project.title}
                    <SlShareAlt />
                  </h2>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );

  return (
    <>
      {renderSection(
        {
          sectionRef: sectionRef1,
          titleRef: titleRef1,
          titleLineRef: titleLineRef1,
          triggerRef: triggerRef1,
          horizontalRef: horizontalRef1,
        },
        'Company Project',
        projectImage,
        'projects',
        true
      )}

      {renderSection(
        {
          sectionRef: sectionRef2,
          titleRef: titleRef2,
          titleLineRef: titleLineRef2,
          triggerRef: triggerRef2,
          horizontalRef: horizontalRef2,
        },
        'College Projects',
        moreProjectImage,
        'more-projects',
        true
      )}

      {renderSection(
        {
          sectionRef: sectionRef3,
          titleRef: titleRef3,
          titleLineRef: titleLineRef3,
          triggerRef: triggerRef3,
          horizontalRef: horizontalRef3,
        },
        'Seminars & Certificates',
        seminarCertificates,
        'seminars-certificates'
      )}
    </>
  );
};

export default ProjectsSection;