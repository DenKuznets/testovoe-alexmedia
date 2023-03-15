import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  padding: 0 28px 0 10px;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 5px 5px 20px rgba(30, 83, 210, 0.1);
  border-radius: 20px;
  border-radius: ${(props) => (props.fullWidth ? "0" : "20px")};
  max-width: 1200px;
  max-width: ${(props) => (props.fullWidth ? "100%" : "1200px")};
  margin: auto;
  height: 60px;
  margin-top: 10px;
  position: sticky;
  top: 0;
  z-index: 1;
  /* outline: 1px solid red; */
  @media (max-width: 1024px) {
    justify-content: start;
  }  

  .contacts {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }

  .burger {
    display: none;
    cursor: pointer;
    @media (max-width: 1024px) {
      display: block;
      margin-left: 40px;
    }
  }
`;

export default StyledHeader;
