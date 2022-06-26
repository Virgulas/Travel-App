import "./Main.css";
import Card from "./Card";
import data from "../data";

export default function Main() {
    const cards = data.map(
       (info, i) => {
       if (i === data.length - 1) {return <Card info={info} line="none" />}
       else {return <Card info={info} line="line" />}
    }  
    )
    return (
        <div className="container">
        {cards}
        </div>
    )
}