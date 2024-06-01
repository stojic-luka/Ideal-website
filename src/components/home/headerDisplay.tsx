import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function HeaderDisplay() {
  return (
    <>
      <div className="header-display">
        <video autoPlay muted loop playsInline>
          <source src="/assets/mp4/bg-video.mp4" type="video/mp4" />
          Your browser does not support this video.
        </video>
        <motion.div
          whileInView={{ y: 25, opacity: 100, transition: { duration: 0.6 } }}
          initial={{ y: 0, opacity: 0 }}
          className="header-display-text"
        >
          <h1 className="header-display-text-h1">
            your vision, our {useMediaQuery({ query: "(max-device-width: 1300px)" }) ? <br /> : ""} expertise:
            <br />
            ideal roblox {useMediaQuery({ query: "(max-device-width: 1300px)" }) ? <br /> : ""} innovation!
          </h1>
          <p className="header-display-text-p">
            Where Creativity Meets Professionalism
            <br />
            Unlock Your Potential and become a GAME CHANGER!
          </p>
          <div className="header-display-buttons">
            <Button component={Link} to="https://www.fiverr.com/ideal_dev" variant="contained" className="white-button" target="_blank">
              <p>View offers</p>
            </Button>
            <Button component={Link} to="/contact" variant="contained" className="white-button">
              <p>Contact us</p>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
