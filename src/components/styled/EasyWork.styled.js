import styled from "styled-components";
import { screen } from "../../../utils";

const EasyWorkStyled = styled.div`
  margin-top: 70px;
  min-height: 700px;
  padding-left: 20px;
  padding-right: 23px;
  display: flex;
  position: relative;
  justify-content: space-between;
  z-index: -2;
  border-radius: 30px;
  @media (max-width: ${screen.screen768}) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }

  .easywork__easywork-image {
    margin-top: 50px;
    position: relative;
  }

  .easywork__easywork-text {
    display: flex;
    flex-direction: column;
    max-width: 40%;
    position: relative;

    @media (max-width: ${screen.screen768}) {
      max-width: 80%;
      position: relative;
      text-align: center;
      align-items: center;
    }

    h2 {
      margin-top: 126px;
      @media (max-width: ${screen.screen768}) {
        margin-top: 40px;
      }
    }

    p {
      margin-top: 40px;
    }

    ul {
      text-align: start;
      margin-top: 25px;
      padding-left: 20px;
      list-style-image: url(./images/list-dot-small.png);
      li {
        font-weight: 700;
        font-size: 16px;
        line-height: 25px;
        margin-top: 15px;
        max-width: 395px;
        padding-left: 10px;
      }
    }
  }

  .polygon1 {
    top: -5%;
    left: 40%;
  }

  .polygon5 {
    top: 90%;
    left: -5%;
  }
`;

export default EasyWorkStyled;
