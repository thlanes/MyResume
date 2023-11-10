import { React } from "react";

function Header() {
    return (
        <div className="container">
        <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
            <li className="nav-item"><a href="*" className="nav-link active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="*" className="nav-link">Resume</a></li>
            <li className="nav-item"><a href="*" className="nav-link">Contact</a></li>
        </ul>
        </header>
        </div>
    );
}

export default Header;