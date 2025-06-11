import { GET_ALLMOVIES } from "./actionType"


let postmovies = (postData)=>{

    let postObj = {
        "title" : postData.title,
        "director" : postData.director,
        "year" : postData.year,
        "cast" : postData.cast,
        "genre" : postData.genre,
        "synopsis" : postData.synopsis,
        "ratings" : postData.ratings,
        "fileData" : postData.fileData,
    }

    console.log(postData)


    return async(dispatch, getState) =>{
        try {
            // let url = await fetch('http://localhost:8080/addmovies',{
            let url = await fetch('https://movie-database-backend.onrender.com/addmovies',{

                method : 'POST',
                headers : {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postObj)

            })
            let res = await url.json();
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
}


let getAllmovies = () =>{
    return async(dispatch, getState)=>{
        try {
            let url = await fetch('https://movie-database-backend.onrender.com/getallmovies',{
            method : 'GET',
            headers : {
                "Content-Type": "application/json",
            },
        })
        let res = await url.json();
        dispatch({
            type : GET_ALLMOVIES,
            payload : res,
        })
        } catch (error) {
            console.log(error)
        }
    }
}




export default postmovies;
export { getAllmovies};