import { useRef, useState } from "react";
import Button from "./styled/Button.styled";
import StyledFeedback from "./styled/Feedback.styled";
import Question from "./styled/Question.styled";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import Popup from "./styled/Popup.styled";
import Polygon from "./Polygon";
import { preventScroll } from "../../utils";

const Feedback = () => {
  const [correct, setCorrect] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef('');
  let questionsText = [];
  for (let index = 0; index < 4; index++) {
    questionsText.push(`Вопрос${index + 1}`);
  }
  let questionElements = questionsText.map((obj, index) => {
    return <Question obj={obj} key={index} />;
  });

  function handleSubmit(e) {
    e.preventDefault();
    let form = e.target;
    let regexp =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

    if (regexp.test(form.elements.phone.value)) {
      setShowPopup(true);
      preventScroll();
    } else {
      setCorrect(false);
    }
  }

  return (
    <StyledFeedback correct={correct}>
      {showPopup && <Popup form={form} closePopup={() => setShowPopup(false)} />}
      <div className="form-container">
        <h2>Позвоним в удобное время</h2>
        <p>
          Заполните форму обратной связи и уточните время, когда удобно
          поговорить.
        </p>
        <form ref={form} className="feedback-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            onFocus={() => setCorrect(true)}
            className="form__phone"
            name="phone"
            required
            placeholder="Телефон"
            type="tel"
          />
          <div className="incorrect-phone">
            <span>
              <IconContext.Provider
                value={{
                  size: "1em",
                  color: "red",
                  className: "close-btn",
                }}
              >
                <div>
                  <AiOutlineExclamationCircle />
                </div>
              </IconContext.Provider>
            </span>
            <p>Пожалуйста введите правильный номер телефона</p>
          </div>
          <input
            className="form__comment"
            name="comment"            
            placeholder="Комментарий"
            type="text"
          />
          <Button>Оставить заявку</Button>
        </form>
      </div>
      <div className="questions-container">{questionElements}</div>
      <Polygon number={1} />
      <Polygon number={2} />
      <Polygon number={4} />
    </StyledFeedback>
  );
};

export default Feedback;
