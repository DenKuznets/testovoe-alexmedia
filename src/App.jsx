import "./App.css";
import ContactUs from "./components/ContactUs";
import EasyWork from "./components/EasyWork";
import Feedback from "./components/Feedback";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Prices from "./components/Prices";
import Footer from "./components/styled/Footer.styled";
import Partners from "./components/styled/Partners.styled";
import Section from "./components/styled/Section.styled";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section id="hero">
          <Hero/>
        </Section>
        <Section id="why-us">
          <WhyUs />
        </Section>
        <Section id="easy-work">
          <EasyWork />
        </Section>
        <Section id="partners">
          <Partners />
        </Section>
        <Section id="prices">
          <Prices />
        </Section>
        <Section id="form">
          <Feedback/>
        </Section>
        <Section id="contact-us">
          <ContactUs/>
        </Section>
      </main>
      <footer>
        <Section id="footer">
          <Footer/>
        </Section>
      </footer>
    </div>
  );
}

export default App;
