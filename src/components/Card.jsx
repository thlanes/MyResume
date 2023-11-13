import { React } from "react";

function Card(props) {
    return (
        <div>
            <div>
                <h2>{props.position}</h2>
                <h3>{props.company}</h3>
            </div>
            <div>
                <p>{props.details}</p>
            </div>
            <br />
        </div>
    );
}

export default Card;