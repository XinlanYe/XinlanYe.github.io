// variable to hold a reference to our A-Frame world
var world;
var level1, level2;
var light1;
var lightSpeed=0.1;

let ting;

var particles = [];

var currentImage = 0;

var sensor;
var p1;

var canvas1;

var text1;
var text2;
var text3;
var text4;
var text5;
var text6;
var text7;
var text8;

var text_user;

var intro_text;

var capture;
var take_photo;

var cam_box1;
var cam_box2;

function preload(){
	ting=loadSound("Ting.mp3")
}


function setup() {

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');
	// level1=new Container3D({
	// 	x:0, y:0, z:0
	// })
	// world.add(level1)

//texture of the box
	// what textures can we choose from?
	var textures = ['wood'];

	text_user = new Plane({
 	x:0, y:1, z:-5.6,
 	width: 5,
 	height: 1,
	rotationY: 180,
	red: 230, green: 230, blue: 230,

 	 });

	 world.add(text_user);

	// //PHOTOGRAPHY
 // p1=new Plane({
	// 	x:-10,y:1,z:2,
	// 	width:3, height:2,
	// 	asset: 'photo1',
	// 	side:'double',
 //
 //
	// })
	// world.add(p1);

	var tok = new TorusKnot({
						x: 20 , y:1, z:25,
						radius:5,
						radiusTubular: 0.08,
						red:0, green:0, blue:0,
					});
world.add(tok);

var tok2 = new TorusKnot({
					x: 20 , y:1, z:30,
					radius:7,
					radiusTubular: 0.1,
					roughness:0.5,
					red:70, green:70, blue:70,
				});
world.add(tok2);

var tok3 = new TorusKnot({
					x: 20 , y:1, z:21,
					radius:9,
					radiusTubular: 0.2,
					red:100, green:0, blue:0,
				});
world.add(tok3);

	// construct a new Container
	container0 = new Container3D({x:16, y:1, z:20});

	// add two balls to the container
	var b1 = new Sphere({
		x:-4, y:7, z:-6,
		red:0, green:0, blue:0,
		radius:0.8,
		opacity:0.6,

	});

	var b2 = new Sphere({
		x:4, y:7, z:6,
		red:0, green:0, blue:0,
		radius:0.8,
		opacity:0.6,

	});
	container0.addChild(b1);
	container0.addChild(b2);

	world.add(container0);



	var ball = new Sphere({
						x: -19 , y:1, z:25,
						opacity:0.6,
						radius:8,
						roughness:0,
						red:random(10,190), green:0, blue:0,
					});
	world.add(ball);

	container = new Container3D({
		x:-10, y:1, z:20,
	});

	world.add(container);

	var t1 = new Tetrahedron({
						x: -10, y:5, z:-2,
						radius: 1.2,
						red:255, green:255, blue:255,

						clickFunction: function(me){
							me.setRed(random(0,255))
							me.setGreen(random(0,255))
							me.setBlue(random(0,255))
						},

					});
	container.addChild(t1);

	var t2 = new Tetrahedron({
						x: -10, y:5, z:0,
						radius: 1.1,
						red:255, green:255, blue:255,

						clickFunction: function(me){
							me.setRed(random(0,255))
							me.setGreen(random(0,255))
							me.setBlue(random(0,255))
						},

					});
	container.addChild(t2);

	var t3 = new Tetrahedron({
						x: -10, y:5, z:2,
						radius: 1,
						red:255, green:255, blue:255,

						clickFunction: function(me){
							me.setRed(random(0,255))
							me.setGreen(random(0,255))
							me.setBlue(random(0,255))
						},

					});
	container.addChild(t3);


	var to = new Torus({
						x: -19 , y:1, z:25,
						radius:1.7,
						radiusTubular: 0.05,
						rotationX:90,
						red:random(255), green:random(255), blue:random(255),
					});
 world.add(to);


 // introduction panel
 intro_frame = new Box({
	 width: 10,
	 height: 15,
	 x: 0,
	 y: 0,
	 z: -5,
	 red: 230, green: 230, blue: 230,

 })

 intro_frame.tag.object3D.userData.solid = true;


 var white1=new Box({
	 x:0,y:4,z:-5.6,
	 width: 4.5,
	 height:4.5,
	 depth: 0.2,
	 red: 255, green: 255, blue: 255,

	})

	screen1 = new Plane({
		width: 4,
		height: 4,
		x: 0,
		y: 4,
		z: -5.75,
		asset: 'p5canvas',
		side:'double',
	})
	world.add(screen1);

 intro_text = new Plane({
	x:0, y:4, z:-4.5,
	width: 6,
	height: 1,
	red: 230, green: 230, blue: 230,
	 });


 world.add(white1);
 world.add(intro_frame);
 world.add(intro_text);

//small walls that hang the artworks
 frame_container=new Container3D({x:20, y:1, z:0});
 world.add(frame_container);
 var frame1 = new Box({
	 x:5,y:0,z:-10,
	 width: 20,
	 height: 15,
	 depth: 1,
	 red: 255, green: 255, blue: 255,
	 clickFunction: function(me){
		 take_photo = capture.get();
		 image(take_photo, 0, 0);
	 }
 })
 frame1.tag.object3D.userData.solid = true;
 var blk1=new Box({
	 x:1,y:4,z:-9.5,
	 width: 6,
	 height:4.5,
	 depth: 0.2,
	 red: 0, green: 0, blue: 0,

 })

 var p2=new Plane({
	 x:1,y:4,z:-9.39,
	 width:5.75, height:4.25,
	 asset: 'photo2',
	 clickFunction: function(me){
		 take_photo = capture.get();
		 image(take_photo, 0, 0);
	 }
	 //side:'double',
 })

	text1 = new Plane({
	 x:1, y:1, z:-9.39,
	 width: 5,
	 height: 1

	  });

	 // second picture on the wall
 var blk2=new Box({
		x:9,y:4,z:-9.5,
		width: 6,
		height:4.5,
		depth: 0.2,
		red: 0, green: 0, blue: 0,

	 })

	var p3=new Plane({
		x:9,y:4,z:-9.39,
		width:5.75, height:4.25,
		asset: 'photo3',
		clickFunction: function(me){
 		 take_photo = capture.get();
 		 image(take_photo, 0, 0);
 	 }
		//side:'double',
	 })

	text2 = new Plane({
		x:9, y:1, z:-9.39,
		width: 5,
		height: 1
	})



 frame_container.addChild(frame1);
 frame_container.addChild(blk1);
 frame_container.addChild(p2);
 frame_container.addChild(text1);

 frame_container.addChild(blk2);
 frame_container.addChild(p3);
 frame_container.addChild(text2);


// another exhibition wall
 var frame2 = new Box({
	x:0,y:0,z:-30,
	width: 20,
	height: 15,
	depth: 1,
	red: 255, green: 255, blue: 255,
	clickFunction: function(me){
		take_photo = capture.get();
		image(take_photo, 0, 0);
	}
 })

 frame2.tag.object3D.userData.solid = true;

 var blk3=new Box({
	x:-4,y:4,z:-29.5,
	width: 6,
	height:4.5,
	depth: 0.2,
	red: 0, green: 0, blue: 0,

 })

 var p4=new Plane({
	x:-4,y:4,z:-29.39,
	width:5.75, height:4.25,
	asset: 'photo4',
	clickFunction: function(me){
		take_photo = capture.get();
		image(take_photo, 0, 0);
	}
 })

 text3 = new Plane({
	x:-4, y:1, z:-29.39,
	width: 5,
	height: 1

	 });

	// second picture on the wall
 var blk4=new Box({
	 x:4,y:4,z:-29.5,
	 width: 6,
	 height:4.5,
	 depth: 0.2,
	 red: 0, green: 0, blue: 0,

	})

 var p5=new Plane({
	 x:4,y:4,z:-29.39,
	 width:5.75, height:4.25,
	 asset: 'photo5',
	 clickFunction: function(me){
		 take_photo = capture.get();
		 image(take_photo, 0, 0);
	 }
	})

 text4 = new Plane({
	 x:4, y:1, z:-29.39,
	 width: 5,
	 height: 1
 })

 frame_container.addChild(frame2);
 frame_container.addChild(blk3);
 frame_container.addChild(p4);
 frame_container.addChild(text3);

 frame_container.addChild(blk4);
 frame_container.addChild(p5);
 frame_container.addChild(text4);

 frame_container.tag.object3D.userData.solid = true;

// left side
 frame_container2=new Container3D({x:-20, y:1, z:-5});
 world.add(frame_container2);

 var frame3 = new Box({
	 x:5,y:0,z:-10,
	 width: 25,
	 height: 15,
	 depth: 1,
	 red: 255, green: 255, blue: 255,
	 clickFunction: function(me){
		 take_photo = capture.get();
		 image(take_photo, 0, 0);
	 }
 })

 frame3.tag.object3D.userData.solid = true;

 var blk5=new Box({
	 x:-2,y:4,z:-9.5,
	 width: 4.5,
	 height:6,
	 depth: 0.2,
	 red: 0, green: 0, blue: 0,

 })

 var p6=new Plane({
	 x:-2,y:4,z:-9.39,
	 width:4.25, height:5.75,
	 asset: 'photo6',
	 clickFunction: function(me){
		 take_photo = capture.get();
		 image(take_photo, 0, 0);
	 }
 })

	text5 = new Plane({
	 x:-2, y:0.5, z:-9.39,
	 width: 5,
	 height: 1

});

	 // second picture on the wall
 var blk6=new Box({
		x:6,y:4,z:-9.5,
		width: 4.5,
		height:6,
		depth: 0.2,
		red: 0, green: 0, blue: 0,

	 })

	var p7=new Plane({
		x:6,y:4,z:-9.39,
		width:4.25, height:5.75,
		asset: 'photo7',
		clickFunction: function(me){
 		 take_photo = capture.get();
 		 image(take_photo, 0, 0);
 	 }
		//side:'double',
	 })

	text6 = new Plane({
		x:6, y:0.5, z:-9.39,
		width: 5,
		height: 1
	})

	var blk7=new Box({
 		x:13,y:3.5,z:-9.5,
 		width: 4.5,
 		height:4.5,
 		depth: 0.2,
 		red: 0, green: 0, blue: 0,

 	 })

 	var p8=new Plane({
 		x:13,y:3.5,z:-9.39,
 		width:4.25, height:4.25,
 		asset: 'photo8',
		clickFunction: function(me){
 		 take_photo = capture.get();
 		 image(take_photo, 0, 0);
 	 }
 		//side:'double',
 	 })

 	text7 = new Plane({
 		x:13, y:0.5, z:-9.39,
 		width: 5,
 		height: 1
 	})

	frame_container2.addChild(frame3);
	frame_container2.addChild(blk5);
	frame_container2.addChild(p6);
	frame_container2.addChild(text5);

	frame_container2.addChild(blk6);
	frame_container2.addChild(p7);
	frame_container2.addChild(text6);

	frame_container2.addChild(blk7);
	frame_container2.addChild(p8);
	frame_container2.addChild(text7);

	// another exhibition wall
	 var frame4 = new Box({
		x:0,y:0,z:-25,
		width: 20,
		height: 15,
		depth: 1,
		red: 255, green: 255, blue: 255,

		clickFunction: function(me){
 		 take_photo = capture.get();
 		 image(take_photo, 0, 0);
 	 }
	 })

	 frame4.tag.object3D.userData.solid = true;

	 var blk8=new Box({
		x:-4,y:4,z:-24.5,
		width: 6,
		height:4.5,
		depth: 0.2,
		red: 0, green: 0, blue: 0,

	 })

	 var p9=new Plane({
		x:-4,y:4,z:-24.39,
		width:5.75, height:4.25,
		asset: 'photo9',
		clickFunction: function(me){
 		 take_photo = capture.get();
 		 image(take_photo, 0, 0);
 	 }
	 })

	 text8 = new Plane({
		x:-4, y:1, z:-24.39,
		width: 5,
		height: 1

		 });

		// second picture on the wall
	 var blk9=new Box({
		 x:4,y:4,z:-24.5,
		 width: 6,
		 height:4.5,
		 depth: 0.2,
		 red: 0, green: 0, blue: 0,

		})

	 var p10=new Plane({
		 x:4,y:4,z:-24.39,
		 width:5.75, height:4.25,
		 asset: 'photo10',
		 clickFunction: function(me){
			 take_photo = capture.get();
			 image(take_photo, 0, 0);
		 }
		})

	 text9 = new Plane({
		 x:4, y:1, z:-24.39,
		 width: 5,
		 height: 1
	 })


	 frame_container2.addChild(frame4);
	 frame_container2.addChild(blk8);
	 frame_container2.addChild(p9);
	 frame_container2.addChild(text8);

	 frame_container2.addChild(blk9);
	 frame_container2.addChild(p10);
	 frame_container2.addChild(text9);



	// create a plane to serve as our "ground"
	var g = new Plane({
						x:0, y:0, z:0,
						width:100, height:100,
						asset: 'wood',

						repeatX: 100,
						repeatY: 100,
						rotationX:-90, metalness:0.25
					   });

	// set the ground so that it is considered 'solid'
	g.tag.object3D.userData.solid = true;
	// add the plane to our world
	world.add(g);


	//obj
	dance = new OBJ({
		asset: 'dance_obj',
		mtl: 'dance_mtl',
		x: 0,
		y: 2.3,
		z: 25,
		rotationX:0,
		rotationY:180,
		scaleX:1.5,
		scaleY:1.5,
		scaleZ:1.5,
	});
	world.add(dance);

	man1 = new OBJ({
		asset: 'man_obj',
		mtl: 'man_mtl',
		x: -3,
		y: 1.9,
		z: 1,
		rotationX:0,
		rotationY:0,
		scaleX:1.5,
		scaleY:1.5,
		scaleZ:1.5,
	});
	man1.tag.object3D.userData.solid = true;
	world.add(man1);

	man2 = new OBJ({
		asset: 'man_obj',
		mtl: 'man_mtl',
		x: 2,
		y: 1.9,
		z: 12,
		rotationX:0,
		rotationY:160,
		scaleX:1.5,
		scaleY:1.5,
		scaleZ:1.5,
	});
	man2.tag.object3D.userData.solid = true;
	world.add(man2);

	bench2 = new Box({
		x:-15,y:0.5,z:-20,
	 width: 5,
	 height:1,
	 depth: 1.5,
	 red: 180, green: 180, blue: 180,

	 clickFunction: function(me){
		 take_photo = capture.get();
		 image(take_photo, 0, 0);
	 }
	})
	bench2.tag.object3D.userData.solid = true;
	world.add(bench2);


	bench1 = new Box({
		x:17,y:0.5,z:-20,
 	 width: 5,
 	 height:1,
 	 depth: 1.5,
 	 red: 180, green: 180, blue: 180,

	 clickFunction: function(me){
		 take_photo = capture.get();
		 image(take_photo, 0, 0);
	 }
	})
	bench1.tag.object3D.userData.solid = true;
	world.add(bench1);

	woman1 = new OBJ({
		asset: 'woman_obj',
		mtl: 'woman_mtl',
		x: 17,
		y: 1.5,
		z: -20,
		rotationX:0,
		rotationY:0,
		scaleX:3,
		scaleY:3,
		scaleZ:3,

	});
	woman1.tag.object3D.userData.solid = true;
	world.add(woman1);

	woman2 = new OBJ({
		asset: 'woman_obj',
		mtl: 'woman_mtl',
		x: 19,
		y: 1,
		z: 20,
		rotationX:0,
		rotationY:200,
		scaleX:3.5,
		scaleY:3.5,
		scaleZ:3.5,
	});
	woman2.tag.object3D.userData.solid = true;
	world.add(woman2);

	sculpture = new OBJ({
		asset: 'sculpt_obj',
		mtl: 'sculpt_mtl',
		x: -7,
		y: 3,
		z: 30,
		rotationX:0,
		rotationY:0,
		scaleX:3,
		scaleY:3,
		scaleZ:3,

	})
	sculpture.tag.object3D.userData.solid = true;
	world.add(sculpture);

	cam_box1 = new Box ({
		asset: 'p5canvas',
		x: -15,
		y: 2,
		z: 6,
		width: 3,
		height:3,
		depth: 3,

		rotationX:0,
		rotationY:0,

	})

	cam_box1.tag.object3D.userData.solid = true;
	world.add(cam_box1);

	cam_box2 = new Box ({
		asset: 'p5canvas',
		x: -15,
		y: 5,
		z: 6,
		width: 3,
		height:3,
		depth: 3,

		rotationX:0,
		rotationY:0,

	})

	cam_box2.tag.object3D.userData.solid = true;
	world.add(cam_box2);


	// create 4 walls around the edge of the world
	var wall1 = new Box({
		x:-49,
		y:2,
		z:0,
		width: 1,
		height: 20,
		depth: 100,
		red: 128, green: 128, blue: 128
	});
	var wall2 = new Box({
		x:49,
		y:2,
		z:0,
		width: 1,
		height: 20,
		depth: 100,
		red: 128, green: 128, blue: 128
	});
	var wall3 = new Box({
		x:0,
		y:2,
		z:-49,
		width: 100,
		height: 20,
		depth: 1,
		red: 128, green: 128, blue: 128
	});
	var wall4 = new Box({
		x:0,
		y:2,
		z:49,
		width: 100,
		height: 20,
		depth: 1,
		red: 128, green: 128, blue: 128
	});

	// important -- set a property the walls to tell the system that this is
	// an entity that we can collide with!
	wall1.tag.object3D.userData.solid = true;
	wall2.tag.object3D.userData.solid = true;
	wall3.tag.object3D.userData.solid = true;
	wall4.tag.object3D.userData.solid = true;

	// add the walls to the system
	world.add( wall1 );
	world.add( wall2 );
	world.add( wall3 );
	world.add( wall4 );



	// create our gravity sensor
	sensor = new Sensor();


	// create a 2D canvas
	pixelDensity(1);
	canvas1 = createCanvas(256,256).id('p5canvas');
	background(128);
	// if (objectAhead && objectAhead.distance < 0.25 ){
	// 	takeSnap()
	// }
	capture = createCapture(VIDEO);
 capture.hide();


}



