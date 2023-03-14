import Button from "./styled/Button.styled";
import HeroStyled from "./styled/Hero.styled";
import Polygon from "./Polygon";

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
      <Polygon number={2} />
      <Polygon number={3} />
      <Polygon number={4} />
    </HeroStyled>
  );
};

export default Hero;
