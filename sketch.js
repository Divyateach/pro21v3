
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var g1,g2,g3;

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=Bodies.circle(100,100,20,{isStatic:false,restitution:0.3,friction:0,density:1.2})
World.add(world,ball);

g1=new Ground(600,580,1200,20)
g2=new Ground(800,510,20,120)
g3=new Ground(1000,510,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill ("green")

ellipse(ball.position.x,ball.position.y,40,40)
 g1.display();
 g2.display();
 g3.display();
 if(keyDown("down")){
	 Matter.Body.applyForce(ball,ball.position,{x:35,y:-45})
 }
}



