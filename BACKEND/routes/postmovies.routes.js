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


postRouter.delete('/moviesdelete', async (req, res) => {
    try {
      const {movieId} = req.body
      console.log(movieId)
      await Movie.findByIdAndDelete(movieId);
  
      res.status(200).json({ message: 'Movie deleted successfully' });
    } catch (error) {
      console.error('Error deleting movie:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

  postRouter.patch('/editmovie', async (req, res) => {
    try {
      const {title, year, cast, director, synopsis, fileData, genre, ratings, id} = req.body
    //   console.log("line1", title, id)
      let response = await Movie.findByIdAndUpdate(id, {
        $set: {
            title, cast, year, director, synopsis, fileData, genre, ratings
        }
      });
    //   console.log( id, res)
  
      res.status(200).json(response);
    } catch (error) {
      console.error('Error editing movie:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });



module.exports = postRouter;
