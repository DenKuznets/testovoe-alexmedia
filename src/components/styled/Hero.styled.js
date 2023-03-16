import styled from "styled-components";

const HeroStyled = styled.div`
  background: linear-gradient(106deg, #e3ffec 0%, #effff3 100%);
  margin-top: 30px;
  min-height: 650px;
  padding-left: 15px;
  padding-right: 23px;
  display: flex;
  position: relative;
  justify-content: flex-end;
  z-index: -2;
  border-radius: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }

  .hero__hero-image {
    max-width: 65%;
    position: relative;
  }

  .hero__btn {
    margin-top: 20px;
  }

  .hero__hero-text {
    left: 10px;
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 1;

    @media (max-width: 768px) {
      position: relative;
      text-align: center;
      align-items: center;
    }

    h1 {
      margin-top: 126px;
      @media (max-width: 768px) {
        margin-top: 20px;
      }
    }

    ul {
      text-align: start;
      margin-top: 25px;
      padding-left: 20px;
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

  .polygon2 {
    top: -5px;
    left: -70px;
  }

  .polygon3 {
    top: 90%;
    left: 5%;
  }

  .polygon4 {
    top: 0;
    left: 95%;
  }
`;

export default HeroStyled;
