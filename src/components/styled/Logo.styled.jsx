import styled from "styled-components";
import { screen } from "../../../utils";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${screen.screen992}) {
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
    @media (max-width: ${screen.screen768}) {
      font-size: 10px;
    }
  }
`;

const Logo = () => {
  return (
    <StyledLogo className="logo">
      <div className="logo__name">
        Alex <br /> Media
      </div>
      <div className="logo__devider"></div>
      <div className="logo__text">
        Веб-студия <br /> Создание сайтов под ключ
      </div>
    </StyledLogo>
  );
};

export default Logo;
