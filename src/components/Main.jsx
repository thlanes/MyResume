import { React } from "react";
import profile from "../pictures/profile.JPG"

function Main() {
    return (
        <div className="container col-xxl-8 px-4 py-5 gradient-background">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img src={profile} className="profilepic" alt="Profile Pic" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">THIAGO LANES</h1>
            <p className="lead">Front-End developer</p>
          </div>
        </div>
      </div>
    );
}

export default Main;