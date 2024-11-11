import { useState } from "react";
import "./Header.scss";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <nav id="desktop-nav">
                <div className="logo">Жалгасов Мерей</div>
                <div>
                    <ul className="nav-links">
                        <li><a href="#about">Обо мне</a></li>
                        <li><a href="#experience">Навыки</a></li>
                        <li><a href="#projects">Проекты</a></li>
                        <li><a href="#contact">Контакты</a></li>
                    </ul>
                </div>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo">Жалгасов Мерей</div>
                <div className="hamburger-menu">
                    <div 
                        className={`hamburger-icon ${menuOpen ? "open" : ""}`} 
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${menuOpen ? "open" : ""}`}>
                        <li><a href="#about" onClick={toggleMenu}>Обо мне</a></li>
                        <li><a href="#experience" onClick={toggleMenu}>Навыки</a></li>
                        <li><a href="#projects" onClick={toggleMenu}>Проекты</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Контакты</a></li>
                    </div>
                </div>
            </nav>
        </>
    )
};
