import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";

const awardVarients = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};


export const Hero = () => {
  return (
    <div className="hero">
      <div className="hVideoContainer">
        <div className="heroBackgroundVideo">
          <video autoPlay muted loop className="videoBg">
            <source  src="./blackhole.webm" type="video/webm"/>
          </video>
        </div>
      </div>
      <div className="hsection left">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I'm Anubhav!</span>
        </motion.h1>
        <motion.div
          variants={awardVarients}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVarients}>Creative Developer</motion.h2>
          <motion.p variants={awardVarients}>
            I'm a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.
          </motion.p>
          <motion.div variants={awardVarients} className="awardList">
            <motion.img variants={awardVarients} src="/instagram.jpg" alt="" />
            <motion.img variants={awardVarients} src="/github.png" alt="" />
            <motion.img variants={awardVarients} src="/linkedin.png" alt="" />
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity , duration: 4, ease: "easeInOut"}}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
            animate={{y: [0,5]}}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      <div className="hsection right">
        {/* {FOLLOW} */}

        <div className="follow">
          <a href="/">
            <img src="./instagram.png" alt="" />
          </a>
          <a href="/">
            <img src="./youtube.png" alt="" />
          </a>
          <a href="/">
            <img src="./facebook.png" alt="" />
          </a>
          
        </div>

        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <div className="certificate">
          <img src="./certificate.png" alt="" />
        </div>

        {/* CONTACT BUTTON */}
        <a href="/#contact" className="contactLink">
          <div className="contactButton">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </div>
        </a>
      </div>

      <div className="bg">
        {/* 3d */}
        <div className="hImg">
          <img src="./Astro Me.webp" alt="" />
        </div>
      </div>
    </div>
  );
};