import React, { useState } from "react";
import Button from "./styled/Button.styled";
import StyledFeedback from "./styled/Feedback.styled";

const Feedback = () => {
  const [open, setOpen] = useState(false);
  let questionsText = [];
  for (let index = 0; index < 4; index++) {
    questionsText.push(`Вопрос${index + 1}`);
  }
  let questionElements = questionsText.map((obj, index) => {
    return (
      <div className="question" key={index}>
        <h4>
          {obj}
          <img
            onClick={() => setOpen(!open)}
            src={open ? "./images/close-btn.svg" : "./images/open-btn.svg"}
            alt=""
          />
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, esse.
        </p>
      </div>
    );
  });

  return (
    <StyledFeedback>
      <div className="form-container">
        <h2>Позвоним в удобное время</h2>
        <p>
          Заполните форму обратной связи и уточните время, когда удобно
          поговорить.
        </p>
        <form>
          <input placeholder="Телефон" type="number" />
          <input placeholder="Комментарий" type="text" />
          <Button>Оставить заявку</Button>
        </form>
      </div>
      <div className="questions-container">{questionElements}</div>
    </StyledFeedback>
  );
};

export default Feedback;
