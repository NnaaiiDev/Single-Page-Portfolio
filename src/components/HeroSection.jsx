// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline"

const HeroSection = () => {
  return (
     <section id="home"className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
        {/* Left Sections */}
        <div className="z-40 xl:mb-0 mb-[20%]">
             <motion.h1 
             initial={{opacity: 0, y: 80}}
             animate={{opacity: 1, y:0}}
             transition={{
               type: "spring",
               stiffness: 40,
               damping: 25,
               delay: 1.3, 
               duration: 1.5
             }}
             className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 text-white">
               Excellence <br /> And  Virtue
             </motion.h1>

             <motion.p 
             initial={{opacity: 0, y: 80}}
             animate={{opacity: 1, y:0}}
             transition={{
               type: "spring",
               stiffness: 40,
               damping: 25,
               delay: 1.8, 
               duration: 1.5
             }}
             className="text-white text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl">
               As a programmer deeply engaged in the Internet of Things IoT, I specialize in crafting intelligent systems that bridge the gap between physical devices and digital networks. My work often involves integrating sensors, microcontrollers, and real-time data processing to build solutions that monitor, automate, and optimize everyday environments.
             </motion.p>
        </div>

        {/* Right Section */}
        <Spline className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0" scene="https://prod.spline.design/OuXN4Hg5nNeHUBWb/scene.splinecode" />

     </section>

  )
}

export default HeroSection