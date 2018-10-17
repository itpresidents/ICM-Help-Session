const baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const apiKey = "your_api_key";
let urls = [];
let titles = [];
let input;

function setup() {
	createCanvas(800,500);
	input = createInput();
	input.value('Sushi');
  input.position(20, 20);
	const button = createButton('search');
  button.position(180, 20);
	button.mousePressed(search);
  
	const url = baseUrl + `?api-key=${apiKey}&q=Sushi`;
	loadJSON(url, gotData);
}

function search() {
	const query = input.value();
	const url = baseUrl + `?api-key=${apiKey}&q=${query}`;
	loadJSON(url, gotData);	
}

function gotData(data) {
	// console.log("data", data);
	// clear arrays
	urls = [];
	titles = [];
	const res = data["response"]["docs"]
	for(let i=0; i<res.length; i++) {
		const url = res[i]["web_url"];
		const title = res[i]["snippet"];
		// console.log("url", url);
		// console.log("title", title);
		urls.push(url);
		titles.push(title);
	}
	showArticles();
}

function showArticles() {
	// display title + url
	background(0);
	const fontsize = 10;
	background(0);
	
	textSize(fontsize);
	for(let i=0; i<titles.length; i++) {
		const dispText = titles[i] + "\n" + urls[i]
		fill(255);
		text(dispText, 10, i*40 + 80);
	}
  
}


