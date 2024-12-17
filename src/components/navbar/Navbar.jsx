import "./navbar.css";
import React, { useEffect, useState } from "react";
import { gsap, CSSRulePlugin } from "gsap/all";

gsap.registerPlugin(CSSRulePlugin);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track menu state

  useEffect(() => {
    const activeItemIndicator = CSSRulePlugin.getRule(".menu-items p.active::after");

    const timeline = gsap.timeline({ paused: true });

    // Set initial state of animations
    gsap.set(".overlay", {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    });

    gsap.set(".menu-items p", { y: 255 });

    // Timeline animations
    timeline.to(".overlay", {
      duration: 1.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    });

    timeline.to(
      ".menu-items p",
      {
        duration: 1.5,
        y: 0,
        stagger: 0.2,
        ease: "power4.out",
      },
      "-=1"
    );

    timeline.to(
      activeItemIndicator,
      {
        width: "100%",
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
      },
      "<"
    );

    timeline.to(
      ".sub-nav",
      {
        bottom: "10%",
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
      },
      "<"
    );

    // Handle state changes
    if (isOpen) {
      timeline.play();
    } else {
      timeline.reverse().then(() => {
        // Reset clip-path after reverse completes to avoid rendering glitches
        gsap.set(".overlay", {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        });
      });
    }
  }, [isOpen]); // Re-run effect when isOpen changes

  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="main-container">
      <div className="nav">
        <div className="main-name">
          <h2>Anubhav Singh</h2>
        </div>
        <div className="navlinks">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <div className="hireMeBtn">
            <button>
              <div>
                <span>
                  <p>Hire Me</p>
                  <p>:)</p>
                </span>
              </div>
              <div>
                <span>
                  <p>Hire Me</p>
                  <p></p>
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="menu-logo">
          <button className={`burger ${isOpen ? "active" : ""}`} onClick={toggleMenu}></button>
        </div>
      </div>

      <div className="overlay">
        <div className="overlay-menu">
          <div className="menu-items">
            <p className="active">
              <a href="#">HOME</a>
            </p>
          </div>
          <div className="menu-items">
            <p>
              <a href="#">PROJECT</a>
            </p>
          </div>
          <div className="menu-items">
            <p>
              <a href="#">ABOUT</a>
            </p>
          </div>
          <div className="menu-items">
            <div className="hireMeBtn">
              <button className="hireBtn">
                <div>
                  <span>
                    <p>Hire Me</p>
                    <p>:)</p>
                  </span>
                </div>
                <div>
                  <span>
                    <p>Contact Me</p>
                    <p></p>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="sub-nav">
          <p>
            <a href="#">TWITTER</a>
          </p>
          <p>.</p>
          <p>
            <a href="#">DRIBBLE</a>
          </p>
          <p>.</p>
          <p>
            <a href="#">INSTAGRAM</a>
          </p>
          <p>.</p>
          <p>
            <a href="#">INSTAGRAM</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
