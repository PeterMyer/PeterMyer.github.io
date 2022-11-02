import React from "react";

export default function NavBar(){
    return (
    <nav class="navbar navbar-expand-sm bg-light d-flex justify-content-between sticky-top">
            <ul className="navbar-nav d-flex align-items-center">
                <a className="navbar-brand" href="/">
                    <img src="PM_logo.svg" alt="name_icon" width="75"/>
                </a>
                {/* <li className = "nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false"><strong>Projects</strong></a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/projects">All Projects</a>
                    <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/bookit">BookIt</a>
                        <a class="dropdown-item" href="/byte">Byte</a>
                    </div>
                </li> */}
                <li className = "nav-item">
                    <strong>
                        <a className="nav-link" href="#/projects">Projects</a>
                    </strong>
                </li>

                <li className = "nav-item">
                    <strong>
                        <a className="nav-link" href="#/about">About</a>
                    </strong>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className = "nav-item">
                    <a className="nav-link" href="https://github.com/PeterMyer" ><i class="fa-brands fa-github fa-2xl"></i></a>
                </li>
                <li className = "nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/petermyer/"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                </li>
            </ul>
        </nav>
    )
}