import { React } from "react";
import Card from "./Card";
import resumeDetails from "../resumeDetails";


function Resume() {
    return (
        <div className="container">
            <h1>Professional Experience</h1>
            <br />
            {resumeDetails.map(resumeDetails => (<Card
        key={resumeDetails.id} 
        position={resumeDetails.position}
        company={resumeDetails.company}
        details={resumeDetails.details}
    />))};

        </div>

    );
}

export default Resume;