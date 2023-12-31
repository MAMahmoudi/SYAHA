import Hero from "../components/Hero";
import Nav_Bar from "../components/Nav_Bar";
import Services_Img from "../assets/Ghardaia.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Services() {
  return (
    <>
      <Nav_Bar />
      <Hero
        cName="Hero_Small"
        Hero_Img={Services_Img}
        title="مرحبا بكم في موقعنا"
        Btn_Class="Hide"
      />
      <h1>جميع الخدمات</h1>
      <Trip />
      <Footer />
    </>
  );
}

export default Services;
