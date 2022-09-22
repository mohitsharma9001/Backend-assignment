const { json } = require("express");
const express = require("express");
const fs = require("fs");
const MovieRoute = express.Router()
let count = 0;

const app = express();
app.use(express.json())

let port = 8080;
app.listen(port, (req, res) => {
    console.log(`listening on port ${port} `);
});

const validateMiddleware = (req, res, next) => {
    let flg = false;
    count++;
    fs.readFile("movies.json", (err, data) => {
        let movieData = req.body; // Requested movie obj
        let serverData = JSON.parse(data); // Server movies Data

        // Checking movie data avaialble or not
        serverData.Movies.forEach(movie => {
            if (JSON.stringify(movie) == JSON.stringify(movieData)){
                flg = true;
            }
        });

        if (flg) {
            // console.log("Movie exists");
            next();
        }
        else res.send(`Error 404 !`);
    })

}

const getMovieData = (req, res) => {
    let movieData = req.body
    console.log("Visited route ", count, " times");

    res.send(movieData);
}

app.use(MovieRoute);
MovieRoute.use(validateMiddleware);
MovieRoute.post("/movies", getMovieData);



