import { DesktopNavbar, MobileNavbar } from "./styled/Navbar.styled";
import { TfiClose } from "react-icons/tfi";
import { IconContext } from "react-icons";

const Navbar = (props) => {
  const items = (
    <ul>
      <li>
        <a onClick={props.handleLinkClick} href="#">
          Главная
        </a>
      </li>
      <li>
        <a onClick={props.handleLinkClick} href="#why-us">
          Разработка
        </a>
      </li>
      <li>
        <a onClick={props.handleLinkClick} href="#easy-work">
          Продвижение
        </a>
      </li>
      <li>
        <a onClick={props.handleLinkClick} href="#prices">
          Портфолио
        </a>
      </li>
      <li>
        <a onClick={props.handleLinkClick} href="#contact-us">
          Контакты
        </a>
      </li>
    </ul>
  );
  return props.mobile ? (
    <MobileNavbar>
      <IconContext.Provider
        value={{
          size: "2em",
          color: "rgb(189,189,239)",
          className: "close-btn",
        }}
      >
        <div>
          <TfiClose onClick={props.onCloseBtnClick} />
        </div>
        {items}
      </IconContext.Provider>
    </MobileNavbar>
  ) : (
    <DesktopNavbar>{items}</DesktopNavbar>
  );
};

export default Navbar;
