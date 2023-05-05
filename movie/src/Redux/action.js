

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
            let url = await fetch('http://localhost:8080/addmovies',{
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

export default postmovies;