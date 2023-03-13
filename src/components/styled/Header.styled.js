import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  padding: 0 28px 0 10px;
  align-items: center;
  justify-content: space-between;
  color: #03032c;
  background: #ffffff;
  box-shadow: 5px 5px 20px rgba(30, 83, 210, 0.1);
  border-radius: 20px;
  border-radius: ${(props) => (props.fullWidth ? "0" : "20px")};
  max-width: 1200px;
  max-width: ${(props) => (props.fullWidth ? "100%" : "1200px")};
  margin: auto;
  height: 60px;
  margin-top: 10px;
  position: sticky;
  top: 0;
  /* outline: 1px solid red; */
  @media (max-width: 1024px) {
    justify-content: start;
  }

  .logo {
    display: flex;
    align-items: center;
    @media (max-width: 1024px) {
      margin-right: auto;
    }
    .logo__name {
      font-weight: 900;
      text-align: end;
      font-size: 20px;
      line-height: 24px;
    }
    .logo__devider {
      height: 40px;
      border: 1px solid #03032c;
      width: 1px;
      margin: 0 15px;
    }
    .logo__text {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }
  }

  nav {
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
  }

  .contacts {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }

  .menu {
    display: none;
    cursor: pointer;
    @media (max-width: 1024px) {
      display: block;
      margin-left: 40px;
    }
  }
`;

export default StyledHeader;
