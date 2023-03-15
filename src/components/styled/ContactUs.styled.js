import styled from "styled-components";

const StyledContactUs = styled.div`
  margin-top: 70px;
  display: flex;
  position: relative;
  min-height: 300px;
  background: linear-gradient(
    106.35deg,
    #fffcf2 0%,
    #fffdfa 100%,
    #fffdfa 100%
  );
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 15px;
  }

  .text-container {
    padding: 50px 15px;
    flex: 1;
    max-width: 50%;
    @media (max-width: 768px) {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .contacts {
    display: flex;
    gap: 28px;
    ul {
      list-style: none;
      padding: 0;
      li {
        font-size: 16px;
        line-height: 25px;
      }
    }
    .text-right {
      font-weight: 700;
    }
  }

  .icons-container {
    display: flex;
    gap: 32px;
    align-items: center;
  }

  iframe {
    flex: 1;
    width: 50%;
    height: 350px;
    position: absolute;
    border-radius: 30px;
    border: none;
    top: 50%;
    left: 49%;
    transform: translateY(-50%);
    @media (max-width: 768px) {
      flex: unset;
      position: static;
      width: 80%;
      margin: auto;
      margin-top: 20px;
      height: 350px;
      transform: none;
    }
  }
`;

export default StyledContactUs;
