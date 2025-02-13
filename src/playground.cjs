const movies = require("./data.cjs");

function toCleanString(string) {
    let cleanString = string.normalize("NFC").replace(/[^\w\s]/g, "").toLowerCase();
    return cleanString;
}

function bestFilmOfYear(array, yearInput) {

    if (array.length == 0) { return };
    if (!yearInput) { return };

    let maxScore = 0;
    let bestTitles = [];
    const movieScoresArr = [];
    const movieTitlesArr = [];
    const filteredMoviesPerYear = [];

    array.map(movie => {
        if (movie.year == yearInput) {
            movieScoresArr.push(movie.score);
            movieTitlesArr.push(movie.title);
            filteredMoviesPerYear.push(movie);
        }
    });
    console.log(movieScoresArr);

    movieScoresArr.sort((a, b) => { a - b });
    maxScore = movieScoresArr[0];

    filteredMoviesPerYear.forEach(movie => {
        if (movie.score == maxScore) {
            console.log(`Max score of year ${yearInput}: "${maxScore}" for -> ${movie.title}`);
            bestTitles.push(movie.title);
        }
    });
    console.log(`Best title/s -> ${bestTitles}`);
    return bestTitles;
}
bestFilmOfYear(movies, 1994);

// function bestFilmOfYear(array, yearInput) {

//     const movieScoresArr = [];
//     let maxScore = 0;
//     const movieTitlesArr = [];
//     let resultMovie = {};

//     array.map(movie => {
//         if (movie.year == yearInput) {
//             movieScoresArr.push(movie.score);
//             movieTitlesArr.push(movie.title);
//         }
//     });
//     console.log(movieScoresArr);

//     movieScoresArr.sort((a, b) => { a - b });
//     maxScore = movieScoresArr[0];
//     resultMovie = array.find(movie => movie.score == maxScore);
//     console.log(`Max score of year ${yearInput}: "${maxScore}" for -> ${resultMovie.title}`);



//     return resultMovie.title;
// }
// bestFilmOfYear(movies, 1994);