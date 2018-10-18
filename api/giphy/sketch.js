//API part
const api = "https://api.giphy.com/v1/gifs/search?";
const apiKey = "api_key=Your_API_Key";
const query = "&q=cat"; //sexy ryan gosling
let gifs = [];
const url = api + apiKey + query;
let changeState = false ;
//var gifData;

//keep track of time
let m, h, s ;

function setup() {
  noCanvas();
}


function draw(){
  //keep track of time
  m = minute();
  h = hour();
  s = second();
  
  //print("hour:" + h + " min: " + m + " sec: " + s);
	//print(changeState);
  
  //pull new data every 5 seconds
  if (s % 5 === 0) {
  gifData =	loadJSON(url, gotData); //gotData
  //print(gifs);
  //console.log(url);
  }
}

//when something happens, show a gif
//right now, testing with mouse clicks
function mouseReleased() {
  removeElements();
  img = createImg(random(gifs));
	img.size(400, 400);	
	changeState = !changeState ;
  //console.log(gifs);

}

//this function creates the array
function gotData(giphy) {
  for (let i = 0; i < 10; i++) {
  	gifs = append(gifs, giphy.data[i].images.original.url);
	}
}

