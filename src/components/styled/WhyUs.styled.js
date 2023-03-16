import styled from "styled-components";

const StyledWhyUs = styled.div`
  min-height: 522px;
  padding: 50px 75px 50px 15px;
  background: linear-gradient(106.35deg, #f6fffd 0%, #ffffff 100%);
  margin-top: 70px;
  position: relative;
  z-index: 3;
  border-radius: 30px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    position: relative;
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
  }
`;

export default StyledWhyUs;
