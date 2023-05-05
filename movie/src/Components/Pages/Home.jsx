import React, { useEffect } from "react";
import "../Styles/Home.css"
import bgcc from "../../images/bgcc.jpg"
import {useDispatch} from "react-redux"
import { getallmovies } from "../../Redux/action";

function Home(){

    const dispatch = useDispatch();
    // const posts = useSelector(state => state.following_posts);
    // console.log(posts)

    useEffect(()=>{
        dispatch(getallmovies())
    },[])
    return (
        <>
        <div id="home-parent">
            <h1>home page</h1>
            <div id="search-movie">
                search movie
                <div id="search-bg">
                    <img className="bg-img" src={bgcc} alt="" />

                </div>
                <input className="search-box" type="text" placeholder="search movies here...!!!" />

                <button className="search-btn">Search</button>
            </div>
             <div id="trending">
                display trending
            </div>
            
            
            
            
            
            
            
            {/*<div id="display-effect">
                display settimeout
            </div>
            <div id="shows">
                shows
            </div>
            <div id="res-movies">
                movies rest
            </div> */}


        </div>
        </>
    )
}

export default Home;