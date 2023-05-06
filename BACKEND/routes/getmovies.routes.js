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


getRouter.get('/findmovie', async (req, res) => {
    try {
        let { query } = req.query;
        const movie = await Movies.findOne({ title: query });
        res.status(200).json(movie);

        // console.log("useridfound", query)
    } catch (error) {
        console.log(error);

        return res.status(500).send({
            error: 'Something went wrong'
        })
    }
})

getRouter.get('/searchmovie', async (req, res) => {
    try {
        let { query } = req.query;

        if (!query || typeof query !== 'string' || query.trim() === '') {
            return res.status(400).json({ error: 'Invalid search query' });
        }
        

        //  const isNumeric = !isNaN(query);
        const regex = new RegExp(`.*${query}.*`, 'i');
        const movies = await Movies.find({
            $or: [
                { title: regex },
                { genre: regex },
                { director: regex },
                // { year: isNumeric ? query : { $regex: regex } },

            ]
        });
        res.status(200).json(movies);
    } catch (error) {
        console.log(error);

        return res.status(500).send({
            error: 'Something went wrong'
        })
    }

})


module.exports = getRouter;

