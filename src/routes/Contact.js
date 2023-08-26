import Nav_Bar from "../components/Nav_Bar";
import Hero from "../components/Hero";
import Contact_Img from "../assets/Taghit.jpg";
import Footer from "../components/Footer";
import Contact_Us from "../components/Contact_Us";
function Contact() {
  return (
    <>
      <Nav_Bar />
      <Hero
        cName="Hero_Small"
        Hero_Img={Contact_Img}
        title="مرحبا بكم في موقعنا"
        Btn_Class="Hide"
      />
      <Contact_Us />
      <Footer />
    </>
  );
}

export default Contact;
