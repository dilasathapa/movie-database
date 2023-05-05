const express = require('express')
const getRouter = express.Router();
const Movies = require("../models/movie.model")


getRouter.get('/getallmovies', async (req, res) => {
    try {
    
        const movies = await Movies.find();
        res.status(200).json(movies);

        // console.log("useridfound", query)
    } catch (error) {
        console.log(error);

        return res.status(500).send({
            error: 'Something went wrong'
        })
    }
})

module.exports = getRouter;

