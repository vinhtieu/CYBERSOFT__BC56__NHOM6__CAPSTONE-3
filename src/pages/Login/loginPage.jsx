import React from "react";
import { useMediaQuery } from "react-responsive";
import { Overlay } from "../../components";
import { LOGIN_BACKGROUND } from "../../constant";
import DesktopLogin from "./desktopLogin";
import TabletLogin from "./tabletLogin";
import MobileLogin from "./mobileLogin";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 940 });
  return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
  const isTabletLandscape = useMediaQuery({ minWidth: 666 });
  return isTabletLandscape ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 665.98 });
  return isMobile ? children : null;
};

const LoginPage = () => {
  return (
    <>
      <Desktop>
        <DesktopLogin />
      </Desktop>
      <Tablet>
        <TabletLogin />
      </Tablet>
      <Mobile>
        <MobileLogin />
      </Mobile>
    </>
  );
};

export default LoginPage;
