import StyledHeader from "./styled/Header.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useRef, useEffect, useState } from "react";

const Header = () => {
  const header = useRef("");
  // ширина заголовка
  const [fullWidth, setFullWidth] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (header) {
        if (header.current.getBoundingClientRect().top === 0) {
          setFullWidth(true);
        } else {
          setFullWidth(false)
        }
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <StyledHeader fullWidth={fullWidth} ref={header}>
      <div className="logo">
        <div className="logo__name">
          Alex <br /> Media
        </div>
        <div className="logo__devider"></div>
        <div className="logo__text">
          Веб-студия <br /> Создание сайтов под ключ
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Разработка</a>
          </li>
          <li>
            <a href="#">Продвижение</a>
          </li>
          <li>
            <a href="#">Портфолио</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
      <div className="contacts">8 (800) 000 00-00</div>
      <div className="menu">
        <IconContext.Provider
          value={{
            size: "2em",
            color: "rgb(93,96,239)",
            className: "global-class-name",
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
