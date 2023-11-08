import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./desktopHeader";
import MobileHeader from "./mobileHeader";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 939 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 938.98 });
  return isMobile ? children : null;
};

export default function Header() {
  return (
    <>
      <Desktop>
        <DesktopHeader />
      </Desktop>
      <Mobile>
        <MobileHeader />
      </Mobile>
    </>
  );
}
