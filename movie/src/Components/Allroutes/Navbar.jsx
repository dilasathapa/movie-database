import React from "react";
import '../Styles/Navbar.css'
import { Link } from "react-router-dom";


function Navbar() {
    return (

        <>
            <div id="nav-parent">

                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <Link to={"/"} className="mylib">
                        <h1 className="mytext">My Movie Library</h1>
                       

                    </Link >
                    <Link to={"/addmovie"}  className="mylib"> <h3 className="mytext2">Add Movie</h3></Link>
                </div>




            </div>
        </>
    )
}
export default Navbar;