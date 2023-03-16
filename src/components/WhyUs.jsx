import StyledWhyUs from "./styled/WhyUs.styled";
import { whyus } from "../../data";
import Polygon from "./Polygon";
import { useEffect, useRef } from "react";
import { isVisible } from "../../utils";

const WhyUs = () => {
  const cardsRef = useRef();
  useEffect(() => {
    const onScroll = () => {
      if (!cardsRef.current) return;
      let cards = cardsRef.current.querySelectorAll(".card");

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (card && isVisible(card)) {
          card.classList.add("animate__animated");
          if (i < 2) {
            card.classList.add("animate__backInLeft");
          } else {
            card.classList.add("animate__backInRight");
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // clean up code
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cards = whyus.map((obj, index) => {
    return (
      <div className={`card`} key={index}>
        <img src={`./images/${obj.img}`} alt="Цифра" />
        <div className="card__text">
          <h3>{obj.h3Text}</h3>
          <p> {obj.pText}</p>
        </div>
      </div>
    );
  });
  return (
    <StyledWhyUs>
      <h2>Почему именно мы</h2>
      <div className="cards-container" ref={cardsRef}>
        {cards}
      </div>
      <Polygon number={2} />
      <Polygon number={6} />
    </StyledWhyUs>
  );
};

export default WhyUs;
