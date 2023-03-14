import React from "react";
import { prices } from "../../data";
import Button from "./styled/Button.styled";
import StyledPrices from "./styled/Prices.styled";

const Prices = () => {
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
      <div className="cards-container">{cards}</div>
    </StyledPrices>
  );
};

export default Prices;