function draw() {

	// p1.spinY(0.5);
	cam_box1.spinY(0.5);
	cam_box2.spinY(0.8);

	dance.spinY(1);

	sculpture.spinY(0.5);

	container.spinX(0.5);

	container0.spinY(1);

	intro_text.tag.setAttribute('text',
	    'value: How do people react when they are visiting exhibitions? The interaction between human and art is always an intriguing theme. For a long time, I took photographs on visitors in exhibitions around the world, as well as their reactions and interaction. Welcome to the exhibition of artistic interaction. Feel free to explore.:) ;color: rgb(0,0,0); align: center;');

	text1.tag.setAttribute('text',
	    'value: Rockbund Art Museum, Shanghai; color: rgb(0,0,0); align: center;');
	text2.tag.setAttribute('text',
			'value: Jack Hanley Gallery, New York; color: rgb(0,0,0); align: center;');
  text3.tag.setAttribute('text',
			'value: The Prado Museum, Madrid ; color: rgb(0,0,0); align: center;');
	text4.tag.setAttribute('text',
			'value: The Metropolitan Museum, New York; color: rgb(0,0,0); align: center;');
  text5.tag.setAttribute('text',
			'value: Setouchi Triennale,Seto Inland Sea; color: rgb(0,0,0); align: center;');
	text6.tag.setAttribute('text',
			'value: Frieze Art Fair, New York; color: rgb(0,0,0); align: center;');
	text7.tag.setAttribute('text',
			'value: Armory Show, New York; color: rgb(0,0,0); align: center;');
	text8.tag.setAttribute('text',
			'value: Royal Academy of Arts, London; color: rgb(0,0,0); align: center;');
	text9.tag.setAttribute('text',
			'value: Orsay Museum, Paris; color: rgb(0,0,0); align: center;');

	text_user.tag.setAttribute('text',
			'value: Virtual Reality Gallery, internet; color: rgb(0,0,0); align: center;');


	// always create a new particle
	var temp = new Particle(0, 0, 25);

	// add to array
	particles.push( temp );

	// draw all particles
	for (var i = 0; i < particles.length; i++) {
		var result = particles[i].move();
		if (result == "gone") {
			particles.splice(i, 1);
			i-=1;
		}
	}


	// see what's in front of the user
	var objectAhead = sensor.getEntityInFrontOfUser();

	// if the mouse is pressed or the W key is pressed
	if (mouseIsPressed || keyIsDown(87)) {
		// assume we can move forward
		var okToMove = true;

		console.log(objectAhead);

		// if there is an object, it is close and it is solid, prevent motion
		if (objectAhead && objectAhead.distance < 0.25 && objectAhead.object.el.object3D.userData.solid) {
			okToMove = false;
			world.moveUserForward(0);
		}

		if (okToMove) {
			world.moveUserForward(0.1);
		}

	}


	//canvas

	image(capture,0, 0,width,height);
	filter(ERODE);
	screen1.updateTexture();
	cam_box1.updateTexture();
	cam_box2.updateTexture();

}



