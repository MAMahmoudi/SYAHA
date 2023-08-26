import Hero from "../components/Hero";
import Nav_Bar from "../components/Nav_Bar";
import Home_Img from "../assets/Oran.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
function Home() {
  return (
    <>
      <Nav_Bar />
      <Hero
        cName="Hero"
        Hero_Img={Home_Img}
        title="مرحبا بكم في موقعنا"
        text="نحن نقدم لكم أفضل الخدمات"
        Btn_Text="تواصل معنا"
        url="/"
        Btn_Class="Show"
      />
      <Destination />
      <Trip />
    </>
  );
}

export default Home;
