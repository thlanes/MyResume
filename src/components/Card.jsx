import { React } from "react";

function Card(props) {
    return (
        <div class="resume-item">
              <h4>{props.position}</h4>
              <p><em>{props.company}</em></p>
              <p>{props.details}</p>

            </div>
    );
}

export default Card;