class Particle {

	constructor(x,y,z) {

		// construct a new Box that lives at this position
		this.myBox = new Octahedron({
								x:x, y:y, z:z,
								red: random(255), green:0, blue:0,
								radius: 0.5
		});

		// add the box to the world
		world.add(this.myBox);

		// keep track of an offset in Perlin noise space
		this.xOffset = random(1000);
		this.zOffset = random(2000, 3000);
	}

	// function to move our box
	move() {
		// compute how the particle should move
		// the particle should always move up by a small amount
		var yMovement = 0.01;

		// the particle should randomly move in the x & z directions
		var xMovement = map( noise(this.xOffset), 0, 1, -0.05, 0.05);
		var zMovement = map( noise(this.zOffset), 0, 1, -0.05, 0.05);

		// update our poistions in perlin noise space
		this.xOffset += 0.01;
		this.yOffset += 0.01;

		// set the position of our box (using the 'nudge' method)
		this.myBox.nudge(xMovement, yMovement, zMovement);

		// make the boxes shrink a little bit
		var boxScale = this.myBox.getScale();
		this.myBox.setScale( boxScale.x-0.005, boxScale.y-0.005, boxScale.z-0.005);

		// if we get too small we need to indicate that this box is now no longer viable
		if (boxScale.x <= 0) {
			// remove the box from the world
			world.remove(this.myBox);
			return "gone";
		}
		else {
			return "ok";
		}
	}
}

