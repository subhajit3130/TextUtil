import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-sm navbar-expand-lg navbar-${props.mode} bg-${props.mode} mt-2`}>
            <div className="container-fluid">
                <span className="navbar-brand">{props.title}</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">{props.homeText}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <form className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                            onClick={props.toggleMode} checked={props.mode === "light" ? false : true} />
                    </form>
                </div>
            </div>
        </nav>
    )
}
