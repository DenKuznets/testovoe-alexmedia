import { StyledNavbar } from "./styled/Navbar.styled";
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
  return (
    <StyledNavbar mobile={props.mobile}>
      <IconContext.Provider
        value={{
          size: "2em",
          color: "rgb(189,189,239)",
          className: "close-btn",
        }}
      >
        <div className="nav__close-btn">
          <TfiClose onClick={props.onCloseBtnClick} />
        </div>
      </IconContext.Provider>
      {items}
    </StyledNavbar>
  );
};

export default Navbar;
