import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  BigDesktopBanner,
  DesktopBanner,
  TabletLandscapeBanner,
  TabletPortraitBanner,
  MobileBanner,
} from "./banner";

import {
  BigDesktopContent,
  DesktopContent,
  TabletLandscapeContent,
  TabletPortraitContent,
  MobileContent,
} from "./content";

const BigDesktop = ({ children }) => {
  const isBigDesktop = useMediaQuery({ minWidth: 1670 });
  return isBigDesktop ? children : null;
};
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 1669.98 });
  return isDesktop ? children : null;
};

const TabletLandscape = ({ children }) => {
  const isTabletLandscape = useMediaQuery({ minWidth: 940, maxWidth: 1279.98 });
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

const HomeContent = () => {
  return (
    <>
      <BigDesktop>
        <BigDesktopBanner />
        <BigDesktopContent />
      </BigDesktop>
      <Desktop>
        <DesktopBanner />
        <DesktopContent />
      </Desktop>
      <TabletLandscape>
        <TabletLandscapeBanner />
        <TabletLandscapeContent />
      </TabletLandscape>
      <TabletPortrait>
        <TabletPortraitBanner />
        <TabletPortraitContent />
      </TabletPortrait>
      <Mobile>
        <MobileBanner />
        <MobileContent />
      </Mobile>
    </>
  );
};

export default HomeContent;
