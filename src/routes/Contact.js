import Nav_Bar from "../components/Nav_Bar";
import Hero from "../components/Hero";
import Contact_Img from "../assets/Taghit.jpg";
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
      <h1>إتصل بنا</h1>
    </>
  );
}

export default Contact;
