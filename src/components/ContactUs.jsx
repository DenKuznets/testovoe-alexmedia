import React from "react";
import StyledContactUs from "./styled/ContactUs.styled";

const ContactUs = () => {
  return (
    <StyledContactUs>
      <div className="text-container">
        <h2>Свяжитесь с нами</h2>
        <div className="contacts">
          <div className="text-left">
            <ul>
              <li>Телефон</li>
              <li>E-mail</li>
              <li>Адрес</li>
            </ul>
          </div>
          <div className="text-right">
            <ul>
              <li>+7 (910) 99-666-99</li>
              <li>alex.media@bk.ru</li>
              <li>г.Иваново, Комсомольская, 17</li>
            </ul>
          </div>
        </div>

        <div className="icons-container">
          <a href="https://www.instagram.com/">
            <img src="./images/inst.png" alt="" />
          </a>
          <a href="https://www.vk.com/">
            <img src="./images/vk-icon.png" alt="" />
          </a>
          <a href="https://www.facebook.com/">
            <img src="./images/fb-icon.png" alt="" />
          </a>
        </div>
      </div>
      <iframe
        title="google maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2172.5260994439327!2d40.97473585004936!3d57.008299101837736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414d14480cc81f23%3A0xbcf1073882a2b924!2z0JrQvtC80YHQvtC80L7Qu9GM0YHQutCw0Y8g0YPQuy4sIDE3LCDQmNCy0LDQvdC-0LLQviwg0JjQstCw0L3QvtCy0YHQutCw0Y8g0L7QsdC7LiwgMTUzMDAy!5e0!3m2!1sru!2sru!4v1678881027682!5m2!1sru!2sru"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </StyledContactUs>
  );
};

export default ContactUs;
