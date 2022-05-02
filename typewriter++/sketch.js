// state1 variables
let str = "";
let c = 0;
let bkImage;
let state = "firstScene";
let actualLetter = "";
let moons = [];
let drawmoons = [];
let key1 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let key2 = [
  ",0",
  ",1",
  ",2",
  ",3",
  ",4",
  ",5",
  ",6",
  ",7",
  ",8",
  ",9",
  ",10",
  ",11",
  ",12",
  ",13",
  ",14",
  ",15",
  ",16",
  ",17",
  ",18",
  ",19",
  ",20",
  ",21",
  ",22",
  ",23",
  ",24",
  ",25",
];
// state 2 variables;
let strArray = [];
let nValue;
var level1 = 600;
var level2 = 450;

var yoff = 0;

let rectWidth = 30;
let rectHeight = 30;

let rectx = -rectWidth;
let moonx = -rectWidth;

let buttonx = 60;
let buttony = 50;

var fade = 0;
var fadeAmount = 1

function preload() {
  receipt = loadImage("receipt.png");
  film = loadImage("film.gif");
  bkImage = loadImage("space.png");
  fontOld = loadFont("Erika.ttf");
  fontOld2 = loadFont("Harting.ttf");
  typerSound = loadSound("typerSound.wav");
  returnSound = loadSound("returnSound.wav");
  bgMoon = loadSound("bgMoon.m4a");
  moons[0] = loadImage("a.png");
  moons[1] = loadImage("b.png");
  moons[2] = loadImage("c.png");
  moons[3] = loadImage("d.png");
  moons[4] = loadImage("e.png");
  moons[5] = loadImage("f.png");
  moons[6] = loadImage("g.png");

  moons[7] = loadImage("h.png");
  moons[8] = loadImage("i.png");
  moons[9] = loadImage("j.png");
  moons[10] = loadImage("k.png");
  moons[11] = loadImage("l.png");
  moons[12] = loadImage("m.png");
  moons[13] = loadImage("n.png");

  moons[14] = loadImage("o.png");
  moons[15] = loadImage("p.png");
  moons[16] = loadImage("q.png");
  moons[17] = loadImage("r.png");
  moons[18] = loadImage("s.png");
  moons[19] = loadImage("t.png");
  moons[20] = loadImage("u.png");

  moons[21] = loadImage("v.png");
  moons[22] = loadImage("w.png");
  moons[23] = loadImage("x.png");
  moons[24] = loadImage("y.png");
  moons[25] = loadImage("z.png");
}

function setup() {
  //createCanvas(windowWidth, windowHeight);
  strArray = split(str, ",");

  if (state == "firstScene") {
    state1setup();
  } else if (state == "secondScene") {
    state2setup();
    // state1setup.hide();
  }
}

function draw() {
  if (state == "firstScene") {
    moontyper();
    push();
    Blink();
    rect(45 + textWidth(actualLetter), 40, 2, 12);
    pop();
  } else if (state == "secondScene") {
    typerSound.pause();
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = color(230, 230, 230);

    //fill(0);
    midMoon();
    drawRec();
    drawwater();
    drawwater2();

    push();
    tint(255, 120);
    image(film, 0, 0, windowWidth, windowHeight);
    pop();
  } else if (state == "3scene") {
    background(0);
    drawingContext.shadowBlur = 50;
    drawingContext.shadowColor = color(230, 230, 230);
    image(receipt, windowWidth / 2 - 200, windowHeight / 2 - 300, 349, 624);
    fill(255, 0, 0, fade);
    text(actualLetter, windowWidth / 2 - 130, windowHeight / 2 + 120, 200, 100);
    //if (fade<0) fadeAmount=1;
    //if (fade>255) fadeAmount=-10;
    fade += fadeAmount;

    button = createButton("BACK TO VINYL");
    button.position(windowWidth / 2 - 80, windowHeight / 2 + 350);
    button.mousePressed(gotolink);
  }

  //console.log(h)
}

function gotolink() {
  window.open("https://xinlanye.github.io/lunarvinyl/");
}

function keyPressed() {
  if (key == "Enter") {
    returnSound.play();
    state = "secondScene";
     if (!bgMoon.isPlaying()) {
          bgMoon.loop();
     }
    typerSound.pause();
  } else {
    //if(!typerSound.isPlaying()){
    typerSound.play();
    //}

    if (key == "Backspace") {
      //string
      let lastLetter = actualLetter[actualLetter.length - 1];
      if (lastLetter != " ") {
        actualLetter = actualLetter.substring(0, actualLetter.length - 1);
      } else {
        actualLetter = actualLetter.substring(0, actualLetter.length - 2);
      }
      drawmoons.pop();
    } else if (key == " ") {
      actualLetter += " ";
    }
    // else if (key == "Enter"){
    //   state = "secondScene";
    //   typerSound.pause();
    // }
  }
}
function keyTyped() {
  // str += key;
  for (let i = 0; i <= key1.length; i++) {
    if (key === key1[i]) {
      str += key2[i];
      actualLetter += key;

      //更新图片，加到需要draw出来的array里
      drawmoons.push(moons[i]);
    }
  }
}

