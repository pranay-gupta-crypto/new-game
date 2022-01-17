const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
//const Constraint = Matter.Constraint;
var engine,world;

var backgroundImg; 
var shuttleImg; 
var missileImg;
//var asteroidImg;
var asterd=[]
score = 0;

function preload(){
    backgroundImg = loadImage("background.jpg")
    shuttleImg = loadImage("space shuttle.png")
    missileImg = loadImage("missile.png")
    //asteroidImg = loadImage("asteroid.png")
}

function setup(){
    createCanvas(1000,1000);
    
    missile = createSprite(500,900,40,40)
    missile.addImage("missile",missileImg);
    missile.scale = 0.4; 

   
   shuttle = createSprite(500,900,40,40)
    shuttle.addImage("shuttle",shuttleImg);
    shuttle.scale = 0.8; 

   /*asteroid = createSprite(500,200,20,20)
    asteroid.addImage("asteroid",asteroidImg);
   asteroid.scale = 1.0; */
   engine = Engine.create();
   world = engine.world;
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  text("score"+score,200,100,100)

 if(keyIsDown(LEFT_ARROW)){
    shuttle.x = shuttle.x-10
    missile.x = missile.x-10
    
 }

 if(keyIsDown(RIGHT_ARROW)){
  shuttle.x = shuttle.x+10
  missile.x = missile.x+10
  
 }
 if(keyIsDown(UP_ARROW)){
  missile.y = missile.y-10

 }


 
 
 
 
 //if ( keyIsDown("SPACE")){
 // missile.y = missile.y+50;

 //}
  if( frameCount%80===0){
      asterd.push(new Aster(random(250,700),100,50)) 
    }
    for (var j = 0; j< asterd.length;j++){
      missile.visible=true;
      asterd[j].y+=2;
    asterd[j].display();
if(asterd[j].y>missile.y){
  asterd.splice(j,1);
  missile.visible=false;
  score=score+1;
}

      }


 /* asteroid = createSprite(500,200,20,20)
   asteroid.addImage("asteroid",asteroidImg);
   asteroid.scale = 1.0;*/

   /*asteroid.y+=5;
  // missile.y = shuttle.y-50;
   if(asteroid.isTouching(missile)){
   asteroid.destroy();
   missile.destroy();
   score=1 */
   
   
   
   
   
drawSprites();
}
