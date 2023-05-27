import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css"

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <h3> <a href="/"><img src="../assets/logo2-transparent-png.png" alt="Logo" /></a></h3>
            <nav ref={navRef}>
                <a href="/history">history</a>
                <a href="/empires">empires</a>
                <a href="/timeline">timeline</a>
                <a href="/conspiracies">conspiracies</a>
                <a href="/contact">contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;