import { React } from "react";
import Card from "./Card";
import resumeDetails from "../resumeDetails";

function createExperience(resumeDetails) {
    return <Card
        key={resumeDetails.id} 
        position={resumeDetails.position}
        company={resumeDetails.company}
        details={resumeDetails.details}
    />;
}

function Resume() {
    return (
        <div className="container">
            <h1>Professional Experience</h1>
            <br />
            {resumeDetails.map(createExperience)}
        </div>

    );
}

export default Resume;