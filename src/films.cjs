const movies = require("./data.cjs");

function toCleanString(string) {
  let cleanString = string.normalize("NFC").replace(/[^\w\s]/g, "").toLowerCase();

  return cleanString;
}

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let result = [];
  if (array.length === 0) { return 0 };

  array.map(movie => {
    result.push(movie.director);
  });
  console.log("EXERCISE 1 ->", result);

  return result;
}
getAllDirectors(movies);

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let result = [];
  let cleanName = "";
  let cleanDirector = toCleanString(director);

  if (array.length === 0) { return 0 };

  array.filter(element => {
    cleanName = toCleanString(element.director);
    if (cleanName === cleanDirector) {
      result.push(element.title);
    }
  });
  console.log(`EXERCISE 2 -> ${result}`);

  return result;
}
getMoviesFromDirector(movies, "Stanley Kubrick");

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  if (array.length === 0) { return 0 };
  let result = 0;
  let scoresArr = [];
  let totalSum = 0;
  let cleanDirector = toCleanString(director);

  array.map(movie => {
    if (cleanDirector === toCleanString(movie.director)) {
      scoresArr.push(movie.score);
    }
  });
  console.log(`ex 3 scores -> ${scoresArr}`);

  totalSum = scoresArr.reduce((total, value) => total += value);
  result = (totalSum / scoresArr.length).toFixed(2);
  console.log(`EXERCISE 3 -> ${result}`);

  return result;
}
moviesAverageOfDirector(movies, "Stanley Kubrick");

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = [];
  let movieTitlesArr = [];
  let first20MoviesArr = [];
  array.map(movie => {
    movieTitlesArr.push(movie.title);
  });
  console.log(movieTitlesArr);

  movieTitlesArr.forEach((element, i) => {
    if (i < 20) {
      first20MoviesArr.push(element);
    }
    result = first20MoviesArr.sort();
    
  });

  first20MoviesArr.forEach((title, i) => console.log(`EXERCISE 4 -> num.${i+1} ${title}
    `));

  return result;
}
orderAlphabetically(movies);

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [];
  let movieReleaseArr = [];
  let first20MoviesArr = [];

  array.map(movie => {
    movieReleaseArr.push(movie.year);
  });

  movieReleaseArr.forEach((element, i) => {
    if (i < 20) {
      first20MoviesArr.push(element);
    }
    result = first20MoviesArr.sort();
  });

  result.forEach((year, i) => {
    console.log(`EXERCISE 5 -> num.${i+1} ${year}
      `);
  });

  return result;
}
orderByYear(movies);

// Exercise 6: Calculate the average of the movies in a category
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

      if (genre.length == 0) { return console.log(`no genres attached to this film`) };

      if (toCleanString(singleGenre) == cleanCategory) {
        genreArr.push(singleGenre);
        scoresArr.push(score);
      }
    }
  }

  totalSum = (scoresArr.reduce((total, value) => total += value)).toFixed(2);
  result = (totalSum / genreArr.length).toFixed(2);
  console.log(`EXERCISE 6 -> result: ${result} = ${totalSum} / ${genreArr.length}
    
    `);

  return result;
}
moviesAverageByCategory(movies, "Sci-Fi");


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let hours = 0;
  let minutes = 0;
  let minutes3 = 0;
  let minutes4 = 0;
  let hoursInMinutes = 0;
  let result = 0;
  let time = 0;

  array.forEach((element, i)=> {
      time = element.duration;
      hours = time.charAt(0);

      if (time.charAt(3) && time.charAt(4)) {
          minutes3 = time.charAt(3);
          minutes4 = time.charAt(4);

          minutes = minutes3 + minutes4;
          hoursInMinutes = parseInt(hours) * 60;
          result = hoursInMinutes + parseInt(minutes);
          // console.log(`hours -> ${hours} / hoursInMinutes -> ${hoursInMinutes} / minutes -> ${minutes} / result -> ${result}`);

      } else if (time.charAt(3) && isNaN(time.charAt(4))) {
          hoursInMinutes = parseInt(hours) * 60;
          result = hoursInMinutes + parseInt(minutes3);
          console.log(durationInMinArr)
          // console.log(`hours -> ${hours} / hoursInMinutes -> ${hoursInMinutes} / minutes3 -> ${minutes3}  result -> ${result}`);
      }
      
      console.log(`num.${i+1}'s timing -> ${element.duration}`);
      element.duration = result;
      console.log(`EXERCISE 7 -> as a result in minutes -> ${result}
        `);
  });

  return array;
}
hoursToMinutes(movies);

// Exercise 8: Get the best film of a year
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

  movieScoresArr.sort((a, b) => { a - b });
  maxScore = movieScoresArr[0];

  filteredMoviesPerYear.forEach(movie => {
      if (movie.score == maxScore) {
        bestTitles.push(movie.title);
          console.log(`EXERCISE 8 -> Max score of year ${yearInput}: "${maxScore}" for -> ${movie.title}
              Best title/s -> ${bestTitles}`);
      }
  });
  return bestTitles;
}
bestFilmOfYear(movies, 1994);


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}