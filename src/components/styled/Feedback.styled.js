import styled from "styled-components";

const StyledFeedback = styled.div`
  position: relative;
  display: flex;
  margin-top: 70px;
  gap: 62px;
  justify-content: space-between;
  padding: 50px 15px;
  background: linear-gradient(
    106.35deg,
    #eff5ff 0%,
    rgba(194, 219, 255, 0) 100%
  );
  min-height: 507px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .form-container {
    align-items: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    h2 {
      z-index: 2;
    }
    p {
      margin-top: 40px;
      max-width: 470px;
      z-index: 2;
    }
    form {
      display: flex;
      flex-direction: column;
      max-width: 470px;
      width: 100%;
      input {
        width: 100%;
        margin-top: 30px;
        height: 60px;
        border-radius: 30px;
        border: 1px solid #505178;
        padding: 0 20px;
        background: linear-gradient(
          106.35deg,
          #eff5ff 0%,
          rgba(194, 219, 255, 0) 100%
        );
      }
      button {
        margin-top: 30px;
        width: 100%;
      }
    }
  }

  .form__phone {
    outline: ${(props) => (props.correct ? "" : "2px solid red")};
  }

  .incorrect-phone {
    display: ${(props) => (props.correct ? "none" : "flex")};
    margin-top: 5px;
    color: red;
    /* display: flex; */
    align-items: center;
    p {
      margin: 0;
      padding: 0;
      font-size: 0.8em;
    }

    span {
      margin-right: 10px;
    }
  }

  .questions-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
  }

  .polygon1 {
    top: 80%;
    left: 80%;
  }
  .polygon2 {
    top: -10%;
    z-index: -1;
    left: 90%;
  }
  .polygon4 {
    top: 25%;
    z-index: 1;
    left: -5%;   
  }
`;
export default StyledFeedback;
