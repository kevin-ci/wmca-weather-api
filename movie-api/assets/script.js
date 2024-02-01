const apiKey = "8229f396";

const buttonElement = document.getElementById("button");
const inputElement = document.getElementById("input");
const resultArea = document.getElementById("result-area");

function handleButtonClick() {
    let movieTitle = inputElement.value;
    let url = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        showFilmData(data);
    });
}

buttonElement.addEventListener('click', handleButtonClick);

function showFilmData(data) {
    let title = data.Title;
    let year = data.Year;
    let director = data.Director;
    let poster = data.Poster;
    let genre = data.Genre;
    let runtime = data.Runtime;
    let cast = data.Actors;
    let plot = data.Plot;
    let imdbRating = data.imdbRating;
    let htmlString = `
    <h1>${title}</h1>
    <h4>${year}, ${director}</h4>
    <img src="${poster}">
    <p>${genre}; ${runtime}</p>
    <p>Starring: ${cast}</p>
    <p>${plot}</p>
    <p>IMDb Rating: ${imdbRating}</p>
    `;
    resultArea.innerHTML = htmlString;
}