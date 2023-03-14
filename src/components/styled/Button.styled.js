import styled from "styled-components";

const Button = styled.button`
  height: 65px;
  background: linear-gradient(93.32deg, #ef2555 0%, #ff3767 100%);
  box-shadow: 0px 0px 15px rgba(255, 66, 89, 0.5);
  border-radius: 30px;
  border: none;
  font-weight: 900;
  font-size: 20px;
  line-height: 27px;
  color: #fff;
  width: ${(props) => props.width? props.width : "270px"}
`;

export default Button;
