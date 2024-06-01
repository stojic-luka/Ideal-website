import { motion } from "framer-motion";

import "../../styles/about.css";

export default function AboutHeaderDisplay() {
  return (
    <>
      <div className="about-presentation-wrapper">
        <div className="about-presentation-container">
          <motion.div
            whileInView={{ x: 0, opacity: 100, transition: { duration: 0.6 } }}
            initial={{ x: 25, opacity: 0 }}
            className="about-presentation-text"
          >
            <h1>Why us?</h1>
            <p>
              We offer 100% bug-fixing on our EVERY game. Our team will provide you with continuous updates and take you along with us through the
              whole development process. We offer 100% assistance in any Roblox field and help you through everything. Original, highly creative and
              conceptual design.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
