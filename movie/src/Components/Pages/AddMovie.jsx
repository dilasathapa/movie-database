import React, { useState } from "react";
import "../Styles/Addmovie.css"
import bg from "../../images/bgcc.jpg"
import { FcCameraAddon } from "react-icons/fc";
import w from "../../images/m3.jpg"
import { useDispatch } from "react-redux"
import postmovies from "../../Redux/action";


function AddMovie() {

    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [genre, setGenre] = useState("")
    const [ratings, setRatings] = useState("")
    const [director, setDirector] = useState("")
    const [synopsis, setSynopsis] = useState([])
    const [cast, setCasts] = useState([])
    const [imgdata, setimgData] = useState("")
    let [isRemove, setIsRemove] = useState(true);


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

    const sendData = () => {
        dispatch(postmovies({ title, genre, year, director, ratings, synopsis, cast, fileData }))
        // window.location.reload()
    }
    return (
        <>
            <div >
                <h1>Addmovie</h1>
                <div id="add-parent">
                    <img src={bg} alt="b" />
                </div>
                <div id="sideby">
                    <div id="input-fields">
                        <input type="text" placeholder="title" id="title" onChange={handleTitle} />
                        <div id="y-g">
                            <input type="text" placeholder="year" id="year" onChange={handleYear} />
                            <input type="text" placeholder="genre" id="genre" onChange={handleGenre} />

                        </div>
                        <div id="r-d">
                            <input type="number" placeholder="ratings" onChange={handleRatings} />
                            <input type="text" placeholder="director" onChange={handlDirector} />
                        </div>
                        <div id="s-c">
                            <textarea id="" cols="60" rows="8" placeholder="synopsis"
                                onChange={handleSynopsis}
                            ></textarea>
                            <textarea name="" id="" cols="60" rows="8" placeholder="cast"
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
                                <div style={{display:"none"}}>
                                    
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddMovie;