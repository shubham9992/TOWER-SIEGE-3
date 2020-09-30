const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world; 
var gameState="onsling";
var score=0;
var bg,img,backgroundImg=0;
var n;
function preload(){
//  polygon_img=loadImage("polygon.png");
getTime();
// backgroundImg=loadImage(img);

}
function setup() {
  createCanvas(900,500);
  engine = Engine.create();
  world = engine.world;



  Poly=new Pol(100,250,40);

//  console.log(polygon);
  ground1 = new Ground(310,376,220,10);
  ground2 = new Ground(600,276,160,10);
  basement=new Ground(400,height,1000,20);

  
  slingShot=new Slingshot(Poly.body,{x:100,y:250});

  // level ONE
  block1=new Box(220,350,30,40);
  block2=new Box(250,350,30,40);
  block3=new Box(280,350,30,40);
  block4=new Box(310,350,30,40);
  block5=new Box(340,350,30,40);
  block6=new Box(370,350,30,40);
  block7=new Box(400,350,30,40);

  // part 2
  block17=new Box(540,250,30,40);
  block18=new Box(570,250,30,40);
  block19=new Box(600,250,30,40);
  block20=new Box(630,250,30,40);
  block21=new Box(660,250,30,40);

  // level Two
  block8=new Box(250,310,30,40);
  block9=new Box(280,310,30,40);
  block10=new Box(310,310,30,40);
  block11=new Box(340,310,30,40);
  block12=new Box(370,310,30,40);

  // part 2
  block22=new Box(570,210,30,40);
  block23=new Box(600,210,30,40);
  block24=new Box(630,210,30,40);

   // level Three
   block13=new Box(280,270,30,40);
   block14=new Box(310,270,30,40);
   block15=new Box(340,270,30,40);

  // part 2
   block25=new Box(600,170,30,40);

   // level Four
   block16=new Box(310,232,30,40);
  
 // createSprite(400, 200, 50, 50);
 Engine.run(engine);
}

async function getTime(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var resJson=await response.json();
  console.log(resJson);
  var dt=resJson.datetime;
  var hour=dt.slice(11,13);
  console.log(hour);
  if(hour>=6 && hour<18){
      bg="light.jpg";
      n=1;
  }
  else{
    n=0;
    bg="dark.png";
  }
  //return bg;
  backgroundImg=loadImage(bg);
}

function draw() {
      Engine.update(engine);
   //background(rgb(55,43,43));
   background(backgroundImg);

   textSize(20);
   if(n===1){
     fill("black");
   }
   else{
     fill("white");
   }
   
  text("Drag the Hexagonal Stone and Release it , to launch it towards the blocks",100,70);
  text("Press space bar to reset",600,450);
   textSize(20);
    text("SCORE: " +score,750,40);
 
  ground1.display(); 
  ground2.display(); 
  basement.display();

  
 // level ONE
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  // part 2
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

// level Two
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

// part 2
  block22.display();
  block23.display();
  block24.display();

// level Three
  block13.display();
  block14.display();
  block15.display();

// part 2
   block25.display();

    // level Four
   block16.display();
   slingShot.display();
   Poly.display();

   block1.Score();
   block2.Score();
   block3.Score();
   block4.Score();
   block5.Score();
   block6.Score();
   block7.Score();
   block8.Score();
   block9.Score();
   block10.Score();
   block11.Score();
   block12.Score();
   block13.Score();
   block14.Score();
   block15.Score();
   block16.Score();
   block17.Score();
   block18.Score();
   block19.Score();
   block20.Score();
   block21.Score();
   block22.Score();
   block23.Score();
   block24.Score();
   block25.Score();
   
  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(Poly.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
  // if(gameState!="onfly")
  //    slingShot.attach(Poly.body);
  //   gameState="onsling";
}
function keyPressed(){
  if(keyCode===32){
   Matter.Body.setPosition(Poly.body,{x:100,y:250});
    slingShot.attach(Poly.body);
  }
}
