import React from "react";
import { Header, Footer, LoadingScreen } from "../components";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

export default function Layout({ children }) {
  const isLoading = useSelector((state) => state.loadingScreen.isOn);
  const isNavMenuOpen = useSelector((state) => state.navMenu.isOpen);

  return (
    <>
      <div
        className={`${
          isNavMenuOpen || isLoading ? "overflow-hidden w-screen h-screen" : ""
        } min-h-screen flex flex-col `}>
        <CSSTransition
          in={isLoading}
          timeout={{
            appear: 1000,
            enter: 1000,
            exit: 1000,
          }}
          classNames="component"
          unmountOnExit
          appear={true}>
          <LoadingScreen />
        </CSSTransition>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

{
  /* <CSSTransition
          in={!isLoading}
          timeout={{
            appear: 500,
            enter: 500,
            exit: 1000,
          }}
          classNames="component"
          unmountOnExit
          appear={true}>
          <>
            <Header />
            {children}
            <Footer />
          </>
        </CSSTransition> */
}
