import "./Card.css";
import { MdLocationOn } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Card(props) {
  console.log(props);
  return (
    <div className={`card ${props.line}`}>
      <div className="card-container">
        <div
          className="image"
          style={{ backgroundImage: `url(${props.info.imageUrl})` }}
        ></div>
        <div className="info">
          <div className="text-box">
            <small className="country">
              {" "}
              <IconContext.Provider value={{ className: "location-icon" }}>
                <MdLocationOn />
              </IconContext.Provider>{" "}
              {props.info.location}{" "}
              <a href={props.info.googleMapsUrl} target="_blank" rel="noreferrer" className="google-link">
                View on Google Maps
              </a>
            </small>
            <h1 className="card-title">{props.info.title}</h1>
            <p className="date">
              {props.info.startDate} - {props.info.endDate}
            </p>
            <p className="description">{props.info.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
