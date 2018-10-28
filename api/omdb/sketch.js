const baseUrl = "http://www.omdbapi.com/";
const apiKey = "your api key";
// actually for this api you don't need to use arrays
let titles = [];
let genres = [];
let ratings = [];
let input;

function setup() {
	createCanvas(800,500);
	input = createInput();
	input.value('Star Wars');
  input.position(20, 20);
	const button = createButton('search');
  button.position(180, 20);
	button.mousePressed(search);
  
	const url = baseUrl + `?apikey=${apiKey}&t=Star+Wars&plot=full`;
	loadJSON(url, gotData);
}

function search() {
	const query = input.value();
	const url = baseUrl + `?apikey=${apiKey}&t=${query}`;
	loadJSON(url, gotData);	
}

function gotData(data) {
	console.log("data", data.Title);
	const title = data.Title;
	const genre = data.Genre;
	const rating = data.imdbRating;

	titles.push(title);
	genres.push(genre);
	ratings.push(rating);
	
	showMovieData();
}

function showMovieData() {
	background(0);
	const fontsize = 10;
	background(0);
	
	textSize(fontsize);
	for(let i=0; i<titles.length; i++) {
		const dispText = titles[i] + "\n" + genres[i] + " - " + ratings[i];
		fill(255);
		text(dispText, 10, i*40 + 80);
	}
  
}


