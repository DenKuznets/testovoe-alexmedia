import styled from "styled-components";
import { screen } from "../../../utils";

const StyledHeader = styled.header`
  display: flex;
  padding: 0 28px 0 10px;
  align-items: center;
  justify-content: space-between;
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
  z-index: 999;
  @media (max-width: ${screen.screen992}) {
    justify-content: start;
  }

  .contacts {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    @media (max-width: ${screen.screen768}) {
      font-size: 10px;
    }
  }

  .burger {
    display: none;
    cursor: pointer;
    @media (max-width: ${screen.screen992}) {
      display: block;
      margin-left: 40px;
    }
    @media (max-width: ${screen.screen480}) {
      margin-left: 5px;
    }
  }
`;

export default StyledHeader;
