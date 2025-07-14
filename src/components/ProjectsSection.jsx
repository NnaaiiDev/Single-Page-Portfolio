import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SlShareAlt } from 'react-icons/sl';

const ProjectsSection = () => {
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

  const projectImage = [
    {
      id: 1,
      title: '1st Year Project',
      imageSrc: '/images/project-1-1.png',
    },
    {
      id: 2,
      title: '2nd Year Project',
      imageSrc: '/images/project-2.png',
    },
    {
      id: 3,
      title: '3rd Year Project',
      imageSrc: '/images/project-3.png',
    },
    {
      id: 4,
      title: '4th Year Project/Capstone',
      imageSrc: '/images/project-4.png',
    },
  ];

  const moreProjectImage = [
    {
      id: 'a',
      title: 'Mobile App Design',
      imageSrc: '/images/project-2.png',
    },
    {
      id: 'b',
      title: 'API Integration Demo',
      imageSrc: '/images/placeholder-2.png',
    },
    {
      id: 'c',
      title: 'UI/UX Wireframes',
      imageSrc: '/images/placeholder-3.png',
    },
    {
      id: 'd',
      title: 'Machine Learning Model',
      imageSrc: '/images/placeholder-4.png',
    },
  ];

  const setupAnimations = (sectionRef, titleRef, titleLineRef, triggerRef, horizontalRef, images) => {
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

    const horizontalScroll = gsap.to(horizontalRef.current.querySelectorAll('.panel'), {
      xPercent: -100 * (images.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: () => `+=${horizontalRef.current.offsetWidth + 300}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (images.length - 1),
          duration: { main: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    });

    const panels = gsap.utils.toArray(horizontalRef.current.querySelectorAll('.panel'));
    panels.forEach((panel) => {
      const image = panel.querySelector('.project-image');
      const imageTitle = panel.querySelector('.project-title');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: 'left right',
          end: 'right left',
          scrub: true,
        },
      });

      tl.fromTo(image, { scale: 0, rotate: -20 }, { scale: 1, rotate: 1, duration: 0.5 });

      if (imageTitle) {
        tl.fromTo(imageTitle, { y: 30 }, { y: -100, duration: 0.3 }, 0.2);
      }
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setupAnimations(sectionRef1, titleRef1, titleLineRef1, triggerRef1, horizontalRef1, projectImage);
    setupAnimations(sectionRef2, titleRef2, titleLineRef2, triggerRef2, horizontalRef2, moreProjectImage);
  }, []);

  const renderSection = (refSet, title, images, sectionId) => (
    <section
      ref={refSet.sectionRef}
      id={sectionId}
      className="relative py-20 bg-[#f6f6f6] overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2
          ref={refSet.titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0"
        >
          {title}
        </h2>
        <div
          ref={refSet.titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
        ></div>
      </div>

      <div ref={refSet.triggerRef} className="overflow-hidden opacity-0">
        <div
          ref={refSet.horizontalRef}
          className="horizontal-section flex md:w-[400%] w-[420%]"
        >
          {images.map((project) => (
            <div
              key={`${sectionId}-${project.id}`}
              className="panel relative flex items-center justify-center w-full"
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                <img
                  className="project-image max-w-full max-h-full rounded-2xl object-cover"
                  src={project.imageSrc}
                  alt="Project-img"
                />
                <h2 className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                  {project.title} <SlShareAlt />
                </h2>
              </div>
            </div>
          ))}
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
        'featured-projects'
      )}
      {renderSection(
        {
          sectionRef: sectionRef2,
          titleRef: titleRef2,
          titleLineRef: titleLineRef2,
          triggerRef: triggerRef2,
          horizontalRef: horizontalRef2,
        },
        'More Projects',
        moreProjectImage,
        'more-projects'
      )}
    </>
  );
};

export default ProjectsSection;
