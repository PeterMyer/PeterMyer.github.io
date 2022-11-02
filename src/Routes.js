import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import About from "./About";
import Projects from "./Projects";
// import {BookItProjectPage} from "./BookItProjectPage";
// import {ByteProjectPage} from "./ByteProjectPage"

export default function AppRoutes(){

    return(
        <div>
            <Routes>
                <Route path="https://petermyer.github.io/" element={<Home/>} />
                <Route path="https://petermyer.github.io/about" element={<About/>} />
                {/* <Route path="/BookIt" element={<BookItProjectPage/>} />
                <Route path="/byte" element={<ByteProjectPage/>} /> */}
                <Route path="https://petermyer.github.io/projects" element={<Projects/>} />
            </Routes>
        </div>
    )

}
