import { useRef, useContext, useEffect } from "react";
import Container from "@mui/material/Container";
import { useLocation } from "react-router-dom";

import { NavBar } from "../components/common/navbar";
import Footer from "../components/common/footer";

import SubmitForm from "../components/contact/submitForm";
import SocialMediaDisplay from "../components/contact/socialMediaDisplay";

import { TitleContext } from "../context/TitleProvider";

export default function Contact() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Ideal Development - Contact");
  }, [setTitle]);

  const searchParams = new URLSearchParams(useLocation().search);
  if (searchParams.get("success")) {
    if (wrapperRef.current) {
      wrapperRef.current.style.paddingBottom = "175px";
    }
  }

  return (
    <>
      <div className="main-navbar">
        <Container maxWidth="lg">
          <NavBar />
        </Container>
      </div>
      <div className="wrapper">
        <div className="container-main" ref={wrapperRef}>
          <h1>Check us out here</h1>
          <SocialMediaDisplay />
          <h1>Or write us a letter</h1>
          <SubmitForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
