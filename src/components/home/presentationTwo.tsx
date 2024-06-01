import { useRef } from "react";

import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "../../styles/home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function PresentationTwo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  videoRef.current?.play();

  return (
    <>
      <div className="presentation-container-two">
        <motion.div
          whileInView={{ x: 0, opacity: 100, transition: { duration: 0.6 } }}
          initial={{ x: 25, opacity: 0 }}
          className="presentation-text-two"
        >
          <h2 className="presentation-header">Unleash Your Roblox Vision</h2>
          <span className="presentation-paragraph">
            Experience Roblox brilliance as our team of skilled creators breathe life into your ideas, using tools like Blender that enhance your
            creations to new heights. Let your imagination run wild and watch your Roblox universe thrive like never before.
          </span>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 100, transition: { duration: 0.6 } }}
          initial={{ x: -25, opacity: 0 }}
          className="swiper-container-two"
        >
          <div>
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              loop
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide className="slider-slide">
                <div>
                  <img src="/src/resources/webp/work1.webp" alt="work" className="slider-image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider-slide">
                <div>
                  <img src="/src/resources/webp/work2.webp" alt="work" className="slider-image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider-slide">
                <div>
                  <img src="/src/resources/webp/work3.webp" alt="work" className="slider-image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider-slide">
                <div>
                  <img src="/src/resources/webp/work4.webp" alt="work" className="slider-image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider-slide">
                <div>
                  <img src="/src/resources/webp/work5.webp" alt="work" className="slider-image" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </motion.div>
      </div>
    </>
  );
}
