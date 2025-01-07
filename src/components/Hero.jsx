import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center">
      <div className={`relative max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-10`}>
        {/* Decorative Element */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-[#915EFF] shadow-[0_0_20px_10px_rgba(145,94,255,0.5)] animate-pulse" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="relative w-20 h-20 rounded-full border-[4px] border-dashed border-[#CCFF5E] flex items-center justify-center"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#915EFF] to-[#CCFF5E]" />
          </motion.div>
        </div>

        <div className="text-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I am <span className="text-[#CCFF5E]">Sagol Gurung</span>
          </h1>
        </div>
      </div>

      {/*updated 3D Canvas with auto-rotation and interactivity */}
      <ComputersCanvas />

      {/* turned off the motion */}

{/* 
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
