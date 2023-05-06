import React, { useEffect, useState } from "react";
import "../Styles/Home.css"
import bgcc from "../../images/bgcc.jpg"
import { useDispatch, useSelector } from "react-redux"
import { getAllmovies } from "../../Redux/action";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import axios from "axios";


function Home() {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchHistory, setSearchHistory] = useState([]);
    const [data, setData] = useState([]);
    const [temp, setTemp] = useState([]);

    console.log("searchhistory", searchHistory[searchHistory.length - 1])

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            setSearchHistory((prevSearchHistory) => [
                ...prevSearchHistory,
                searchTerm
            ]);
        }, 500);
        return () => clearTimeout(debounceTimer);
    }, [searchTerm]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
        async function getData() {

            try {
                if (searchTerm != "") {
                    // const response = await axios.get(`/api/users?query=${query}`);
                    const apiUrl = await axios.get(`http://localhost:8080/searchmovie/?query=${searchTerm}`);
                    console.log(apiUrl.data)
                    setData(apiUrl.data)
                }
            } catch (error) {
                console.error(error);
            }
        }

        getData();
    }, [searchTerm]);


    // searching


    const dispatch = useDispatch();
    const posts = useSelector(state => state.allmovies);

    useEffect(() => {
        console.log(posts)
        setTemp(posts)

    }, [posts])


    // sorting
    const handleSort = (e) => {
        // console.log(e)
        if (e == "yeara") {
            let arr = posts.sort((a, b) => { return a.year - b.year })
            setTemp([...arr])
        } else if (e == 'yeard') {
            let arr = posts.sort((a, b) => { return b.year - a.year })
            setTemp([...arr])
        } else if (e == "titlea") {
            let arr = posts.sort((a, b) => {
                if (a.title > b.title) { return -1; }
                else if (a.title < b.title) {
                    return 1;
                } else {
                    return 0;
                }
            })
            setTemp([...arr])
        } else if (e == "titlez") {
            let arr = posts.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                } else if (a.title > b.title) {
                    return 1;
                } else {
                    return 0;
                }
            })
            setTemp([...arr])
        }
        else if (e == "directora") {
            let arr = posts.sort((a, b) => {
                if (a.director > b.director) { return -1; }
                else if (a.director < b.director) {
                    return 1;
                } else {
                    return 0;
                }
            })
            setTemp([...arr])
        } else if (e == "directorz") {
            let arr = posts.sort((a, b) => {
                if (a.director < b.director) {
                    return -1;
                } else if (a.director > b.director) {
                    return 1;
                } else {
                    return 0;
                }
            })
            setTemp([...arr])
        }
    }

    const handlegenre = (e) => {
        let ar = posts.filter((ele) => {
            if (ele.genre == e) {
                return e;
            }
        })
        setTemp([...ar])
    }





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
                    <input className="search-box" type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="search movies here...!!!" />

                    <button className="search-btn">Search</button>
                </div>
                {(data.length > 0 || searchTerm != "") ? (<div id="addedm1" >
                    {data.map((e) => (
                        <Link to={`/movie/${e.title}`} id="link-tr">
                            <div id="post-image" className="display-allmovies">
                                <img id="postpic" src={e.fileData} alt="postimage" />
                                <p>{e.title}</p>
                                <p>{e.genre}</p>
                                {/* <p>{e.ratings}</p> */}
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
                        </Link>
                    ))}
                </div>) : (
                    <div >
                        {(temp.length > 0) ? (<div>
                            <div id="sorting">

                                <select name="movies" className="dis-movies" style={{
                                    display: "block", width: "20%",

                                    height: "30px",
                                    backgroundColor: "black", color: "white",
                                    borderRadius: "4px",
                                    cursor: "pointer"
                                }} onChange={(e) => { handleSort(e.target.value) }}>
                                    <option value="">Sort</option>
                                    <option className="op" value="yeara">Year : ascending</option>
                                    <option className="op" value="yeard">Year : descending</option>
                                    <option className="op" value="titlea">Title : A...Z</option>
                                    <option className="op" value="titlez">Title : Z...A</option>
                                    <option className="op" value="directora">Director : A...z </option>
                                    <option className="op" value="directorz">Director : Z...A</option>


                                </select>

                                <select name="movies" style={{
                                    display: "block", width: "20%",

                                    height: "30px",
                                    backgroundColor: "black", color: "white",
                                    borderRadius: "4px",
                                    cursor: "pointer"
                                }} className="dis-movies" onChange={(e) => { handlegenre(e.target.value) }}>
                                    <option className="op" value="">Genre</option>
                                    <option className="op" value="action">Action</option>
                                    <option value="thriller" className="op">Thriller</option>
                                    <option value="comedy" className="op">Comedy</option>
                                    <option className="op" value="drama">Drama</option>
                                    <option className="op" value="animation">Animation</option>
                                    <option className="op" value="fantasy">Fantasy</option>
                                </select>
                            </div>
                            <div id="addedm">
                                {temp.map((e) => (<div key={e._id} >
                                    <Link to={`/movie/${e.title}`} id="link-tr">
                                        <div id="post-image" className="display-allmovies">
                                            <img id="postpic" src={e.fileData} alt="postimage" />
                                            <p>{e.title}</p>
                                            <p>{e.genre}</p>
                                            {/* <p>{e.ratings}</p> */}
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
                                    </Link>

                                </div >
                                ))
                                }
                            </div >

                        </div >


                        ) : (
                            <div></div>
                        )}
                    </div >
                )

                }


            </div >
        </>
    )
}

export default Home;

