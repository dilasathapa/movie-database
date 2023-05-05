import React, { useEffect } from "react";
import "../Styles/Home.css"
import bgcc from "../../images/bgcc.jpg"
import { useDispatch, useSelector } from "react-redux"
import { getAllmovies } from "../../Redux/action";
import { BsFillStarFill } from "react-icons/bs";

function Home() {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.allmovies);
    console.log(posts)

    useEffect(() => {
        dispatch(getAllmovies())
    }, [])
    return (
        <>
            <div id="home-parent">
                <div id="search-movie">
                    <div id="search-bg">
                        <img className="bg-img" src={bgcc} alt="" />

                    </div>
                    <input className="search-box" type="text" placeholder="search movies here...!!!" />

                    <button className="search-btn">Search</button>
                </div>

                <div >
                    {(posts.length > 0) ? (<div>
                        <div id="sorting">
                            <button>sort</button>
                        </div>
                        <div id="addedm">
                            {posts.map((e) => (<div key={e._id} >
                                <div id="post-image" className="display-allmovies">
                                    <img id="postpic" src={e.fileData} alt="postimage" />
                                    <p>{e.title}</p>
                                    <p>{e.genre}</p>
                                    <p>{e.ratings}</p>
                                    <div style={{ display: "flex", gap: "2%" }}>
                                        {
                                            (e.ratings == 1 || e.ratings > 1) ? (<div>
                                                <BsFillStarFill style={{ color: "yellow" }} />
                                            </div>
                                            ) : (<div>
                                                <BsFillStarFill style={{ color: "gray" }} />
                                            </div>
                                            )
                                        }
                                        {
                                            (e.ratings == 2 || e.ratings > 2) ? (<div>
                                                <BsFillStarFill style={{ color: "yellow" }} />
                                            </div>
                                            ) : (<div>
                                                <BsFillStarFill style={{ color: "gray" }} />

                                            </div>
                                            )
                                        }
                                        {
                                            (e.ratings == 3 || e.ratings > 3) ? (<div>
                                                <BsFillStarFill style={{ color: "yellow" }} />
                                            </div>
                                            ) : (<div>
                                                <BsFillStarFill style={{ color: "gray" }} />

                                            </div>
                                            )
                                        }
                                        {
                                            (e.ratings == 4 || e.ratings > 4) ? (<div>
                                                <BsFillStarFill style={{ color: "yellow" }} />
                                            </div>
                                            ) : (<div>
                                                <BsFillStarFill style={{ color: "gray" }} />

                                            </div>
                                            )
                                        }
                                        {
                                            (e.ratings == 5) ? (<div>
                                                <BsFillStarFill style={{ color: "yellow" }} />
                                            </div>
                                            ) : (<div>
                                                <BsFillStarFill style={{ color: "gray" }} />

                                            </div>
                                            )
                                        }
                                    </div>

                                </div >
                            </div >
                            ))
                            }
                        </div >

                    </div >


                    ) : (
                        <div></div>
                    )}
                </div >
            </div >
        </>
    )
}

export default Home;

