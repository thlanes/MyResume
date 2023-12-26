import { React } from "react";
import linkedin from "../pictures/linkedin-rounded-svgrepo-com.svg";

function Footer() {
    return (
        <div className="container gradient-background">
            <footer class="py-3 my-4">
            <p className="text-center text-body-secondary">© {new Date().getFullYear()} Thiago Lanes</p>
            <a href="https://www.linkedin.com/in/thiagovlanes/" rel="noreferrer noopener" target="_blank"><img src={linkedin} alt="js" height="30" /></a>
            </footer>
        </div>
    )
}

export default Footer;