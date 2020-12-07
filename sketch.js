
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree=new Tree(600,400,150,500);
	ground=new Groundon(400,675,800,25);
	stone=new Stone(200,200,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();
  ground.display();

  drawSprites();
 
}



