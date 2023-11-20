import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { userService } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  FAILED,
  LOGGING_IN,
  LOG_IN,
  LOG_OUT,
  PAGE,
  PROCESSING,
  REGISTER,
  REGISTERED,
  STAND_BY,
} from "../../constant";
import { navMenuSlice, userSlice } from "../../lib/redux";
import DesktopRegister from "./desktopRegister";
import TabletRegister from "./tabletRegister";
import MobileRegister from "./mobileRegister";

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

const RegisterPage = () => {
  const registerAccount = useSelector((state) => state.user.registerAccount);
  const registerStatus = useSelector((state) => state.user.registerStatus);
  const { setRegisterStatus } = userSlice.actions;
  const { setPage } = navMenuSlice.actions;
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (registerStatus === PROCESSING) {
      const toastId = toast.loading("Loading", {
        style: {
          minWidth: "250px",
        },
      });
      userService
        .requestRegister(registerAccount)
        .then((res) => {
          dispatch(setRegisterStatus(REGISTERED));
          toast.success("Register Successful", {
            id: toastId,
            style: {
              minWidth: "250px",
            },
          });
          setTimeout(() => {
            toast.remove();
            dispatch(setRegisterStatus(STAND_BY));
            dispatch(setPage(PAGE.HOME));
            navigateTo("/");
          }, 1000);
        })
        .catch((err) => {
          dispatch(setRegisterStatus(FAILED));
          console.log(err);
          toast.error(`${err}`, {
            id: toastId,
            style: {
              minWidth: "250px",
            },
          });
        });
    }
  }, [registerStatus]);

  return (
    <>
      <Desktop>
        <DesktopRegister />
      </Desktop>
      <Tablet>
        <TabletRegister />
      </Tablet>
      <Mobile>
        <MobileRegister />
      </Mobile>
    </>
  );
};

export default RegisterPage;
