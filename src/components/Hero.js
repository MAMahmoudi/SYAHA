import "./Hero.css";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.Hero_Img} alt="Hero_Img" />
      </div>
      <div className="Hero_Text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>

        <a href={props.url} className={props.Btn_Class}>
          {props.Btn_Text}{" "}
        </a>
      </div>
    </>
  );
}
export default Hero;
