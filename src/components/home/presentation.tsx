import { useRef } from "react";
import { motion } from "framer-motion";

import "../../styles/home.css";

export default function Presentation() {
  const videoRef = useRef<HTMLVideoElement>(null);

  videoRef.current?.play();

  return (
    <>
      <div className="presentation-container">
        <motion.div
          whileInView={{ x: 0, opacity: 100, transition: { duration: 0.6 } }}
          initial={{ x: -25, opacity: 0 }}
          className="presentation-text"
        >
          <h2 className="presentation-header">Custom Roblox Games, Crafted to Perfection</h2>
          <span className="presentation-paragraph">
            Our skilled developers bring your vision to life, surpassing expectations. Unleash the full potential of your Roblox universe with
            unmatched customization.
          </span>
        </motion.div>
        <motion.div whileInView={{ x: 0, opacity: 100, transition: { duration: 0.6 } }} initial={{ x: 25, opacity: 0 }} className="swiper-container">
          <div className="slider-slide">
            <video ref={videoRef} className="slider-video" controls autoPlay muted loop>
              <source src="/src/assets/mp4/video_c.mp4" type="video/mp4" />
              Your browser does not support this video.
            </video>
          </div>
        </motion.div>
      </div>
    </>
  );
}
