import React from "react";
import { NavLink } from "react-router-dom";
// Navigation bar function component
export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper blue lighten-1">
            <a href="/" className="brand-logo">Quiz test</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Ответить на вопросы</NavLink></li>
            </ul>
        </div>
    </nav>
)