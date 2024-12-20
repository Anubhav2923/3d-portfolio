
import React, { useState } from "react";
import Grid1 from "../assets/grid1.png";
import Grid2 from "../assets/grid2.png";
import Grid3 from '../assets/grid3.png';
import Grid4 from '../assets/grid4.png';
import tick from '../assets/tick.svg';
import close from '../assets/copy.svg';


import Globe from "react-globe.gl";
import { Button } from "@material-tailwind/react";
import { data } from "react-router-dom";

const About = () => {
    
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    // Copy the email to the clipboard
    navigator.clipboard.writeText('anubhavsinghas9@gmail.com');
  
    // Update the state to show the "copied" status
    setHasCopied(true);
  
    // Reset the "copied" status after 2 seconds
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container  ">
            <img
              src={Grid1}
              alt=""
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="gird-headtext  text-xl font-semibold mb-2 text-white font-generalsans;">
                Hi, I'm Anubhav Singh
              </p>
              <p className="grid-subtext text-[#afb0b6] text-base font-generalsans;">
                I have honed my skills in frontend and backend developement,
                with a focus on animated 3D websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={Grid2}
              className="sm:h-[276px] w-full h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">Full Stack Developer</p>
              <p className="grid-subtext text-[#afb0b6]">
                I'm a skilled software developer with experience in Full Stack
                Web development and JavaScript, and expertise in frameworks like
                React, Node.js, and Express.js.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                // labelsData={[{
                //   lat: 40, lng:-100,
                //   text:"I'm here!",
                //   color: "white",
                //   size : 20,
                // }]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones.
              </p>
              <p className="grid-subtext  text-[#afb0b6]">
                I'm based in India, with remote work available
              </p>
              <div className="flex w-max gap-4 mt-10 m-auto border rounded  ">
                <Button variant="" className="py-2 ">Contact Me</Button>
                
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
            <div className="grid-container">
                <img src={Grid3} alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"  />

                <div>
                  <p className="grid-headtext
                       text-xl font-semibold mb-2 text-white font-generalsans;
  }
                  ">My Passion for Coding</p>
                  <p className="grid-subtext 
                     text-[#afb0b6] text-base font-generalsans;
                  ">I love solving, problems and building things through code. Coding isn't just my profession - its my passion.</p>
                </div>

            </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container">
              <img src= {Grid4} alt=""  
                  className="w-full md:h-[226px] sm:h-[276px] h-fit object-cover sm:object-top"
              />

              <div className="space-y-2">
                  <p className="text-[#afb0b6] text-base font-generalsans text-center">Contact me</p>

                  <div className="copy-container" onClick={handleCopy}>
                      <img src= {hasCopied ? tick : close } alt="copy" />
                      <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white ">anubhavsinghas9@gmail.com</p>
                  </div>
              </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default About;
