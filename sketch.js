// The RiTa lib is included in index.html
// The text files are files in the project

let lines, markov, txt1, txt2;
let x = 300, y = 400;
let a = 255;
var savedTime;
var totalTime = 10000;
var passedTime;


function preload() {
  txt1 = loadStrings('data/testimony.txt');
  txt2 = loadStrings('data/muellerreport.txt');
}

function setup() {
  createCanvas(1000, 1000);
  textLeading(20);
  textFont('Courier', 28);
  textLeading(30);
  textAlign(LEFT);
   savedTime = millis();
  lines = ["hypothetically speaking..."];
  
  // create a markov model w' n=4
  markov = RiTa.markov(5);

  // load text into the model
  markov.addText(txt1.join("\n",' '));
  markov.addText(txt2.join("\n",' '));
}

function draw() {
  a = savedTime%255;
  passedTime = millis() - savedTime;
  background(255,10);
  fill(25,75);
  text(lines, x, y, width - 200, height-200);

  
  
  if (passedTime > totalTime) {
      markovIt();

  }
  
  //console.log(passedTime);
}

function markovIt() {
  x =100;
  y =150,
  lines = (" ",markov.generate(10));
  savedTime = millis();

  
}

function mousePressed() {
      let fs = fullscreen();
  
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    fullscreen(!fs);
    console.log(!fs);
  }


}


