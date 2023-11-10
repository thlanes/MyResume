import { React } from "react";

function Footer() {
    return (
        <div className="container gradient-background">
            <footer class="py-3 my-4">
            <p className="text-center text-body-secondary">© {new Date().getFullYear()} Thiago Lanes</p>
            </footer>
        </div>
    )
}

export default Footer;