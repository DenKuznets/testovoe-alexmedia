import styled from "styled-components";

const StyledWhyUs = styled.div`
  height: 522px;
  padding: 50px 15px;
  background: linear-gradient(106.35deg, #f6fffd 0%, #ffffff 100%);

  .cards-container {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    /* grid-column-gap: 0px; */
    /* grid-row-gap: 0px; */
  }

  .card {
    max-width: 400px;
    
  }

  .card__text {

  }

  h2 {
    font-weight: 900;
    font-size: 35px;
    line-height: 50px;
  }

  h3 {
    font-weight: 900;
    font-size: 28px;
    line-height: 34px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    /* or 156% */
  }
`;

export default StyledWhyUs;