function moontyper() {
  background(0);
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = color(230, 230, 230);

  let len = str.length;
  //fill(0);
  text(actualLetter, 45, 50);

  let xstart = 0;
  let count = 0;
  let indexInDrawMoons = 0;

  for (i = 0; i < actualLetter.length; i++) {
    if (actualLetter[i] == " ") {
      xstart = i + 1;
      count += 1;
    } else {
      // image(drawmoons[indexInDrawMoons], ((windowWidth/2)-(i-xstart)*45), (100+70*count));
      image(
        drawmoons[indexInDrawMoons],
        45 + (i - xstart) * 45,
        100 + 85 * count
      );
      indexInDrawMoons += 1;
    }
    //image(drawmoons[i], i * 45, windowHeight / 2);
  }
  console.log(str);
}
function Blink() {
  let n = 80;
  c++;
  if (c % n > n / 2) {
    fill(0);
  } else {
    fill(255, 0, 0);
  }
}

function state1setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0);
  textStyle(BOLD);
  textFont(fontOld2);
  textSize(15);
}

function state2setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
}

function drawwater() {
  //background(0);
  stroke(0, 0, 0, 20);
  strokeWeight(1);

  //fill(0, 0, 0, 20);
  fill(65, 65, 65);
  // fill('rgba(200,200,200,0.25)');
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] < 13) {
      nValue = 13 - strArray[i];
    } else if (strArray[i] > 13) {
      nValue = strArray[i] - 13;
    } else if (strArray[i] == 13) {
      nValue = 0;
    }
  }


  // We are going to draw a polygon out of the wave points
  beginShape();
  var xoff = 0; // Option #1: 2D Noise

  for (var x = 0; x < 0.3 * windowWidth + 10; x += 10) {
    // Calculate a y value according to noise, map to
    //nValue = 13
    var y = map(noise(xoff, yoff), 0, 1, level1, level2 - 10 * nValue);

    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(0.3 * windowWidth, 0.3 * windowHeight);
  vertex(0, 0.3 * windowHeight);

  endShape(CLOSE);
}

function drawwater2() {
  stroke(0, 0, 0, 20);
  strokeWeight(1);

  //fill(0, 0, 0, 20);
  fill(65, 65, 65);
  // fill('rgba(200,200,200,0.25)');
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] < 13) {
      nValue = 13 - strArray[i];
    } else if (strArray[i] > 13) {
      nValue = strArray[i] - 13;
    } else if (strArray[i] == 13) {
      nValue = 0;
    }
  }

  // We are going to draw a polygon out of the wave points
  beginShape();

  var xoff = 0; // Option #1: 2D Noise

  for (var x2 = 0.7 * windowWidth; x2 < windowWidth + 10; x2 += 10) {
    // Calculate a y value according to noise, map to
    //nValue = 13
    var y2 = map(noise(xoff, yoff), 0, 1, level1, level2 - 10 * nValue);

    vertex(x2, y2);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(windowWidth, 0.3 * windowHeight);
  vertex(0.7 * windowWidth, 0.3 * windowHeight);

  endShape(CLOSE);
}

function midMoon() {
  background(0);
  console.log(drawmoons);
  //drawmoons.delay(100);
  for (i = 0; i < drawmoons.length; i++) {
    // if (actualLetter[i] == " ") {
    //   image(bkImage, windowWidth / 2 - 90, windowHeight / 2 -100, 180, 200);
    // }
    // else {
    image(
      drawmoons[i],
      windowWidth / 2 - 185 + moonx * 10,
      windowHeight / 2 - 100,
      180,
      200
    );
    if (moonx > windowWidth) {
      moonx = -rectWidth;
    }
    moonx += 40;
    //  }
  }
  fill(0, 0, 0);
  rect(0.6 * windowWidth, 0, 0.4 * windowWidth, windowHeight);
  rect(0, 0, 0.4 * windowWidth, windowHeight);
}
function drawRec() {
  // background(0);

  // image(bkImage,0,0);
  fill(65, 65, 65);
  if (rectx > windowWidth) {
    rectx = -rectWidth;
  }
  for (let i = 0; i < windowWidth; i += 10) {
    rect(rectx + i * 10, 0.2 * windowHeight, rectWidth, rectHeight);
    rect(rectx + i * 10, 0.8 * windowHeight, rectWidth, rectHeight);

    rectx += 5;
  }

  rect(0, 0, windowWidth, 0.15 * windowHeight);
  rect(0, 0.875 * windowHeight, windowWidth, 0.15 * windowHeight);

  fill(255, 0, 0);
  ellipse(buttonx, buttony, 55);
}

function mousePressed() {
  if (dist(mouseX, mouseY, buttonx, buttony) < 55 / 2) {
    state = "3scene";
  }
}
