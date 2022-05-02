//lunar vinyl
let gridSpacing = 40

let poly;
let delay;
let reverb;

let notes = ["C","D","E","G"]
// let notes = ["C","D","E","G","A"]

let octave = 4
let direction = 1

let W = window.innerWidth
let H = window.innerHeight

let angle;

var x;
var y1;

//type writer
let str = "";
let actualLetter = "";
let moons = [];
let drawmoons = [];
let key1 = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
let key2 = [
  ",0",
  ",1,",
  ",2",
  ",3",
  ",4",
  ",5,",
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



function setup() {

//createCanvas(windowWidth, windowHeight);

//noStroke();
//fill(255);
//textStyle(BOLD);
//textFont(fontOld2);
//textSize(15);

moon();


}





function moon(){

  let a=select('#moon1');
  a.style('visibility', 'visible');

    poly = new p5.PolySynth();

    delay = new p5.Delay();
    reverb = new p5.Reverb();


    reverb.process(poly, 2, 2); //to only add reverb, toggle the others off.
    // delay.process(poly, 0.50, 0.5, 2300);
    // reverb.process(delay, 4, 2);

  let i = 0;
  //let cts = ['c','l', 'i', 'c',' k', '〰', 'f','o','r', '〰', 's','o','u','n','d','!']

  // x=200 * cos(0);
  // y1= 200 * sin(0);

  var avd = 360/(H - (40 * 2))+0;
  var ahd = avd*PI/180;

  console.log(H - (30 * 2));

  for (let y = 0; y < 380; y += 20) {

    //for (let x = 40; x < W - 40; x += 40) {

      let angle = radians(y);
      let x = 700+width / 2 + cos(angle) * min(width, height) / 0.5;
      let y1 = 300+height / 2 + sin(angle) * min(width, height) / 0.5;



        let p
        //angle=rotate(20deg);
        p = createP("〰");
        //p.position(x, y)
        p.position(x, y1);
        //p.style('left','sin((ahd*y))*200+20')
        //p.style('transform', 'translate(0%,-50%)')
        // p.style('transform', 'translate(20deg)');
        // p.style('transform', 'rotate(20deg)');
        //p.style('animation', 'spin 10s linear infinite reverse')
        //p.style.transform="rotate(20deg)"
        //p.arc(0, 0, 30, 0, 2 * Math.PI, true)
        //p.toCircle();
        p.style('font-size', 35 + 'px')
        p.mousePressed(changeEmoji)
        p.mouseOver(changeEmoji)

        //pop()

        //x+=10
        //y1+=40

      //}
    }

    for (let y = 0; y < 370; y += 18) {
        let angle = radians(y);
        let x = 700+width / 2 + cos(angle) * min(width, height) / 0.37;
        let y1 = 300+height / 2 + sin(angle) * min(width, height) / 0.37;
        let p
          p = createP("〰");
          p.style('font-size', 35 + 'px')
          p.position(x, y1);
          p.mousePressed(changeEmoji)
          p.mouseOver(changeEmoji)
      }


      for (let y = 0; y < 365; y += 10) {
          let angle = radians(y);
          let x = 700+width / 2 + cos(angle) * min(width, height) / 0.29;
          let y1 = 300+height / 2 + sin(angle) * min(width, height) / 0.29;
          let p;
            p = createP("〰");
            p.style('font-size', 35 + 'px')
            p.position(x, y1);
            p.mousePressed(changeEmoji)
            p.mouseOver(changeEmoji)

        }
}


function mousePressed(){
  userStartAudio()


}

function changeEmoji() {
  userStartAudio()

  let randNote = floor(random(notes.length))

  if(random(1)<0.1){
    octave+= direction
  }
  if(octave >= 6){
    direction = -1
  }
  if(octave <= 4){
    direction = 1
  }

  poly.play(notes[randNote] + octave , .15, 0, 0.25);


  //change the html inside of THIS p tag to be a new random emoji
  this.html(randomEmoji())
}

//
// function pick(){
//   this.html("〰")
// }

//utility function
function randomEmoji() {

  let emojis = ['🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔']

  let creature = ['🌙', '🌙', '🌙']

  let output;

  if (random(1) < 0.03) {
    let rand = floor(random(creature.length))
    output = creature[rand];
  } else {
    let rand = floor(random(emojis.length))
    output =  emojis[rand]
  }


  //favicon replacement
  //https://css-tricks.com/emojis-as-favicons/
  const linkForFavicon = document.querySelector(
    `head > link[rel='icon']`
  );

  newFavicon = faviconTemplate`${output}`;
    // console.log(newFavicon);
    linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${newFavicon}`);

  return output;

}


function faviconTemplate(string, icon) {
  return `
    <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
      <text y=%22.9em%22 font-size=%2290%22>
        ${icon}
      </text>
    </svg>
  `.trim();
}
