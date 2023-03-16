import styled from "styled-components";

const StyledPrices = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .cards-container {
    display: flex;
    margin-top: 40px;
    gap: 30px;
    @media (max-width: 768px) {
      flex-direction: column;
      width: 80%;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 22px;
    border-radius: 30px;
    height: 655px;
    max-width: 380px;
    box-shadow: 5px 5px 20px rgba(30, 83, 210, 0.1);
    @media (max-width: 768px) {
      height: auto;
    }

    ul {
      text-align: start;
      margin-top: 25px;
      margin-bottom: auto;
      padding-left: 20px;
      list-style-image: url(./images/list-dot-small.png);
      @media (max-width: 768px) {
        margin-bottom: 20px;
      }
      li {
        font-weight: 400;
        font-size: 16px;
        line-height: 25px;
        margin-top: 15px;
        max-width: 395px;
        padding-left: 10px;
      }
    }
    .price {
      font-weight: 900;
      font-size: 45px;
      line-height: 55px;
      margin-bottom: 20px;
    }
  }

  .card0 {
    background: linear-gradient(
      161.52deg,
      #f6f6ff 0%,
      #f8f8ff 0%,
      #edeeff 0.01%,
      #fafaff 100%
    );
  }

  .card1 {
    background: linear-gradient(161.52deg, #fffdf4 0%, #fffef9 100%);
  }

  .card2 {
    background: linear-gradient(161.52deg, #effff4 0%, #f8fffa 100%);
  }
`;

export default StyledPrices;
