import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { Button, Container, Drawer, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import "../../styles/navbar.css";

const pageLinks = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "https://www.fiverr.com/ideal_dev",
    label: "Shop",
  },
  {
    link: "/contact",
    label: "Contact",
  },
  {
    link: "/about",
    label: "About",
  },
];

interface NavButtonProps {
  toLink?: string;
  activeLink?: string;
  label: string;
  target?: boolean;
  onClickEvent?: (event: React.MouseEvent<HTMLElement>) => void;
}
const NavButton = ({ toLink = "", target, label, onClickEvent = () => {} }: NavButtonProps) => {
  return (
    <Button
      component={toLink ? Link : "button"}
      to={toLink || undefined}
      variant="text"
      size="small"
      onClick={onClickEvent}
      className={`custom-button ${useLocation().pathname === toLink ? "button-active" : ""}`}
      disableElevation
      disableFocusRipple
      disableTouchRipple
      target={target ? "_blank" : ""}
    >
      <p>{label}</p>
    </Button>
  );
};

const NavButtons = () => {
  const [burgerMenuState, setBurgerMenuState] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-device-width: 850px)" });

  if (isDesktop)
    return (
      <List>
        {pageLinks.map((page, index) => (
          <NavButton key={index} toLink={page.link} label={page.label} target={page.link.startsWith("http")} />
        ))}
      </List>
    );
  else
    return (
      <>
        <Button onClick={() => setBurgerMenuState(true)} endIcon={<MenuIcon color="action" fontSize="large" />} />
        <Drawer anchor="top" open={burgerMenuState} onClose={() => setBurgerMenuState(false)}>
          {pageLinks.map((page, index) => (
            <NavButton key={index} toLink={page.link} label={page.label} target={page.link.startsWith("http")} />
          ))}
        </Drawer>
      </>
    );
};

export const NavBar = () => {
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1401px )" });

  return (
    <>
      <Container maxWidth="lg" className="space-out">
        <Link to={"/"}>
          <picture className="">
            <source srcSet="/src/resources/svg/logo-small.svg" media="(max-width: 500px)" height="50px" />
            <img src="/src/resources/svg/logo.svg" alt="IdealDev" height={isBigScreen ? "60px" : "50px"} />
          </picture>
        </Link>
        <NavButtons />
      </Container>
    </>
  );
};

export const HomeNavBar = () => {
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1401px )" });

  return (
    <>
      <Container maxWidth="lg" className="space-out">
        <div className="home-navbar">
          <Link to={"/"}>
            <picture>
              <source srcSet="/src/resources/svg/logo-small-white.svg" media="(max-width: 500px)" height="50px" />
              <img src="/src/resources/svg/logo-white.svg" alt="IdealDev" height={isBigScreen ? "60px" : "50px"} />
            </picture>
          </Link>
          <NavButtons />
        </div>
      </Container>
    </>
  );
};
