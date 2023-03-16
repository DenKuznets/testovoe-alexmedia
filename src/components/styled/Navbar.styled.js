import styled from "styled-components";
import { screen } from "../../../utils";

export const StyledNavbar = styled.nav`
  @media (max-width: ${screen.screen992}) {
    min-height: ${(props) => (props.mobile ? "100vh" : "0")};
    max-height: 0;
    width: 100vw;
    background-color: rgba(20, 22, 64, 0.95);
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.4s;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 37px;
    padding: 0;
    @media (max-width: ${screen.screen992}) {
      display: flex;
      flex-direction: column;
      gap: 20px;
      list-style: none;
      padding: 0;
    }
  }
  li {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
  a {
    text-decoration: none;
    color: #03032c;
    @media (max-width: ${screen.screen992}) {
      color: white;
    }

    &:hover {
      font-weight: 700;
      color: #5d5fef;
    }
  }
  .nav__close-btn {
    display: ${(props) => (props.mobile ? "block" : "none")};
    position: absolute;
    top: 20px;
    left: 90%;
    cursor: pointer;
  }
`;