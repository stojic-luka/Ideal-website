import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function ContactUs() {
  return (
    <div className="contact-us-section-wrapper">
      <div className="contact-us-section">
        <motion.div whileInView={{ y: 0, opacity: 100, transition: { duration: 0.6 } }} initial={{ y: -25, opacity: 0 }}>
          <h1>Create with us!</h1>
          <Button component={Link} to="/contact" variant="contained" className="white-button">
            <p>Contact us</p>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
