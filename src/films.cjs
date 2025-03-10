const movies = require("./data.cjs");

function toCleanString(string) {

  if (!string) { return "" };
  let cleanString = string.normalize("NFC").replace(/[^\w\s]/g, "").toLowerCase();
  return cleanString;
}

function getAllDirectors(array) {

  if (array.length === 0) { return 0 };

  const result = array
  .map(movie => 
  movie.director);

  return result;
}


function getMoviesFromDirector(array, director) {

  const result = [];
  let cleanDirector = toCleanString(director);

  if (array.length === 0) { return [] };

  array.forEach(movie => {
    if (toCleanString(movie.director) === cleanDirector) {
      result.push(movie)
    }
  });
  return result;
}



function moviesAverageOfDirector(array, director) {

  if (array.length === 0) { return 0 };

  let result = 0;
  let totalSum = 0;
  let scoresArr = [];
  let cleanDirector = toCleanString(director);

  array.map(movie => {
    if (cleanDirector === toCleanString(movie.director)) {
      scoresArr.push(movie.score);
    }
  });

  totalSum = scoresArr.reduce((total, value) => total += value);
  result = parseFloat((totalSum / scoresArr.length).toFixed(2));

  return result;
}



function orderAlphabetically(array) {

  const result = array
    .map(element => element.title)
    .sort()
    .slice(0, 20);

  return result;
}
orderAlphabetically(movies);


function orderByYear(array) {
  let orderedMoviesArray = [...array];

  orderedMoviesArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
  return a.title.localeCompare(b.title);
  });

  return orderedMoviesArray;
}



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

  return parseFloat(result.toFixed(2));
}



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

    } else if (!time.includes("min")) {
      hoursInMinutes = parseInt(hours) * 60;
      result = hoursInMinutes;
    }

    return {
      ...element,
      duration: result,
    };
  });

  return arrCopy;
}



function bestFilmOfYear(array, yearInput) {
  if (array.length === 0 || !yearInput) return [];

  let maxScore = 0;
  let bestTitles = [];
  const filteredMoviesPerYear = [];

  array.map(movie => {
    if (movie.year === parseInt(yearInput)) {
      filteredMoviesPerYear.push(movie);
    }
  });

  if (filteredMoviesPerYear.length === 0) return [];

  maxScore = Math.max(...filteredMoviesPerYear.map(movie => movie.score));

  filteredMoviesPerYear.forEach(movie => {
    if (movie.score === maxScore) {
      bestTitles.push(movie);
    }
  });
  return bestTitles;
}


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