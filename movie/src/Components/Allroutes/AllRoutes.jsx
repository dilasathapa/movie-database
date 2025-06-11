import React from "react";
import Home from "../Pages/Home"
import EditMovie from "../Pages/EditMovie";
import AddMovie from "../Pages/AddMovie"
import { Route, Routes } from "react-router-dom"
import SingleMovie from "../Pages/Singlemovie";

function AllRoutes() {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/movie/:id" element={<SingleMovie />}></Route>
                    <Route path="/editmovie/:id" element={<EditMovie />}></Route>

                    <Route path="/addMovie" element={<AddMovie />}></Route>

                </Routes>
            </div>
        </>
    )
}

export default AllRoutes;