class Sensor {

	constructor() {
		// raycaster - think of this like a "beam" that will fire out of the
		// bottom of the user's position to figure out what is below their avatar
		this.rayCaster = new THREE.Raycaster();
		this.userPosition = new THREE.Vector3(0,0,0);
		//this.downVector = new THREE.Vector3(0,-1,0);
		//this.intersects = [];

		this.rayCasterFront = new THREE.Raycaster();
		this.cursorPosition = new THREE.Vector2(0,0);
		this.intersectsFront = [];
	}

	getEntityInFrontOfUser() {
		// update the user's current position
		var cp = world.getUserPosition();
		this.userPosition.x = cp.x;
		this.userPosition.y = cp.y;
		this.userPosition.z = cp.z;

		if (world.camera.holder.object3D.children.length >= 2) {
			this.rayCasterFront.setFromCamera( this.cursorPosition, world.camera.holder.object3D.children[1]);
			this.intersectsFront = this.rayCasterFront.intersectObjects( world.threeSceneReference.children, true );

			// determine which "solid" items are in front of the user
			for (var i = 0; i < this.intersectsFront.length; i++) {
				if (!this.intersectsFront[i].object.el.object3D.userData.solid) {
					this.intersectsFront.splice(i,1);
					i--;
				}
			}

			if (this.intersectsFront.length > 0) {
				return this.intersectsFront[0];
			}
			return false;
		}
	}

}
