const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350, 150, 350, 20);

	bob1 = new Bob(180, 400, 70);
	bob2 = new Bob(250, 400, 70);
	bob3 = new Bob(320, 400, 70);
	bob4 = new Bob(390, 400, 70);
	bob5 = new Bob(460, 400, 70);

	rope1 = new Rope(bob1.body, roof.body, -bob1.r*2.4, 10);
	rope2 = new Rope(bob2.body, roof.body, -bob2.r*1.4, 10);
	rope3 = new Rope(bob3.body, roof.body, -bob3.r*0.4, 10);
	rope4 = new Rope(bob4.body, roof.body, -bob4.r*-0.6, 10);
	rope5 = new Rope(bob5.body, roof.body, -bob5.r*-1.5, 10);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightgrey");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}