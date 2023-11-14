import React from "react";
import { Header, Footer, LoadingScreen } from "../components";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

export default function Layout({ children }) {
  const isLoading = useSelector((state) => state.loadingScreen.isOn);
  const isNavMenuOpen = useSelector((state) => state.navMenu.isOpen);

  return (
    <>
      <CSSTransition
        in={isLoading}
        timeout={{
          appear: 300,
          enter: 300,
          exit: 300,
        }}
        classNames="component"
        unmountOnExit
        appear={true}>
        <LoadingScreen />
      </CSSTransition>
      <div
        className={`${
          isNavMenuOpen || isLoading ? "overflow-hidden  opacity-0" : ""
        } min-h-screen flex flex-col opacity-100 transition-all `}>
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
