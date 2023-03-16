import React from "react";
import { prices } from "../../data";
import Button from "./styled/Button.styled";
import StyledPrices from "./styled/Prices.styled";
import { useEffect, useRef } from "react";
import { isVisible } from "../../utils";

const Prices = () => {
  const cardsRef = useRef();
  useEffect(() => {
    const onScroll = () => {
      if (!cardsRef.current) return;
      let cards = cardsRef.current.querySelectorAll(".card");
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (card && isVisible(card)) {
          card.classList.add("animate__animated");
          if (i === 0) {
            card.classList.add("animate__backInLeft");
          }
          if (i === 2) {
            card.classList.add("animate__backInRight");
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // clean up code
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const cards = prices.map((obj, index) => {
    const listItems = obj.p.map((text, index) => <li key={index}>{text}</li>);
    return (
      <div className={`card card${index}`} key={index}>
        <h3>{obj.header}</h3>
        <ul>{listItems}</ul>
        <div className="price">{obj.price}</div>
        <Button width={200}>Выбрать</Button>
      </div>
    );
  });
  return (
    <StyledPrices>
      <h2>Цены на разработку</h2>
      <div ref={cardsRef} className="cards-container">
        {cards}
      </div>
    </StyledPrices>
  );
};

export default Prices;
