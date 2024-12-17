import "./contact.css";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Earth from "./Earth";


const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        left
      </div>
      <div className="contact-right">
        <Earth/>
      </div>
    </div>
  );
};

export default Contact;
