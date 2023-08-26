import "./Destination.css";
import { Component } from "react";

class All_Destinations extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="Destination_Image">
          <img src={this.props.Img1} alt="image1" />
          <img src={this.props.Img2} alt="image2" />
        </div>
        <div className="Destination_Text">
          <h2>{this.props.Title}</h2>
          <p>{this.props.Text}</p>
        </div>
      </div>
    );
  }
}

export default All_Destinations;
