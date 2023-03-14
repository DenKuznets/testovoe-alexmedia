import Button from "./styled/Button.styled";
import HeroStyled from "./styled/Hero.styled";
import Polygon from "./Polygon";

const Hero = () => {
  return (
    <HeroStyled className="hero">
      <div className="hero__hero-text">
        <h1>
          Ваши клиенты <br /> должны знать о Вас!
        </h1>
        <ul>
          <li>Разрабатываем сайты под ключ</li>
          <li>Работаем с любым форматом, от лендинга до интернет-магазина</li>
          <li>Поддерживаем вас после запуска сайта</li>
        </ul>
        <Button className="hero__btn">Оставить заявку</Button>
      </div>
      <div className="hero__hero-image">
        <img src="./images/hero.png" alt="" />
      </div>
      <Polygon number={2} />
      <Polygon number={3} />
      <Polygon number={4} />
    </HeroStyled>
  );
};

export default Hero;
