import styled from "styled-components";

const HeroStyled = styled.div`
  background: url(./images/first-page.png),
    linear-gradient(106.35deg, #e3ffec 0%, #effff3 100%);
  background-size: 60%, 100%;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 96%;
  height: 650px;
  width: 100%;
  position: relative;
  padding-left: 15px;

  margin-top: 30px;

  @media (max-width: 768px) {
    background: linear-gradient(106.35deg, #e3ffec 0%, #effff3 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  img {
    position: absolute;
  }

  .polygon2 {
    top: -5px;
    left: -70px;
  }

  .polygon3 {
    top: 85%;
    left: 5%;
  }

  .polygon4 {
    top: 0;
    left: 95%;
  }

  .hero__hero-text {
    max-width: 704px;
    padding-top: 1px;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h1 {
      margin-top: 126px;
      font-weight: 900;
      font-size: 60px;
      line-height: 73px;
      @media (max-width: 768px) {
        font-size: 48px;
      }
      @media (max-width: 480px) {
        font-size: 32px;
      }
    }

    ul {
      text-align: start;
      margin-top: 25px;
      padding-left: 40px;
      list-style-image: url(./images/list-dot.svg);
      li {
        font-weight: 400;
        font-size: 16px;
        line-height: 25px;
        margin-top: 15px;
        max-width: 395px;
        padding-left: 10px;
      }
    }
  }
`;

export default HeroStyled;
