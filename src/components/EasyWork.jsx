import EasyWorkStyled from "./styled/EasyWork.styled";
import Polygon from "./Polygon";

const EasyWork = () => {
  return (
    <EasyWorkStyled className="easywork">
      <div className="easywork__easywork-text">
        <h2>Работать с нами легко и комфортно</h2>
        <p>
          Мы делаем не просто сайты, а закрываем потребности ваших клиентов в
          вашем продукте
        </p>
        <ul>
          <li>Помощь в составлении технического задания</li>
          <li>Индивидуальный дизайн</li>
          <li>Рукописный код без лишних скриптов</li>
          <li>Адаптивный дизайн под все форматы экранов и мобильную версию</li>
          <li>Подключение Метрики</li>
        </ul>
      </div>
      <div className="easywork__easywork-image">
        <img src="./images/easywork.png" alt="" />
      </div>
      <Polygon number={1} />
      <Polygon number={5} />
    </EasyWorkStyled>
  );
};

export default EasyWork;
