import Button from './styled/Button.styled'

const Hero = () => {
  return (
    <div className="hero">
      <h1>Ваши клиенты должны знать о Вас!</h1>
      <ul>
        <li>Разрабатываем сайты под ключ</li>
        <li>Работаем с любым форматом, от лендинга до интернет-магазина</li>
        <li>Поддерживаем вас после запуска сайта</li>
      </ul>
      <Button>Оставить заявку</Button>
      <img src="./images/Polygon2.svg" alt="colored shape" />
      <img src="./images/Polygon4.svg" alt="colored shape" />
      <img src="./images/Polygon3.svg" alt="colored shape" />
    </div>
  );
}

export default Hero