// The RiTa lib is included in index.html
// The text files are files in the project

let lines, markov, txt1, txt2;
let x = 160, y = 240;

function preload() {

  txt1 = loadStrings('testimony.txt');
  txt2 = loadStrings('report.txt');
}

function setup() {

  createCanvas(500, 500);
  textFont('helvetica', 16);
  textLeading(21);
  textAlign(LEFT);

  lines = ["click to (re)generate"];
  
  // create a markov model w' n=4
  markov = RiTa.markov(4);

  // load text into the model
  markov.addText(txt1.join(' '));
  markov.addText(txt2.join(' '));

  drawText();
}

function drawText() {
  background(50, 30, 40);
  fill(220);
  text(lines.join(' '), x, y, 420, 440);
}

function mouseClicked() {
  lines = markov.generate(10);
  x = 40;
  y = 40;
  drawText();
}

  
 




