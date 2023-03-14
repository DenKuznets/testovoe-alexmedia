import StyledWhyUs from "./styled/WhyUs.styled";
import { whyus } from "../../data";
import Polygon from "./Polygon";

const WhyUs = () => {
  const cards = whyus.map((obj, index) => {
    return (
      <div className="card" key={index}>
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
      <div className="cards-container">{cards}</div>
      <Polygon number={2} />
      <Polygon number={6} />
    </StyledWhyUs>
  );
};

export default WhyUs;
