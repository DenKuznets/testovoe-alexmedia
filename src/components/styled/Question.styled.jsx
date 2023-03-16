import { useState } from "react";
import styled from "styled-components";

const StyledQuestion = styled.div`
  box-shadow: 5px 5px 15px rgba(187, 195, 221, 0.2);
  border-radius: 20px;
  background-color: #fff;
  padding: 15px 15px 15px 30px;
  margin-bottom: 30px;
  min-height: 55px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  h4 {
    justify-content: space-between;
    display: flex;
    img {
      cursor: pointer;
      width: 15px;
    }
  }
  p {
    overflow: hidden;
    max-height: ${(props) => (props.open ? "100px" : "0")};
    transition: all 0.3s;
  }
`;

const Question = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <StyledQuestion open={open}>
      <h4>
        {props.obj}
        <img
          onClick={() => setOpen(!open)}
          src={open ? "./images/close-btn.svg" : "./images/open-btn.svg"}
          alt=""
        />
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, esse.
      </p>
    </StyledQuestion>
  );
};

export default Question;
