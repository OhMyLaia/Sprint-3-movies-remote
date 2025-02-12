const movies = require("./data.cjs");

function toCleanString(string) {
    let cleanString = string.normalize("NFC").replace(/[^\w\s]/g, "").toLowerCase();
    return cleanString;
}

function moviesAverageByCategory(array, categoryName) {

    if (array.length === 0) { return 0 };

    let result = 0;
    let totalSum = 0;
    let score = 0;
    let singleGenre = "";
    let scoresArr = [];
    let genreArr = [];
    let movie = {};
    let genre = [];
    let cleanCategory = toCleanString(categoryName);

    for (let i = 0; i < array.length; i++) {
        movie = array[i];
        genre = movie.genre;
        score = movie.score

        for (let j = 0; j < genre.length; j++) {
            singleGenre = genre[j];

            if (genre.length == 0) { return console.log(`no genres attached to this film`)};

            if (toCleanString(singleGenre) == cleanCategory) {
                genreArr.push(singleGenre);
                scoresArr.push(score);
            }
        }
    }

    totalSum = (scoresArr.reduce((total, value) => total += value)).toFixed(2);
    result = (totalSum / genreArr.length).toFixed(2);
    console.log(`EXERCISE 6 -> result: ${result} = ${totalSum} / ${genreArr.length}`);

    return result;
}
moviesAverageByCategory(movies, "Sci-Fi");