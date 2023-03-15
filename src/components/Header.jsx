import StyledHeader from "./styled/Header.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Logo from "./styled/Logo.styled";

const Header = () => {
  const header = useRef("");
  // ширина заголовка
  const [headerFullWidth, setHeaderFullWidth] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (header) {
        if (header.current.getBoundingClientRect().top === 0) {
          setHeaderFullWidth(true);
        } else {
          setHeaderFullWidth(false);
        }
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []); 

  function handleBurgerClick() {
    setMobile(true);
    // prevent page background scrolling
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  }

  function handleCloseBtnClick() {
    setMobile(false);
    // resume page scrolling
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "";
    }
  }

  return (
    <StyledHeader fullWidth={headerFullWidth} ref={header}>
      <Logo />
      <Navbar mobile={mobile} onCloseBtnClick={handleCloseBtnClick} />
      <div className="contacts">8 (800) 000 00-00</div>
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
