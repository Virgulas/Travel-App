import "./Nav.css";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { IconContext } from "react-icons";

export default function Nav() {
  return (
    <div className="nav">
      <h3 className="title">
        <IconContext.Provider value={{ className: "earth-icon"}}>
          <GiEarthAsiaOceania />
        </IconContext.Provider>
        my travel jornal.
      </h3>
    </div>
  );
}
