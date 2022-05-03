const firebaseConfig = {
  apiKey: "AIzaSyDXbfNzZepnxzKMTob0VeD6PQVYRKuuwGk",
  authDomain: "mind-media-final.firebaseapp.com",
  databaseURL: "https://mind-media-final-default-rtdb.firebaseio.com",
  projectId: "mind-media-final",
  storageBucket: "mind-media-final.appspot.com",
  messagingSenderId: "73316270802",
  appId: "1:73316270802:web:78447e3e28466216af230b",
};

//firebase variables
let group = "mySillyRoomName";
let typeOfThing = "types";
let db;
let allStrokesLocal = {};

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
var fadeAmount = 1;

var a = 0;
var change = 0.3;

var d = 0;

let maxDiameter = 15;
let theta = 0;

function preload() {
  receipt = loadImage("receipt0503.png");
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
  max_distance = dist(0, 0, width, height);
  //firebase
  connectToFirebase();

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
    //textExpand(actualLetter,actualLetter, windowWidth / 2 - 130, windowHeight / 2 + 120, 200, 100);
     textExpand(actualLetter, windowWidth / 2 - 130, windowHeight / 2 + 120, 200, 100);
    // //text(actualLetter, 500,500);
    // //if (fade<0) fadeAmount=1;
    // //if (fade>255) fadeAmount=-10;
    fade += fadeAmount;

    showAll();


    button = createButton("BACK TO VINYL");
    button.position(windowWidth / 2 - 80, windowHeight / 2 + 350);
    button.mousePressed(gotolink);
  }

  //console.log(h)
}

function showAll() {
  loop();
  //noStroke();
  let count = 0;
  //textWrap(WORD);
  let thisText = "a";

  fill(255, 0, 0, 255);
  //noStroke();
  ellipseMode(CENTER);
  textAlign(LEFT, CENTER);
  // textH = 20
  // textSize(textH);
  var diam = 5 + sin(theta) * maxDiameter;
  //textExpand('Here','thisText.text', 130, 150+ count*50);
  // ellipse(100, 150+ count*50, diam, diam);

  //textExpand('United States', 'test1', 130, 100, 20);

  for (var key in allStrokesLocal) {
    thisText = allStrokesLocal[key];

    fill(0,0,0,fade);

    //text(thisText.text,130,count*50+100);
    //textExpand("     ", thisText.text, 130, 100 + count * 50);
    textExpand(thisText.text, 130, 100 + count * 50);
    fill(255,255,255,fade)
    ellipse(100, 100 + count * 50, diam, diam);
    count += 1;
    // if(mouseX < 200 && mouseX > 100){
    //   d = d + 10;
    //   if(d>255){
    //     d = 0;
    //   }
    // }
  }
  theta += 0.03;

}

function gotolink() {
  window.open("https://xinlanye.github.io/lunarvinyl/");
}

function keyPressed() {
  if (key == "Enter") {
    addStrokeToDB();
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
      strokeDots.push(key);

      //更新图片，加到需要draw出来的array里
      drawmoons.push(moons[i]);
    }
  }
}

function moontyper() {
  background(0);
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = color(230, 230, 230);
  fill(255, 255, 255, a);
  textSize(30);
  textAlign(CENTER);
  text(
    "leave a message to someone you love",
    windowWidth / 2,
    windowHeight / 2
  );
  a += change;

  if (a > 70) {
    change = -change;
  } else if (a < 0) {
    change = -change;
  }

  let len = str.length;
  textAlign(LEFT);
  fill(0);
  textSize(15);
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
  //console.log(str);
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
  //console.log(drawmoons);
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
  if (state=="secondScene" && dist(mouseX, mouseY, buttonx, buttony) < 55 / 2) {
    state = "3scene";
  }
  strokeDots = [];
}

//firebase functions
function addStrokeToDB() {
  let mydata = {
    locations: strokeDots,
    text: actualLetter,
  };
  //add a stroke
  let dbInfo = db.ref("group/" + group + "/" + typeOfThing + "/").push(mydata);
}

function connectToFirebase() {
  const app = firebase.initializeApp(firebaseConfig);
  db = app.database();

  var myRef = db.ref("group/" + group + "/" + typeOfThing + "/");
  myRef.on("child_added", (data) => {
    console.log("add", data.key, data.val());
    let key = data.key;
    let value = data.val();
    //update our local variable
    allStrokesLocal[key] = value;
    //console.log(allStrokesLocal);
  });

  //not used
  myRef.on("child_changed", (data) => {
    console.log("changed", data.key, data.val());
  });

  //not used
  myRef.on("child_removed", (data) => {
    console.log("removed", data.key);
  });
}

// function textExpand(textMain, textAdd, textX, textY) {
//   // textSize(textH);
//   text(textMain, textX, textY);
//   textW = textWidth(textMain);
//   if (
//     mouseX > textX - 30 &&
//     mouseX < textX + textW &&
//     mouseY < textY + 8 &&
//     mouseY > textY - 8
//   ) {
//     fill(0,0,0)
//     text(textMain, textX, textY );
//     fill(255,255,255);
//     text(textAdd, textX, textY);
//   }
// }
function textExpand(textMain, textX, textY) {
  // textSize(textH);
  text(textMain, textX, textY);
  textW = textWidth(textMain);
  if (
    mouseX > textX - 30 &&
    mouseX < textX + textW &&
    mouseY < textY + 8 &&
    mouseY > textY - 8
  ) {
     fill(255,255,255)
    text(textMain, textX, textY );
    // fill(255,255,255);
    // text(textAdd, textX, textY);
  }
}
