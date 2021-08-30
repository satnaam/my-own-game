
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2


function setup() {
  createCanvas(400,400);
  

  engine = Engine.create();
  world = engine.world;
  fill ("yellow")
 box1=new Box(200,20,50,50);
box2=new Box(50,50,50,50);
box3=new Box(300,50,50,50)
ground=new Ground(200,390,400,30)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  box1.show()
  box2.show()
  box3.show()
  ground.show()

  
}

