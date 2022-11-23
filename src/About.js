import React from "react"

export default function About(){
    return (
        <div className="container-fluid row">
        <div className ="col">
            {/* <h2>About</h2>
            <hr></hr> */}
        <div className="container mt-5">
            <div className = "col ">
                <div className = "row text-center">
                <ul className="col about-me-list">
                    <li className="lead">Fullstack Web Developer</li>
                </ul>
                <ul className="col about-me-list">
                    <li className="lead">Austin, Texas</li>
                </ul>
                </div>
                <div className ='container d-flex flex-column '>
                    <div className="container d-flex align-items-center">
                            <div className="me-3"> 
                                <i class="about-icon fa-solid fa-graduation-cap fa-2xl"></i>
                            </div>
                            <p>I have always had a wide range of interests and have been formally educated in Illustration, Political Science, and Business. I was drawn to development by the combination of creativity and utility.</p>
                        </div>
                        <div className="container d-flex align-items-center">
                            <div className="me-3">
                                <i class=" about-icon fa-solid fa-code fa-2xl"></i>
                            </div>
                            <p>Originally self-taught in Python, I trained in the Javascript NERD stack(Node.js, Express, React, and Relational DBs) at Fullstack Academy.</p>
                        </div>
                        <div className="container d-flex align-items-center">
                            <div className="me-3">
                            <i class="about-icon fa-solid fa-seedling fa-2xl"></i>
                            </div>
                            <p>I'm passionate about projects that help people engage in self-improvement and personal growth.
                            I'm especially curious online platforms for education, skill development and habit building</p>
                        </div>
                        <div className="container d-flex align-items-center">
                            <div className="me-3">
                            <i class="about-icon fa-solid fa-kitchen-set fa-2xl"></i>
                            </div>
                            <p>I have a variety of hobbies. Currently in my free time I enjoy cooking, camping, and playing video games.</p>
                        </div>
                    </div>
            </div>
        </div>
        </div>
        <div className = "col d-flex flex-row-reverse">
            <img className="profile-image_large " src="Hike_Profile2.png" alt="profile_pic" loading='lazy'/>
        </div>
    </div>
    )
}
