
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var BoyHand
function preload()
{
	boyIMG = loadImage("boy.png")
}

function setup() {
	createCanvas(5000, 700);
    

	engine = Engine.create();
	world = engine.world;
  
 GroundSprite = createSprite(400,400,12222,20);
 GroundSprite.shapeColor = "Green";

 Boy = createSprite(150,345,30,30);
 Boy.addImage(boyIMG)
 Boy.scale = 0.08;

 stone1 = new stone(80,275,50,123);
 stone1.body.scale = 0.4

 Tree = new tree(500,390,20,20);

 Mango1 = new mango(400,100,50);
 Mango2 = new mango(340,100,50);
 Mango3 = new mango(300,80,50);
 Mango4 = new mango(340,40,50);
 Mango5 = new mango(380,30,50);

 
	//Create the Bodies Here.
 Ground = Bodies.rectangle(400,400,12222,20);
 World.add(world, Ground)

 BoyHand = Bodies.rectangle(130,345,50,50);
 World.add(world,BoyHand)

 var options={
	 bodyA: BoyHand,
	 bodyB: Ground,
	 length: 100,
	 stiffness: 0.00004
 }

 Line = constraint.create(options)
 World.add(world, Line)

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background("White");
 
  drawSprites();
  
  Matter.Body.setStatic(stone1.body, false)

  stone1.display();
  Tree.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  line(BoyHand.position.x,BoyHand.position.y,Ground.position.x,Ground.position.y)
  
}



