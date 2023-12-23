import { React } from "react";
import html from "../pictures/html.svg";
import css from "../pictures/css.svg";
import js from "../pictures/js.svg";
import react from "../pictures/react.svg";
import github from "../pictures/github.svg";
import nodejs from "../pictures/nodejs.svg";
import sql from "../pictures/sql-svgrepo-com.svg";
import bootstrap from "../pictures/bootstrap-svgrepo-com.svg";

function Skills() {
    return (
        <div className="my-5">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h1 className="text-body-emphasis">My Skills</h1>
            <br/>
            <br/>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={html} alt="html" height="100" />
                    <p>HTML 5</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={css} alt="css" height="100" />
                    <p>CSS 3</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={js} alt="js" height="100" />
                    <p>JAVASCRIPT</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={react} alt="js" height="100" />
                    <p>React</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={github} alt="js" height="100" />
                    <p>Github</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={nodejs} alt="js" height="100" />
                    <p>Node.js</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={sql} alt="js" height="100" />
                    <p>sql</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={bootstrap} alt="js" height="100" />
                    <p>Bootstrap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills;