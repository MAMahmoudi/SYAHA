import "./Trip.css";
import Trip from "./Trip";

function All_Trips(props) {
  return (
    <div className="Trip_Card">
      <div className="Trip_Image">
        <img src={props.Trip_Img} alt="Trip" />
      </div>
      <h4>{props.Title}</h4>
      <p>{props.Text}</p>
    </div>
  );
}

export default All_Trips;
