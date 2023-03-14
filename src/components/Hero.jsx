import Button from "./styled/Button.styled";
import HeroStyled from "./styled/Hero.styled";

const Hero = () => {
  return (
    <HeroStyled className="hero">
      <div className="hero__hero-text">
        <h1>Ваши клиенты должны знать о Вас!</h1>
        <ul>
          <li>Разрабатываем сайты под ключ</li>
          <li>Работаем с любым форматом, от лендинга до интернет-магазина</li>
          <li>Поддерживаем вас после запуска сайта</li>
        </ul>
      </div>      
      <Button>Оставить заявку</Button>
      <img
        className="polygon2"
        src="./images/Polygon2.svg"
        alt="colored shape"
      />
      <img
        className="polygon4"
        src="./images/Polygon4.svg"
        alt="colored shape"
      />
      <img
        className="polygon3"
        src="./images/Polygon3.svg"
        alt="colored shape"
      />
    </HeroStyled>
  );
};

export default Hero;
