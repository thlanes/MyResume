import { React } from "react";
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="container">
        <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
            <li className="nav-item"><Link className="nav-link active" aria-current="page">Home</Link></li>
            <li className="nav-item"><Link className="nav-link">Resume</Link></li>
            <li className="nav-item"><Link className="nav-link">Contact</Link></li>
        </ul>
        </header>
        </div>
    );
}

export default Header;

