import { DesktopNavbar, MobileNavbar } from "./styled/Navbar.styled";
import { TfiClose } from "react-icons/tfi";
import { IconContext } from "react-icons";

const Navbar = (props) => {
  const items = (
    <ul>
      <li>
        <a href="#page-first-screen">Главная</a>
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
