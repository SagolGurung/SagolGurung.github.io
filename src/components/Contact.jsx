import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex flex-col md:flex-row gap-10 overflow-hidden`}
    >
      {/* Left side: Simple “Get in Touch” text and heading */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl flex flex-col justify-center items-start"
      >
        <p className={styles.sectionSubText}>Feel free to </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className="text-secondary mt-4 leading-7">
          You can connect to me through my linkedin messages or my emails at any time. I respond to them almost always immediately.
        </p>
      </motion.div>

      {/* Right side: A card with direct contact information */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 flex items-center justify-center"
      >
        <div className="bg-black-100 rounded-2xl p-8 max-w-sm w-full text-white shadow-lg shadow-primary relative overflow-hidden">
          {/* Add a subtle background decoration (optional) */}
          <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-tertiary to-[#141414] opacity-30"></div>

          {/* Profile image or brand logo */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-tertiary flex items-center justify-center mb-4 text-xl font-bold">
              {/* replace image */}
              SG
            </div>
            <h4 className="text-2xl font-bold">Sagol Gurung</h4>
            <p className="text-sm text-secondary">Frontend and Backend Developer</p>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span className="text-sm">+977 9825745008</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span className="text-sm">sagolgrg@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span className="text-sm">Talchikhel, Lalitpur</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-6 justify-center">
            <a
              href="https://github.com/SagolGurung"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tertiary transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sagol-gurung-26882024a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tertiary transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
