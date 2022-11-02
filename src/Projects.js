import React from "react";

export default function Projects(){
    return (
        <div className = "container">
            <div className = "row">
                <div className = "col ">
                <div className="card" style={{width: "70%"}}>
                    <div className="col">
                            <div className = "card-body row">
                                <div className="col">
                                    <div className="card-header">
                                        <h2 className = "card-title display-6">BookIt</h2>
                                        <p className="card-subtitle lead">Article Manager</p>
                                    </div>
                                    Collect, organize and share pages from around the web using a combination chrome extension and web app
                                </div>
                                <div className="col">
                                    <a href="https://bookit-web-app.herokuapp.com/" class="card-link deployed-site-link">
                                        <img  className="app-card-img" src = "BookIt_web.png" alt="project_shot" width="100%"/>
                                    </a>
                                </div>
                            </div>
                            <div className = "card-footer">
                                    <a href="https://github.com/PeterMyer/BookIt" class="card-link github-link"><i class="fa-brands fa-github fa-2xl"></i></a>
                                </div>
                    </div>
                </div>
                </div>
                <div className = "col">
                <div className="card" style={{width: "70%"}}>
                    <div className="col">
                            <div className = "card-body row">
                                <div className="col">
                                    <div className="card-header">
                                        <h2 className = "card-title display-6">Byte</h2>
                                        <p className="card-subtitle lead">Recipe Reader</p>
                                    </div>
                                    Digitize your favorite cookbook recipes and auto-generate their nutrition info
                                </div>
                                    <div className="col">
                                    <a href="https://byte-recipe-reader.herokuapp.com/" class="card-link deployed-site-link">
                                        <img className="app-card-img" src = "Byte_Reader.png" alt="project_shot" width="100%"/>
                                    </a>
                                    </div>
                            </div>
                    </div>
                    <div className = "card-footer">
                        <a href="https://github.com/PeterMyer/Byte-RecipeReader" class="card-link github-link"><i class="fa-brands fa-github fa-2xl"></i></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
