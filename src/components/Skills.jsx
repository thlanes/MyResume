import { React } from "react";
import html from "../pictures/html.svg";
import css from "../pictures/css.svg";
import js from "../pictures/js.svg";
import react from "../pictures/react.svg"

function Skills() {
    return (
        <div className="my-5">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h1 className="text-body-emphasis">My Skills</h1>
            <p className="col-lg-8 mx-auto lead">
              This takes the basic jumbotron above and makes its background edge-to-edge with a <code>.container</code> inside to align content. Similar to above, it's been recreated with built-in grid and utility classes.
            </p>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <img src={html} alt="html" height="100" />
                    <p>HTML 5</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <img src={css} alt="css" height="100" />
                    <p>CSS 3</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <img src={js} alt="js" height="100" />
                    <p>JAVASCRIPT</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <img src={react} alt="js" height="100" />
                    <p>React</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills;