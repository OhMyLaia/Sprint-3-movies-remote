const movies = require("./data.cjs");

function toCleanString(string) {
  let cleanString = string.normalize("NFC").replace(/[^\w\s]/g, "").toLowerCase();
  return cleanString;
}

//? Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let result = [];
  if (array.length === 0) { return 0 };

  array.map( movie => {
    result.push(movie.director);
  });
  //! console.log("EXERCISE 1 ->", result);
  return result;
}
//! getAllDirectors(movies);

//? Exercise 2: Get the films of a certain director
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
  //! console.log(`EXERCISE 2 -> ${result}`);
  return result;
}
//! getMoviesFromDirector(movies, "Stanley Kubrick");

//? Exercise 3: Calculate the average of the films of a given director.
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
  //! console.log(`EXERCISE 3 -> ${result}`);
  return result;
}
//! moviesAverageOfDirector(movies, "Stanley Kubrick");

//? Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = [];
  let movieTitlesArr = [];
  let first20MoviesArr = [];
  array.map( movie => {
    movieTitlesArr.push(movie.title);
  });
  console.log(movieTitlesArr);

  movieTitlesArr.forEach((element, i) => {
    if ( i < 20 ) {
      first20MoviesArr.push(element);
    }
    result = first20MoviesArr.sort();
  });

  //! result.forEach((title, i) => console.log(`EXERCISE 4 -> num.${i+1} ${title}`));
  return result;
}
//! orderAlphabetically(movies);

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [];
  let movieReleaseArr = [];
  let first20MoviesArr = [];
  array.map( movie => {
    movieReleaseArr.push(movie.year);
  });
  console.log(movieReleaseArr);

  movieReleaseArr.forEach((element, i) => {
    if ( i < 20 ) {
      first20MoviesArr.push(element);
    }
    result = first20MoviesArr.sort();
  });

  result.forEach((year, i) => {
    // aqui filtramos las que son del mismo año por orden alfabetico
    console.log(`EXERCISE 5 -> num.${i+1} ${year}`)
  });
  return result;
}
orderByYear(movies);

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



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
