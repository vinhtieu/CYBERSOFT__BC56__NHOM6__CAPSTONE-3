import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import DesktopLogin from "./desktopLogin";
import TabletLogin from "./tabletLogin";
import MobileLogin from "./mobileLogin";
import { userService } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LOGGING_IN, LOG_IN, LOG_OUT, PAGE } from "../../constant";
import { navMenuSlice, userSlice } from "../../lib/redux";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 940 });
  return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
  const isTabletLandscape = useMediaQuery({ minWidth: 666, maxWidth: 939.98 });
  return isTabletLandscape ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 665.98 });
  return isMobile ? children : null;
};

const LoginPage = () => {
  const userAccount = useSelector((state) => state.user.account);
  const AccountStatus = useSelector((state) => state.user.accountStatus);
  const { setAccountStatus } = userSlice.actions;
  const { setPage } = navMenuSlice.actions;
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (AccountStatus === LOGGING_IN) {
      userService
        .requestLogin(userAccount)
        .then((res) => {
          dispatch(setAccountStatus(LOG_IN));
          localStorage.setItem("currentUser", JSON.stringify(userAccount));
          toast.success("Login Successful");
          setTimeout(() => {
            toast.remove();
            dispatch(setPage(PAGE.HOME));
            navigateTo("/");
          }, 1000);
        })
        .catch((err) => {
          dispatch(setAccountStatus(LOG_OUT));
          toast.error("Incorrect username or password");
        });
    }
  }, [AccountStatus]);

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
