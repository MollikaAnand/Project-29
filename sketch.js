
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  polygon = new Polygon(70,200,50);

  slingshot = new Slingshot(polygon.body,{x:100,y:200});

  ground1 = new Ground(650,270,200,20);
  ground2 = new Ground(390,350,140,20);

//tower1
  block1 = new Box(575,240);
  block2 = new Box(605,240);
  block3 = new Box(635,240);
  block4 = new Box(665,240);
  block5 = new Box(695,240);
  block6 = new Box(725,240);

  block7 = new Box(590,200);
  block8 = new Box(620,200);
  block9 = new Box(650,200);
  block10 = new Box(680,200);
  block11 = new Box(710,200);

  block12 = new Box(605,160);
  block13 = new Box(635,160);
  block14 = new Box(665,160);
  block15 = new Box(695,160);
  
  block16 = new Box(620,120);
  block17 = new Box(650,120);
  block18 = new Box(680,120);


  block19 = new Box(635,80);
  block20 = new Box(665,80);

  block21 = new Box(650,40);

  //tower2
  block22 = new Box(345,320);
  block23 = new Box(375,320);
  block24 = new Box(405,320);
  block25 = new Box(435,320);

  block26 = new Box(360,280);
  block27 = new Box(390,280);
  block28 = new Box(420,280);

  block29 = new Box(375,240);
  block30 = new Box(405,240);

  block31 = new Box(390,200);

}

function draw() {
  background(190,150,225);  


  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  block12.display();
  block13.display();
  block14.display();
  block15.display();
  
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();

  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();

  block26.display();
  block27.display();
  block28.display();

  block29.display();
  block30.display();

  block31.display();

  polygon.display();

  slingshot.display();

  drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY});

}

function mouseReleased() {

slingshot.fly();

}

