import styled from "styled-components";

export const DesktopNavbar = styled.nav`
  @media (max-width: 1024px) {
    display: none;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 37px;
    padding: 0;
  }
  li {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
  a {
    text-decoration: none;
    color: #03032c;
    
    &:hover {
      color: #5d5fef;
    }
  }
`;

export const MobileNavbar = styled.nav`
  min-height: 100vh;
  width: 100vw;
  background-color: rgba(20, 22, 64, 0.95);
  position: absolute;
  z-index: 999;
  top: -10px;
  left: 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
    padding: 0;
  }
  a {
    color: white;
    text-decoration: none;
  }
  .close-btn {
    position: absolute;
    top: 20px;
    left: 90%;
    cursor: pointer;
  }
`;
