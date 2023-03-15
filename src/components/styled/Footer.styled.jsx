import styled from "styled-components";
import Logo from "./Logo.styled";

const StyledFooter = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10px;
margin-top: 100px;
margin-bottom: 20px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <div className="copyright">
        © {new Date().getFullYear()}, Все права защищены
      </div>
    </StyledFooter>
  );
};

export default Footer;
