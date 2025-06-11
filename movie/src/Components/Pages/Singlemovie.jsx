import React, { useState, useEffect } from "react";
import "../Styles/Addmovie.css"
import bg from "../../images/bgcc.jpg"
import { useParams } from 'react-router-dom';
import axios from "axios"
import "../Styles/Singlemovie.css"
import { BsFillStarFill } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcFullTrash } from "react-icons/fc";



function SingleMovie() {
    const [data, setData] = useState([])
    const [data2, setData2] = useState("")

    const { id } = useParams();
    console.log("hello", id)

    useEffect(() => {
        async function getData() {
            try {
                const apiUrl = await axios.get(`https://movie-database-backend.onrender.com/findmovie/?query=${id}`);

                setData([apiUrl.data])
                setData2(apiUrl.data)

            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, []);

    const navigate = useNavigate();

    const handleDeleteMovie = async (movieId) => {
        console.log(movieId)

        try {
            const response = await fetch('https://movie-database-backend.onrender.com/moviesdelete', {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ movieId })

            });

            if (response.ok) {
                alert("movie deleted")
                navigate("/")

            } else {
                console.error('Failed to delete movie');
            }
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    };


    return (
        <>
            <div >
                {/* <h1>Addmovie</h1> */}
                <div id="add-parent">
                    <img src={bg} alt="b" />
                </div>
                <div id="distwo">
                    {(data.length > 0) ? (<div>

                        {data.map((e) => (
                            <div id="display-movie">

                                <div id="dis-texts">
                                    <div>
                                        <Link to={`/editmovie/${e.title}`}> <BsFillPencilFill className="btn" /></Link>
                                        <Link> <BiTrash className="btn2" onClick={() => handleDeleteMovie(e._id)} />
                                        </Link>
                                        {/* <button><FcFullTrash style={{fontSize:"30px", color:"red"}}/></button> */}
                                        {/* <button> <img src="https://banner2.cleanpng.com/20191230/weo/transparent-trash-icon-bin-icon-pollution-icon-5e0a20e261c162.5470446815777220824004.jpg" alt="" /> </button> */}
                                    </div>
                                    <h1> <span className="textt"> Title</span>  : {e.title}</h1>
                                    <p>Release Year : {e.year}</p>
                                    <p>Genre : {e.genre}</p>
                                    <p>Director : {e.director}</p>
                                    <p>Cast : {e.case}</p>
                                    <p>Sysnopsis : {e.synopsis}</p>
                                    <div style={{ display: "flex", gap: "2%", marginTop: "6%" }}>
                                        {
                                            (e.ratings == 1 || e.ratings > 1) ? (<div>
                                                <BsFillStarFill style={{ color: "yellow", fontSize: "50px" }} />
                                            </div>
                                            ) : (<div>
                                                <BsFillStarFill style={{ color: "gray", fontSize: "50px" }} />
                                            </div>
                                            )
                                        }
                                        {
                                            (e.ratings == 2 || e.ratings > 2) ? (<div>
                                                <BsFillStarFill style={{ color: "yellow", fontSize: "50px" }} />
                                            </div>
                                            ) : (<div>
                                                <BsFillStarFill style={{ color: "gray", fontSize: "50px" }} />

                                            </div>
                                            )
                                        }
                                        {
                                            (e.ratings == 3 || e.ratings > 3) ? (<div>
                                                <BsFillStarFill style={{ color: "yellow", fontSize: "50px" }} />
                                            </div>
                                            ) : (<div>
                                                <BsFillStarFill style={{ color: "gray", fontSize: "50px" }} />

                                            </div>
                                            )
                                        }
                                        {
                                            (e.ratings == 4 || e.ratings > 4) ? (<div>
                                                <BsFillStarFill style={{ color: "yellow", fontSize: "50px" }} />
                                            </div>
                                            ) : (<div>
                                                <BsFillStarFill style={{ color: "gray", fontSize: "50px" }} />

                                            </div>
                                            )
                                        }
                                        {
                                            (e.ratings == 5) ? (<div>
                                                <BsFillStarFill style={{ color: "yellow", fontSize: "50px" }} />
                                            </div>
                                            ) : (<div>
                                                <BsFillStarFill style={{ color: "gray", fontSize: "50px" }} />

                                            </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div id="diss-image">
                                    <img src={e.fileData} alt="" />

                                </div>
                            </div>

                        ))
                        }


                    </div>) : (<div style={{ display: "none" }}></div>)

                    }

                </div>
            </div>
        </>
    )
}

export default SingleMovie;