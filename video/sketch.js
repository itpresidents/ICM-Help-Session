var video;
var vScale = 16;
var sound;
var sLen;
var brightImg;
var darkImg;

// add sound off button
var btn;
var playFlg;


function mute() {
  if(playFlg) {
    playFlg = false;
    $("#soundBtn").text("sound on");
  } else {
    playFlg = true;
    $("#soundBtn").text("sound off");
    
  }
}

function setup() { 
	//createCanvas(640, 480, WEBGL);
	createCanvas(540, 360);
  
	pixelDensity(1);
	brightImg = loadImage("img/bright.png");
	darkImg = loadImage("img/dark.png");
	sound = loadSound("sound/motion.mp3");
	sLen = sound.duration();
	//sound.loop();  
  	//sound.rate(0.03);
  	//sound.setVolume(0.01);
	video = createCapture(VIDEO);
	video.size(width/vScale, height/vScale);
  video.hide();
  // for button
  playFlg = false;
  btn = createButton("sound on");
  btn.id("soundBtn");
	btn.position(0, height+10);
	btn.mousePressed(mute);
  
} 

function draw() { 
	background(51);
	video.loadPixels();
	loadPixels();
	for(var y = 0; y<video.height; y++) {
		for (var x = 0; x < video.width; x++) {
			var index = (video.width - x + 1 + (y * video.width))*4;
			var r = video.pixels[index + 0];
			var g = video.pixels[index + 1];
			var b = video.pixels[index + 2];

			var bright = (r + g + b)/3;
			var w = map(bright, 0 ,255, 0, vScale);
			
			if(w > vScale * 0.4) {
				image(brightImg, x*vScale, y*vScale, vScale, vScale);
				var timing = random();
				if(random(0, 1.0) >= 0.999599) {
          if(playFlg && random() > 0.85 ) {
						sound.play();	
          }
				}
			} else {
				image(darkImg, x*vScale, y*vScale, vScale, vScale);
			}

		}
	}
	
}
