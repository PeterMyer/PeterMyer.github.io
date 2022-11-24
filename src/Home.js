import React from "react";
import Profile from './About'
import CssLoader from "./CssLoader";

export default function Home(){
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className = "container row d-flex align-items-center ">
                <div className = "col p-5 text-center " >
                    <img className="img-fluid profile-image" src="profile.jpeg" alt="profile_pic" width = "300" loading="lazy"/>
                </div>
                <div className = "col p-5   ">
                    <h1 className ="display-3">Hi, I'm <strong><span className="text-highlight">Peter Myer</span></strong></h1>
                    <p className="lead">Full Stack Web Developer</p>
                    <hr className="my-4"></hr>
                    <p className = "small text-muted">Creating web applications with <strong>Javascript</strong> and <strong>Python</strong></p>
                    <p className = "small text-muted"> Experienced in <strong>Illustration</strong> and <strong>Design</strong></p>
                </div>
            </div>
        </div>

    )
}