import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import About from "./About";
import Projects from "./Projects";
// import {BookItProjectPage} from "./BookItProjectPage";
// import {ByteProjectPage} from "./ByteProjectPage"

export default function AppRoutes(){

    return(
        <div>
            <Routes>
                <Route path="/about" element={<About/>} />
                {/* <Route path="/BookIt" element={<BookItProjectPage/>} />
                <Route path="/byte" element={<ByteProjectPage/>} /> */}
                <Route path="/projects" element={<Projects/>} />
                <Route path="/" element={<Home/>} />

            </Routes>
        </div>
    )

}
