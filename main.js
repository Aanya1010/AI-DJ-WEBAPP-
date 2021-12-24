 var song1="";
 var song2="";

 function preload() {
song1 = loadSound(sorry.mp3);
song2 = loadSound(Love-Me-Like-You-Do.mp3)
 }
 function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video=createCapture(VIDEO);
    video.hide();
    }

 function draw() {
    image(0, 0, 600, 500);
 }