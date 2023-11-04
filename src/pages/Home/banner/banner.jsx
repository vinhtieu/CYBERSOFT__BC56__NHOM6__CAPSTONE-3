import { useMediaQuery } from "react-responsive";
import BannerBigDesktop from "./bannerBigDesktop";
import BannerDesktop from "./bannerDesktop";
import BannerTabletLandscape from "./bannerTabletLandscape";
import BannerTabletPortrait from "./bannerTabletPortrait";
import BannerMobile from "./bannerMobile";

const BigDesktop = ({ children }) => {
  const isBigDesktop = useMediaQuery({ minWidth: 1670 });
  return isBigDesktop ? children : null;
};
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 1670 });
  return isDesktop ? children : null;
};

const TabletLandscape = ({ children }) => {
  const isTabletLandscape = useMediaQuery({ minWidth: 940, maxWidth: 1280 });
  return isTabletLandscape ? children : null;
};

const TabletPortrait = ({ children }) => {
  const isTabletPortrait = useMediaQuery({ minWidth: 666, maxWidth: 940 });
  return isTabletPortrait ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 665.98 });
  return isMobile ? children : null;
};

const Banner = () => (
  <div>
    <BigDesktop>
      <BannerBigDesktop />
    </BigDesktop>
    <Desktop>
      <BannerDesktop />
    </Desktop>
    <TabletLandscape>
      <BannerTabletLandscape />
    </TabletLandscape>
    <TabletPortrait>
      <BannerTabletPortrait />
    </TabletPortrait>
    <Mobile>
      <BannerMobile />
    </Mobile>
  </div>
);

export default Banner;
