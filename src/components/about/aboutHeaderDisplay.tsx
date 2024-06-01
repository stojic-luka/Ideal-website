import { motion } from "framer-motion";

import "../../styles/about.css";

export default function AboutHeaderDisplay() {
  return (
    <>
      <div className="about-header-display-wrapper">
        <div className="about-header-display-container">
          <motion.div
            whileInView={{ x: 0, opacity: 100, transition: { duration: 0.6 } }}
            initial={{ x: -25, opacity: 0 }}
            className="about-header-text"
          >
            <h1>Welcome to Ideal Development.</h1>
            <p>
              We are a team of developers with years of experience in Roblox Studio. Our team consists of highly skilled Designers and Scripters who
              are capable of making the Ideal game for you from the ground up. Communication is key and that is why we are Always available and open
              to new ideas and suggestions.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
