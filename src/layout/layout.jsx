import React from "react";
import { Header, Footer, LoadingScreen } from "../components";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

export default function Layout({ children }) {
  const isLoadingScreenOn = useSelector((state) => state.loadingScreen.isOn);
  const isNavMenuOpen = useSelector((state) => state.navMenu.isOpen);

  return (
    <div
      className={`${
        isNavMenuOpen ? "h-screen overflow-hidden" : "min-h-screen"
      } `}>
      <CSSTransition
        in={isLoadingScreenOn}
        timeout={{
          appear: 500,
          enter: 500,
          exit: 500,
        }}
        classNames="component"
        unmountOnExit
        appear={true}>
        <LoadingScreen />
      </CSSTransition>

      <Header />
      <CSSTransition
        in={!isLoadingScreenOn}
        timeout={{
          appear: 500,
          enter: 500,
          exit: 0,
        }}
        classNames="component"
        unmountOnExit
        appear={true}>
        {children}
      </CSSTransition>
      <Footer />
    </div>
  );
}
