import styled from "styled-components";

const Button = styled.button`
  height: 65px;
  background: linear-gradient(93.32deg, #ef2555 0%, #ff3767 100%);
  box-shadow: 0px 0px 15px rgba(255, 66, 89, 0.5);
  cursor: pointer;
  border-radius: 30px;
  border: none;
  font-weight: 900;
  font-size: 20px;
  line-height: 27px;
  color: #fff;
  width: ${(props) => (props.width ? props.width + "px" : "270px")};
  &:hover {
    background: #af3775;
  }
  &:active {
    transform: scale(0.95);
  }
  /* &:focus {
    transform: scale(0.95);
  } */
`;

export default Button;
