import { useContext, useEffect, useRef } from "react";
import Container from "@mui/material/Container";

import AboutHeaderDisplay from "../components/about/aboutHeaderDisplay";
import CountUpSection from "../components/about/countUpSection";
import AboutPresentationDisplay from "../components/about/aboutPresentationDisplay";
import WorkDisplay from "../components/home/workDisplay";

import { NavBar } from "../components/common/navbar";
import Footer from "../components/common/footer";

import { TitleContext } from "../context/TitleProvider";

import "../styles/about.css";

export default function About() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Ideal Development - About us");
  }, [setTitle]);

  useEffect(() => {
    function handleResize() {
      const curr = wrapperRef.current;
      if (curr) {
        const bottomMargin = Math.max(window.innerHeight - curr.offsetHeight - 100, 30);
        curr.style.marginBottom = bottomMargin + "px";
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div ref={wrapperRef}>
        <div className="main-navbar">
          <Container maxWidth="lg">
            <NavBar />
          </Container>
        </div>
        <AboutHeaderDisplay />
        <div>
          <h1 className="counters-wrapper-header">What we accomplished over the years.</h1>
          <CountUpSection />
        </div>
        <AboutPresentationDisplay />
        <WorkDisplay />
      </div>
      <Footer />
    </>
  );
}
