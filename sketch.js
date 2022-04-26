const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bola;
var bola2;
var chao;
var chao2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var bolaConfig = {
    restitution: 0.5,
	friction:0.02,
	frictionAir:0,
  }
  
  bola = Bodies.circle(100,10,20, bolaConfig);
  World.add(world, bola);

  var bola2Config = {
    restitution:0.7,
	friction:0.01,
	frictionAir:0.1,
  }
bola2=Bodies.rectangle(150,50,30,30,bola2Config);
World.add(world,bola2);

var bola3Config = {
    restitution:0.01,
	friction:1,
	frictionAir:0.3,
  }
bola3=Bodies.rectangle(300,10,20,30,bola3Config);
World.add(world,bola3);




  var chaoConfig = {
    isStatic: true
  }
  
  chao = Bodies.rectangle(200,390,400,20, chaoConfig);
  World.add(world, chao);



  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background("grey");

 Engine.update(engine);

  ellipse(bola.position.x, bola.position.y, 20, 20);
  rect(chao.position.x, chao.position.y, 400, 20);
 rect(bola2.position.x,bola2.position.y,30,30);  
 rect(bola3.position.x,bola3.position.y,20,30);  
}

