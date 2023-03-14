import styled from "styled-components";

const StyledWhyUs = styled.div`
  height: 522px;
  padding: 50px 75px 50px 15px;
  background: linear-gradient(106.35deg, #f6fffd 0%, #ffffff 100%);
  margin-top: 70px;
  position: relative;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-weight: 900;
    font-size: 35px;
    line-height: 50px;
  }

  .polygon2 {
    top: -20px;
    left: 94%;
  }
  .polygon6 {
    top: 88%;
    left: 98%;
  }

  .cards-container {
    width: 100%;
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 94px;
    grid-row-gap: 30px;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .card {
    max-width: 506px;
    display: flex;
    align-items: flex-start;
    gap: 15px;

    img {
      margin-top: 10px;
      @media (max-width: 480px) {
        width: 45px;
      }
    }

    h3 {
      font-weight: 900;
      font-size: 28px;
      line-height: 34px;
      @media (max-width: 768px) {
        font-size: 22px;
      }
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 25px;
    }
  }
`;

export default StyledWhyUs;
