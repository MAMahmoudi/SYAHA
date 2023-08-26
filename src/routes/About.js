import Nav_Bar from "../components/Nav_Bar";
import Hero from "../components/Hero";
import About_Img from "../assets/Tlemcen.jpg";
import Footer from "../components/Footer";
import About_Us from "../components/About_Us";

function About() {
  return (
    <>
      <Nav_Bar />
      <Hero
        cName="Hero_Small"
        Hero_Img={About_Img}
        title="مرحبا بكم في موقعنا"
        Btn_Class="Hide"
      />
      <h1>من نحن؟</h1>
      <About_Us />
      <Footer />
    </>
  );
}

export default About;
