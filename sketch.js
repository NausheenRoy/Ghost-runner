var towerImg,tower;
var doorImg,doorsGroup,door;
var climberImg,climbersGroup,climber;
var ghost,ghostStanding,ghostJumping;
var invisibelBlock,invisibelBlockGroup;
var gameState="play";

function preload(){
  towerImg = loadImage("tower.png");
  doorImg= loadImage("door.png");
  doorsGroup=new Group();
  climberImg= loadImage("climber.png");
  climbersGroup=new Group();
  ghostStanding= loadImage("ghost-standing.png");
  ghostJumping= loadImage("ghost-jumping.png")
  invisibleBlockGroup= new Group();
  
}

function setup(){
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY=1;
  
  ghost= createSprite(200,200,50,50);
  ghost.addImage("ghostStanding",ghostStanding);
  ghost.scale=0.3;
  
  
}

function draw(){
  background("grey")
   if(gameState=="play"){
  
  if(tower.y>400){
    tower.y=300;
   }
   spawnDoors();
    spawnClimber();
  
 
    
  if(keyDown("space")){
    ghost.velocityY=-5;
  }
  
  if(keyDown("left_arrow")){
    ghost.x-=3;
    
  }
   
  if(keyDown("right_arrow")){
    ghost.x+=3;  
  }
  
  ghost.velocityY+=0.8;
  
  
  if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();   
    gameState="end";
    
    
  }
     
  

  
          
  ghost.depth+=1;
  
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  
  
  

  drawSprites();
   }
  if(gameState==="end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over",230,250);
    
    
    
      
  }
}



function spawnDoors(){
 if(frameCount%240===0){
   door = createSprite(200,-50);
   door.addImage("door",doorImg);
   door.x=Math.round(random(120,400));
   door.velocityY=1;
   door.lifetime=800;
   doorsGroup.add(door);
   
   invisibleBlock= createSprite(200,15);
   invisibleBlock.width=climber.width;
   invisibleBlock.height=2;
   invisibleBlock.x=door.x;
   invisibleBlock.velocityY=1;
   invisibleBlockGroup.add(invisibleBlock);
   invisibleBlock.debug=true;      
   
   
 } 
}

function spawnClimber(){
  if(frameCount%240===0){
   climber = createSprite(200,10);
   climber.addImage("climber",climberImg);
   climber.x=door.x
   climber.velocityY=1;
   climber.lifetime=800;
   climbersGroup.add(climber);
   
   
 } 

  
  
}
  
  
