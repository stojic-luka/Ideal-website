import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../styles/home.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface workDisplayCard {
  headerImage: string;
  headerText: string;
  description: string;
  gigLink: string;
}
export default function WorkDisplay() {
  const info: workDisplayCard[] = [
    {
      headerImage: "/src/resources/webp/work7.webp",
      headerText: "Scripting Gig",
      description:
        "Unlock new possibilities for your Roblox game with our expert scripting services, tailored to enhance gameplay and bring your ideas to life.",
      gigLink:
        "https://www.fiverr.com/ideal_dev/make-a-high-quality-roblox-script?context_referrer=user_page&ref_ctx_id=66bf31964bc803e7680e169e846e3f81&pckg_id=1&pos=3&imp_id=1cff07b9-30a7-451e-aad3-72e448f81ce7",
    },
    {
      headerImage: "/src/resources/webp/work2.webp",
      headerText: "Full Game Creation Gig",
      description: "Turn your vision into reality with our skilled team, creating a captivating and immersive Roblox game that players will love.",
      gigLink:
        "https://www.fiverr.com/ideal_dev/build-a-complete-roblox-game-for-you?context_referrer=user_page&ref_ctx_id=66bf31964bc803e7680e169e846e3f81&pckg_id=1&pos=1&imp_id=99c82e33-4356-439f-b56f-94fef11b2acf",
    },
    {
      headerImage: "/src/resources/webp/work6.webp",
      headerText: "Map and Asset Creation Gig",
      description: "Elevate your Roblox experience with our skilled map and model design services, adding depth and creativity to your world.",
      gigLink:
        "https://www.fiverr.com/ideal_dev/build-a-whole-game-map-in-roblox-studio?context_referrer=user_page&ref_ctx_id=66bf31964bc803e7680e169e846e3f81&pckg_id=1&pos=2&imp_id=96a57ed9-0267-423d-a9a0-aec1392568cb",
    },
  ];

  const [numOfCards, setNumOfCards] = useState(1);
  const isWideScreen = useMediaQuery({ query: "(min-device-width: 1251px )" });
  const isMediumScreen = useMediaQuery({ query: "(min-device-width: 926px )" });
  const isSmallScreen = useMediaQuery({ query: "(min-device-width: 700px )" });

  useEffect(() => {
    if (isWideScreen) setNumOfCards(3);
    else if (isMediumScreen || isSmallScreen) setNumOfCards(2);
    else setNumOfCards(1);
  }, [isWideScreen, isMediumScreen, isSmallScreen]);

  return (
    <>
      <motion.div
        whileInView={{ y: 0, opacity: 100, transition: { duration: 0.6 } }}
        initial={{ y: -25, opacity: 0 }}
        className="swiper-work-container"
      >
        <div>
          <div>
            <Swiper modules={[Navigation]} slidesPerView={numOfCards} navigation>
              {info.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="work-display-card">
                    <img src={data.headerImage} alt="MapImage" className="work-display-image" />
                    <div>
                      <h3 className="work-display-header-text">{data.headerText}</h3>
                      <span className="work-display-description">{data.description}</span>
                      <div className="work-display-button-container">
                        <Button
                          component={Link}
                          to={data.gigLink}
                          variant="contained"
                          size="small"
                          disableElevation
                          disableFocusRipple
                          disableTouchRipple
                        >
                          See on Fiverr
                        </Button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </>
  );
}
