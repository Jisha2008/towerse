
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground1,ground2,ground3;

var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25;


function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(width/2,485,width,20);
ground2 = new Ground(450,370,250,10);
ground3 = new Ground(800,250,200,10);


box1=new Box(300+60,275,30,40);
box2=new Box(330+60,275,30,40);
box3=new Box(360+60,275,30,40);
box4=new Box(390+60,275,30,40);
box5=new Box(420+60,275,30,40);
box6=new Box(450+60,275,30,40);
box7=new Box(480+60,275,30,40);

box8=new Box(330+60,235,30,40);
  box9=new Box(360+60,235,30,40);
  box10=new Box(390+60,235,30,40);
  box11=new Box(420+60,235,30,40);
  box12=new Box(450+60,235,30,40);

  box13=new Box(360+60,195,30,40);
  box14=new Box(390+60,195,30,40);
  box15=new Box(420+60,195,30,40);
  

  box16=new Box(390+60,155,30,40);



  box17=new Box(800-60,205,30,40);
  box18=new Box(800-30,205,30,40);
  box19=new Box(800,205,30,40);
  box20=new Box(800+30,205,30,40);
  box21=new Box(800+60,205,30,40);

  box22=new Box(800-30,205-40,30,40);
  box23=new Box(800,205-40,30,40);
  box24=new Box(800+30,205-40,30,40);


  box25=new Box(800,205-80,30,40);

  pentagon=new polygon(200,200,20);

  sling=new SlingShot(pentagon.body,{x:180,y:190})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  ground2.display();
  ground3.display();

  fill("lightblue");
   box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    
   fill("lightpink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

   fill("lightgreen");
    box13.display();
    box14.display();
    box15.display();

   fill("grey");
    box16.display();

   fill("lightblue");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

   fill("lightgreen");
    box22.display();
    box23.display();
    box24.display();

   fill("lightpink");
    box25.display();
  pentagon.display();
  sling.display();



  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(pentagon.body,{x:mouseX , y:mouseY});
}  

function mouseReleased(){
sling.fly();
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(pentagon.body,{x:100,y:200});
    sling.attacher(pentagon.body);
  }
}




