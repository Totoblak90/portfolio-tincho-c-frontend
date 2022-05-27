import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai"
import "./Header.css";

function Header() {

    return(
        <>
            <header className="header">
                <div className="header__nav-left">
                    <img src="logo.png" alt="Logo" className="header__nav-left--img"/>
                    <ul className="header__nav-left--list">
                        <li className="header__nav-left--list-item">
                            <Link to="" className="header__nav-left--link">
                                Home
                            </Link>
                        </li>
                        <li className="header__nav-left--list-item">
                            <Link to="/projects" className="header__nav-left--link">
                                Proyectos
                            </Link>
                        </li>
                        <li className="header__nav-left--list-item">
                            <Link to="" className="header__nav-left--link">
                                About me
                            </Link>
                        </li>
                        <li className="header__nav-left--list-item">
                            <Link to="" className="header__nav-left--link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="header__nav-right">
                    <ul className="header__nav-right--list">
                        <li className="header__nav-right--list-item">
                            <a href="https://instagram.com" target="_blank">
                                <AiFillInstagram />
                            </a>
                        </li>
                        <li className="header__nav-right--list-item">
                            <a href="https://linkedin.com" target="_blank">
                                <AiFillLinkedin />
                            </a>
                        </li>
                        <li className="header__nav-right--list-item">
                            <a href="https://youtube.com" target="_blank">
                                <AiFillYoutube />
                            </a>
                        </li>
                        <li className="header__nav-right--list-item">
                            <a href="https://twitter.com" target="_blank">
                                <AiFillTwitterCircle />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;