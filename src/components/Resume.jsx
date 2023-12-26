import { React } from "react";
import Card from "./Card";
import resumeExperience from "../resumeExperience";


function Resume() {
    return (
        <div className="container">
            <h1>Professional Experience</h1>
            <br />
            {resumeExperience.map(resumeExperience => (<Card
        key={resumeExperience.id} 
        position={resumeExperience.position}
        company={resumeExperience.company}
        details={resumeExperience.details}
    />))};

        </div>

    );
}

export default Resume;

