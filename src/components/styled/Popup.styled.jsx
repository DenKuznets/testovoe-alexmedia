import styled from "styled-components";
import Button from "./Button.styled";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useRef } from "react";

const StyledPopup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .popup-container {
    position: relative;
    width: 50%;
    background-color: rgb(222, 226, 242);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 30px;
    border-radius: 30px;
    h3,
    h4,
    button,
    input {
      width: 100%;
      margin-bottom: 20px;
    }
    h3 {
      @media (max-width: 1024px) {
        font-size: 1.2em;
      }
    }
    h4 {
      @media (max-width: 1024px) {
        font-size: 1em;
      }
    }

    input {
      background-color: rgb(222, 226, 242);
      padding: 0 20px;
      border-radius: 30px;
      height: 60px;
      border: 1px solid #505178;
    }
  }

  .close-btn {
    position: absolute;
    top: 5%;
    left: 90%;
    cursor: pointer;
  }
`;

const Popup = (props) => {
  const input = useRef('');
  function closePopup(e) {
    if (e.target.classList.contains("popup")) {
      props.closePopup();      
    }
  }

  function checkAnser() {
    if (input.current.value === '4') {
      console.log(props.form.current.submit());
    }
  }
  
  return (
    <StyledPopup className="popup" onClick={(e) => closePopup(e)}>
      <div className="popup-container">
        <h3>Подтвердите что вы не робот. Ответьте на вопрос</h3>
        <h4>Сколько будет два плюс два?</h4>
        <input ref={input} type="text" />
        <Button onClick={checkAnser}>Ответить</Button>
        <IconContext.Provider
          value={{
            size: "2em",
            color: "black",
            className: "close-btn",
          }}
        >
          <div className="close-btn" onClick={props.closePopup}>
            <AiOutlineClose />
          </div>
        </IconContext.Provider>
      </div>
    </StyledPopup>
  );
};

export default Popup;
