import Masjid from "../assets/Masjid.jpg";
import Masjid2 from "../assets/Masjid2.jpg";
import Masjid3 from "../assets/Masjid3.jpg";

import "./Destination.css";

const Destination = () => {
  return (
    <div className="Destinations">
      <h1>Destination</h1>
      <p>Destination</p>

      <div className="Destination_Item">
        <div className="Destination_Image">
          <img src={Masjid} alt="Masjid" />
          <img src={Masjid2} alt="Masjid" />
        </div>
        <div className="Destination_Text">
          <h2>Destination</h2>
          <p>Destination</p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
