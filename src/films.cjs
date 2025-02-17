const movies = require("./data.cjs");

function toCleanString(string) {
  if (!string) { return "" };
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
  console.log(cleanDirector)

  if (array.length === 0) { return [] };

  array.forEach(element => {
    if (toCleanString(element.director) === cleanDirector) {
      console.log((toCleanString(element.director)));
      result.push(element);
      console.log(`exercise 2 titles -> ${element.title}`);
    }
  });
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
  result = parseFloat((totalSum / scoresArr.length).toFixed(2));
  console.log(`EXERCISE 3 -> ${result}`);

  return result;
}
moviesAverageOfDirector(movies, "Stanley Kubrick");

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = [];
  let orderedMoviesArray = [];
  let movieTitlesArr = [];
  const title = "";

  // array.map(movie => {
  //   movieTitlesArr.push(movie.title);
  // });
  // console.log(movieTitlesArr);

  array.forEach(element => {
    orderedMoviesArray.push(element.title);
  });

  result = orderedMoviesArray.sort().slice(0, 20);
  console.log(`first 20 ordered (a-z) -> ${result.join(", ")}`)
  // result = orderedMoviesArray.slice(0, 20);
  return result;
}
orderAlphabetically(movies);

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let orderedMoviesArray = [...array];

  orderedMoviesArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
  return a.title.localeCompare(b.title);
  });

  console.log(`EXERCISE 5:`)
  orderedMoviesArray.map( (element, i) => {
    console.log(`n.${i+1} -> ${element.title} released -> ${element.year}`);
  });
  return orderedMoviesArray;
}
orderByYear(movies);

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, categoryName) {

  if (array.length === 0) { return 0 };

  let result = 0;
  let totalSum = 0;
  let score = 0;
  let counter = 0;
  let movie = {};
  let genres = [];
  let cleanCategory = toCleanString(categoryName);

  for (let i = 0; i < array.length; i++) {
    movie = array[i];
    genres = movie.genre;
    score = movie.score

    for (let j = 0; j < genres.length; j++) {

      if (genres.length == 0) { continue };

      if (toCleanString(genres[j]) === cleanCategory) {
        totalSum += score;
        counter++;
      }
    }
  }
  if (counter === 0) { return 0 }
  result = totalSum / counter;
  console.log(`EXERCISE 6 -> result: ${result} = ${totalSum} / ${counter}`);

  return parseFloat(result.toFixed(2));
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
  let arrCopy = [];

  arrCopy = array.map((element, i) => {
    if (!element.duration) { return 0 }
    time = element.duration;
    time = String(time);
    hours = time.charAt(0);

    if (time.charAt(3) && time.charAt(4)) {
      minutes3 = time.charAt(3);
      minutes4 = time.charAt(4);

      minutes = minutes3 + minutes4;
      hoursInMinutes = parseInt(hours) * 60;
      result = hoursInMinutes + parseInt(minutes);
      element.duration = parseInt(result);
      // console.log(`hours -> ${hours} / hoursInMinutes -> ${hoursInMinutes} / minutes -> ${minutes} / result -> ${result}`);

    } else if (time.charAt(3) && isNaN(time.charAt(4))) {
      minutes3 = time.charAt(3);
      minutes4 = null;
      hoursInMinutes = parseInt(hours) * 60;
      result = hoursInMinutes + parseInt(minutes3);
      console.log(durationInMinArr);
      element.duration = parseInt(result);
      // console.log(`hours -> ${hours} / hoursInMinutes -> ${hoursInMinutes} / minutes3 -> ${minutes3}  result -> ${result}`);
    }
    console.log(`num.${i + 1}'s timing -> ${element.duration}`);
    
    console.log(`EXERCISE 7 -> as a result in minutes -> ${result}`);

    return {
      ...element,
      duration: result,
    };
  });

  return arrCopy;
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