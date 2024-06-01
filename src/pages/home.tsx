import { useContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { HomeNavBar } from "../components/common/navbar";
import Footer from "../components/common/footer";
import { Container } from "@mui/material";
import { motion } from "framer-motion";

import * as HomeComponents from "../components/home";
const { ContactUs, WorldMap, ReviewCards, WorkDisplay, HeaderDisplay, Presentation, PresentationTwo } = HomeComponents;

import { TitleContext } from "../context/TitleProvider";
import { useFetchMapPaths, useFetchOrders, useFetchReviews } from "../hooks/dataFetchHooks";

export default function Home() {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Ideal Development");
  }, [setTitle]);

  // TODO: implement isloading and error
  const { pathsData, isLoadingPaths, errorPaths } = useFetchMapPaths();
  const { ordersData, isLoadingOrders, errorOrders } = useFetchOrders();
  const { reviewsData, isLoadingReviews, errorReviews } = useFetchReviews();

  return (
    <div>
      <div className="home-navbar-container">
        <HomeNavBar />
      </div>
      <HeaderDisplay />
      <Presentation />
      <div>
        <h1 className="work-display-text">Order from us!</h1>
        <WorkDisplay />
      </div>
      <PresentationTwo />
      <motion.div whileInView={{ y: 0, opacity: 100, transition: { duration: 0.6 } }} initial={{ y: -25, opacity: 0 }}>
        <Container maxWidth="lg">
          <h1 className="work-display-text">
            With 5★ reviews from clients {useMediaQuery({ query: "(min-device-width: 580px)" }) ? <br /> : ""}
            all around the world on Fiverr
          </h1>
          <WorldMap pathData={pathsData} orderData={ordersData} />
        </Container>
      </motion.div>
      <ReviewCards reviewData={reviewsData} />
      <ContactUs />
      <Footer />
    </div>
  );
}
