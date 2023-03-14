import styled from "styled-components";

const StyledPartners = styled.div`
  text-align: center;
  margin-top: 40px;
  .images {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }
    img {
      max-width: 25%;
      @media (max-width: 480px) {
        max-width: 100%;
      }
    }
  }
`;
export default function Partners() {
  return (
    <StyledPartners>
      <h2>Мы официальные парнеты</h2>
      <div className="images">
        <img src="./images/1c-bitrix.png" alt="" />
        <img src="./images/yandex.png" alt="" />
        <img src="./images/bitrix.png" alt="" />
        <img src="./images/beget.png" alt="" />
      </div>
    </StyledPartners>
  );
}
