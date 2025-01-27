import Link from "next/link";
import { motion } from "motion/react";
import { staggerContainer, fadeInLeft, fadeInBottom } from "@/utils/animations";
import { TypeAnimation } from "react-type-animation";
import HeroCarousel from "../ui/HeroCarousel";
const Hero = () => {
  return (
    <motion.section
      className="hero-section"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="grid md:grid-cols-6 xs:grid-cols-2">
        <div className="md:px-20 md:py-40 sm:p-5 col-span-3">
          <motion.h1
            variants={fadeInBottom({ delay: 0.3, duration: 0.4 })}
            className="lg:text-5xl sm:text-2xl font-heading font-bold text-sb-coffee"
          >
            Building Tomorrow’s Digital Solutions Today
          </motion.h1>
          <motion.h4
            variants={fadeInLeft({ delay: 0.1, duration: 0.2 })}
            className="md:text-xl sm:text-xs mt-2 mb-4 text-sb-coffee"
          >
            From intuitive product designs to AI-driven innovations,
            <br />
            we bring your ideas to life with technology that inspires.
          </motion.h4>
          <motion.div variants={fadeInLeft({ delay: 0.15, duration: 0.2 })}>
            <TypeAnimation
              sequence={[
                "🚀 Transformative Software Solutions", // Text 1
                2000, // Wait 2 seconds
                "🎨 User-Centric Product Design", // Text 2
                2000,
                "🤖 Cutting-Edge AI & Data Science", // Text 3
                2000,
                "💡 Expert IT Consulting", // Text 4
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="md:text-2xl sm:text-lg font-heading text-sb-rose "
            />
          </motion.div>
          <div className="my-8 flex gap-12">
            <motion.span variants={fadeInLeft({ delay: 0.2, duration: 0.2 })}>
              <Link
                href="/contact"
                className="bg-sb-peach text-white rounded p-4"
              >
                Get Started Now
              </Link>
            </motion.span>
            <motion.span variants={fadeInLeft({ delay: 0.25, duration: 0.2 })}>
              <Link
                href="/service"
                className="bg-sb-peach text-white rounded p-4"
              >
                Explore Our Services
              </Link>
            </motion.span>
          </div>
          <motion.h6
            className="italic font-heading"
            variants={fadeInLeft({ delay: 0.3, duration: 0.2 })}
          >
            Trusted by startups and enterprises to create future-ready
            solutions.
          </motion.h6>
        </div>

        <div className="col-span-3 md:p-20 sm:p-5 text-center">
          <HeroCarousel />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
