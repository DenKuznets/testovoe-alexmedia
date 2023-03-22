import { useEffect, useRef, useState } from "react";
import Button from "./styled/Button.styled";
import StyledFeedback from "./styled/Feedback.styled";
import Question from "./styled/Question.styled";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import Popup from "./styled/Popup.styled";
import Polygon from "./Polygon";
import MaskedInput from "react-text-mask";
import { preventScroll, resumeScroll, maskPattern } from "../../utils";

const Feedback = () => {
  const [correct, setCorrect] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [showMask, setShowMask] = useState(false);
  const [placeHolder, setPlaceHolder] = useState("Телефон")
  const form = useRef("");
  let questionsText = [];
  for (let index = 0; index < 4; index++) {
    questionsText.push(`Вопрос${index + 1}`);
  }
  let questionElements = questionsText.map((obj, index) => {
    return <Question obj={obj} key={index} />;
  });

  useEffect(() => {
    if (showPopup) {
      preventScroll();
    }

    if (!showPopup) {
      resumeScroll();
    }

    return () => {
      resumeScroll();
    };
  }, [showPopup]);

  function handleSubmit(e) {
    e.preventDefault();
    let form = e.target;
    let regexp =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

    if (regexp.test(form.elements.phone.value)) {
      setShowPopup(true);
    } else {
      setCorrect(false);
    }
  }

  function handleFocus(e) {
    setCorrect(true);
    setShowMask(true);
  }

  function handleBlur(e) {
    if (e.target.value === "+7 (___) ___ __-__") {
      setShowMask(false);
      e.target.value = "";
    }
  }

  // возврат курсора к последней введенной цифре номера
  function handleMouseUp(e) {
    const text = e.target.value;
    const input = e.target;
    // первое оставшееся нижеподчеркивание
    const pos = text.indexOf("_");
    // переставить курсор на первое нижеподчеркивание ,без таймаута курсор не перепрыгнет
    setTimeout(() => input.setSelectionRange(pos, pos), 10);
  }

  return (
    <StyledFeedback correct={correct}>
      <Polygon number={1} />
      <Polygon number={2} />
      <Polygon number={4} />
      {showPopup && (
        <Popup form={form} closePopup={() => setShowPopup(false)} />
      )}
      <div className="form-container">
        <h2>Позвоним в удобное время</h2>
        <p>
          Заполните форму обратной связи и уточните время, когда удобно
          поговорить.
        </p>
        <form ref={form} className="form" onSubmit={(e) => handleSubmit(e)}>
          <MaskedInput
            mask={maskPattern}
            guide={true}
            className="form__form-phone"
            name="phone"
            required
            placeholder={placeHolder}
            type="tel"
            showMask={showMask}
            onFocus={(e) => handleFocus(e)}
            onBlur={(e) => handleBlur(e)}
            onMouseUp={(e) => handleMouseUp(e)}
            onMouseEnter={() => setPlaceHolder("+7 (___) ___ __-__")}
            onMouseLeave={() => setPlaceHolder("Телефон")}
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
            className="form__form-comment"
            name="comment"
            placeholder="Комментарий"
            type="text"
          />
          <Button>Оставить заявку</Button>
        </form>
      </div>
      <div className="questions-container">{questionElements}</div>
    </StyledFeedback>
  );
};

export default Feedback;
