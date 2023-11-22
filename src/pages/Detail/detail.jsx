import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
// import BigDesktopLogin from "./bigDesktopLogin";
import BigDesktopDetail from "./bigDesktopDetail";
import DesktopDetail from "./desktopDetail";
import TabletLandscapeDetail from "./tabletLandscapeDetail";
import TabletPortraitDetail from "./tabletPortraitDetail";
import MobileDetail from "./mobileDetail";
// import MobileLogin from "./mobileLogin";
// import { userService } from "../../services";
// import { useDispatch, useSelector } from "react-redux";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { LOG_IN, LOG_OUT, PAGE, LOGGING_IN } from "../../constant";
// import { navMenuSlice, userSlice } from "../../lib/redux";

const BigDesktop = ({ children }) => {
  const isBigDesktop = useMediaQuery({ minWidth: 1400 });
  return isBigDesktop ? children : null;
};
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1150, maxWidth: 1399.98 });
  return isDesktop ? children : null;
};

const TabletLandscape = ({ children }) => {
  const isTabletLandscape = useMediaQuery({ minWidth: 940, maxWidth: 1149.98 });
  return isTabletLandscape ? children : null;
};

const TabletPortrait = ({ children }) => {
  const isTabletPortrait = useMediaQuery({ minWidth: 666, maxWidth: 939.98 });
  return isTabletPortrait ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 665.98 });
  return isMobile ? children : null;
};

const LoginPage = () => {
  return (
    <>
      <BigDesktop>
        <BigDesktopDetail />
      </BigDesktop>
      <Desktop>
        <DesktopDetail />
      </Desktop>
      <TabletLandscape>
        <TabletLandscapeDetail />
      </TabletLandscape>
      <TabletPortrait>
        <TabletPortraitDetail />
      </TabletPortrait>
      <Mobile>
        <MobileDetail />
      </Mobile>

      {/* <Tablet>
        <TabletLogin />
      </Tablet>
      <Mobile>
        <MobileLogin />
      </Mobile> */}
    </>
  );
};

export default LoginPage;
