const express = require("express")
const Movie = require("../models/movie.model")


const postRouter = express.Router();

postRouter.post('/addmovies', async (req, res) => {

    try {
        let { title, genre, year, director, ratings, synopsis, cast, fileData} = req.body;

        const post = await Movie.create({
            title,
            genre,
            year,
            director,
            ratings,
            synopsis,
            cast,
            fileData

        })
        res.status(201).json(post);

    } catch(err) {
        console.error(err);

        return res.status(500).send({
            error: 'Something went wrong'
        })
    }
})

module.exports = postRouter;
