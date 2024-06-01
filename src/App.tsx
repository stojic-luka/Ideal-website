import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TitleProvider } from "./context/TitleProvider";

import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";

export default function App() {
  // const isMobileDevice = useMediaQuery({ query: "(min-device-width: 480px)" });
  // const isTabletDevice = useMediaQuery({ query: "(min-device-width: 768px)" });
  // const isLaptop = useMediaQuery({ query: "(min-device-width: 1024px)" });
  // const isDesktop = useMediaQuery({ query: "(min-device-width: 1200px)" });
  // const isBigScreen = useMediaQuery({ query: "(min-device-width: 1201px )" });

  return (
    <TitleProvider>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </TitleProvider>
  );
}
