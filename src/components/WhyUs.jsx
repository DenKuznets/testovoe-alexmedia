import StyledWhyUs from "./styled/WhyUs.styled";

const WhyUs = () => {
  return (
    <StyledWhyUs>
      <h2>Почему именно мы</h2>
      <div className="cards-container">
        <div className="card">
          <img src="./images/01.svg" alt="Цифра 1" />
          <div className="card__text">
            <h3>Продающий дизайн</h3>
            <p>Разработаем адаптивный и понятный для Вашей аудитории дизайн</p>
          </div>
        </div>
      </div>
    </StyledWhyUs>
  );
};

export default WhyUs;
