import StyledHeader from "./styled/Header.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Logo from "./styled/Logo.styled";
import { preventScroll, resumeScroll } from "../../utils";

const Header = () => {
  const header = useRef();
  // header width
  const [headerFullWidth, setHeaderFullWidth] = useState(false);
  const [mobile, setMobile] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      if (header) {
        if (header.current.getBoundingClientRect().top <= 0) {
          setHeaderFullWidth(true);
        } else {
          setHeaderFullWidth(false);
        }
      }
    };

    const onResize = () => {
      // закрыть мобильное меню при изменении экрана
      if (mobile && window.innerWidth > 992) {
        handleCloseBtnClick();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    // clean up code
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [mobile]);

  function handleBurgerClick() {
    setMobile(true);
    preventScroll();
  }

  function handleCloseBtnClick() {
    setMobile(false);
    resumeScroll();
  }

  return (
    <StyledHeader fullWidth={headerFullWidth} ref={header}>
      <Logo />
      <Navbar
        handleLinkClick={handleCloseBtnClick}
        mobile={mobile}
        onCloseBtnClick={handleCloseBtnClick}
      />
      <div className="contacts">
        <a href="tel:+88000000000">8 (800) 000 00-00</a>
      </div>
      <div className="burger" onClick={handleBurgerClick}>
        <IconContext.Provider
          value={{
            size: "2em",
            color: "rgb(93,96,239)",
          }}
        >
          <div>
            <GiHamburgerMenu />
          </div>
        </IconContext.Provider>
      </div>
    </StyledHeader>
  );
};

export default Header;
