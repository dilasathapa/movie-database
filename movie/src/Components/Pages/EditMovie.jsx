import React, { useState, useEffect } from "react";
import "../Styles/Addmovie.css"
import bg from "../../images/bgcc.jpg"
import { FcCameraAddon } from "react-icons/fc";
import w from "../../images/m3.jpg"
import { useDispatch } from "react-redux"
import postmovies from "../../Redux/action";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios"



function EditMovie() {
    const [data, setData] = useState([])
    const [data2, setData2] = useState({})


    console.log("data2", data2.title)
    let t = data2.title;
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [genre, setGenre] = useState("")
    const [ratings, setRatings] = useState("")
    const [director, setDirector] = useState("")
    const [synopsis, setSynopsis] = useState("")
    const [cast, setCasts] = useState([])
    const [imgdata, setimgData] = useState("")
    let [isRemove, setIsRemove] = useState(true);
    // console.log(data)



    const { id } = useParams();
    console.log("hello", id)

    useEffect(() => {
        async function getData() {
            try {
                const apiUrl = await axios.get(`https://movie-database-backend.onrender.com/findmovie/?query=${id}`);

                setData([apiUrl.data])
                setTitle(apiUrl.data.title)
                setYear(apiUrl.data.year)
                setCasts(apiUrl.data.cast)
                setDirector(apiUrl.data.director)
                setGenre(apiUrl.data.genre)
                setSynopsis(apiUrl.data.synopsis)
                setRatings(apiUrl.data.ratings)
                setFileData(fileData)

            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, []);

    const [fileData, setFileData] = useState(null);
    const [file, setFile] = useState(null);

    const handleSynopsis = (e) => {
        setSynopsis(e.target.value)

    }
    const handleTitle = (e) => {
        setTitle(e.target.value)

    }
    const handleYear = (e) => {
        setYear(e.target.value)

    }
    const handleGenre = (e) => {
        setGenre(e.target.value)

    }
    const handleRatings = (e) => {
        setRatings(e.target.value)

    }
    const handlDirector = (e) => {
        setDirector(e.target.value)

    }
    const handleCast = (e) => {
        setCasts(e.target.value)

    }

    const dispatch = useDispatch();



    const handleRead = () => {
        const reader = new FileReader();
        reader.onload = (event) => {
            setFileData(event.target.result);
            setIsRemove(!isRemove)
        };
        reader.readAsDataURL(file);
    };

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };

    const navigate = useNavigate();

    const sendData = async () => {
        console.log("ididididiidd", data[0]._id)
        let obj = {
            title, year, cast, director, synopsis, fileData, genre, ratings, 
            "id" : data[0]._id
        }
        console.log("obj", obj)
        try {
            let url = await fetch('https://movie-database-backend.onrender.com/editmovie', {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            })
            // let res = await url.json();
            if(url.ok){
                alert("successfully edited")
                navigate('/')
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div >
                {/* <h1>Addmovie</h1> */}
                <div id="add-parent">
                    <img src={bg} alt="b" />
                </div>
                <div id="sideby">
                    {
                        (data.length > 0) ? (
                            <div id="input-fields">
                                <input type="text" placeholder="title" id="title" onChange={handleTitle} value={title} />
                                <div id="y-g">
                                    <input type="text" placeholder="year" id="year" onChange={handleYear} value={year} />
                                    <input type="text" placeholder="genre" id="genre" onChange={handleGenre} value={genre} />

                                </div>
                                <div id="r-d">
                                    <input type="number" placeholder="ratings" onChange={handleRatings} value={ratings} />
                                    <input type="text" placeholder="director" onChange={handlDirector} value={director} />
                                </div>
                                <div id="s-c">
                                    <textarea id="" cols="60" rows="8" placeholder="synopsis" value={synopsis}
                                        onChange={handleSynopsis}
                                    ></textarea>
                                    <textarea name="" id="" cols="60" rows="8" placeholder="cast" value={cast}
                                        onChange={handleCast}
                                    ></textarea>
                                </div>
                                <div id="post-preview-btn">
                                    <label htmlFor="img"><p><FcCameraAddon className="w" /></p></label>
                                    <input style={{ backgroundColor: "green" }} id="img"
                                        onChange={handleChange}
                                        name="img" accept="image/*" type="file"></input>
                                    <button
                                        onClick={handleRead}
                                        type="submit" id="preview-btn">Preview</button>
                                </div>

                            </div>
                        ) : (<div style={{ display: "none" }}>
                        </div>)
                    }

                    <div id="display-some-post">
                        {
                            (isRemove != true) ? (
                                <div className="changed">
                                    <div id="preview-post">
                                        <img src={fileData} alt="filepic" />
                                    </div>
                                    <button id="sendpost-btn"
                                        onClick={sendData}
                                    >Post</button>
                                </div>

                            ) : (
                                <div style={{ display: "none" }}>

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditMovie;