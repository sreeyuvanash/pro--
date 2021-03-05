var bird,bac,b1,b2,b3,b4,b5,b6,bac2Img,start;
var birdImg,bacImg,coin1,coin2,coin3;
var block1Group,block2Group,coinGroup;
var score=0;
var start1;
var sree1,sree2;
var mou,mouImg,win;

var START1=1;
var WIN =10;
var PLAY1=2;
var END1=0;
var gameState=START1;
var cloud;
var sec=30;
function preload(){
          
  mouImg=loadImage("mouse.sree0.png");

  birdImg=loadImage("bird.png");
  bacImg=loadImage("flappy back.png");
  bac2Img=loadImage("Screenshot 2020-12-04 181256.png");             

  b1=loadImage("sprite_0(1).png");
  b2=loadImage("sprite_0(2).png");
  b3=loadImage("sprite_0(5).png");
  b4=loadImage("sprite_0(3).png");
  b5=loadImage("sprite_0(4).png");
  b6=loadImage("sprite_0(6).png");
  coin1=loadImage("sprite_0.png");
  coin2=loadImage("sprite_10.png");
  coin3=loadImage("sprite_20.png");
  
  start1=loadImage("start.png");
  
  win = loadImage('win.png')
  cloud = loadImage('cloud ☁.png');

}

function setup() {
 
  createCanvas(700,440);
  background (cloud);
  
  bac=createSprite(350,200);
  bac.addImage("bacImg",bacImg);
  bac.scale=1.5
  bac.x = bac.width /2;
  bac.velocityX=-5; 
  
  bac1=createSprite(350,200,700,400);
  bac1.visible=false;
  bac1.addImage("bac2Img",bac2Img);
  bac1.scale=0.8;
  
  bird=createSprite(75,100,30,30);
  bird.addImage("birdImag",birdImg);
  bird.scale=0.2;
  
  start=createSprite(310,350,125,49)
  start.visible=false;
  
  sree1=createSprite(200,550,300,10)
  sree1.visible=false;
  
  
  
  sree2=createSprite(200,-140,300,10)
  sree2.visible=false;
  
  

  
  
    block1Group=createGroup();
  block2Group=createGroup();
  coinGroup=createGroup();

  
}



function draw() {
  
  background(cloud)
    
  if(gameState==START1){
    
    bac.visible=false;
    bird.visible=false;
    

    
   
    coinGroup.destroyEach();
    block1Group.setVelocityXEach(0);
    block2Group.destroyEach();
    bac1.visible=true;
    
    if(mousePressedOver(start)){
      
      gameState=PLAY1;
      
    }
    
  }else if(gameState==PLAY1){
    
    bac1.visible=false;
    bac.visible=true;
    bird.visible=true;
    
        camera.position.y = bird.y


    

    blockspam();
  blockspam2();
  coinspam();
    
  if (bac.x < 270) {
    bac.x = bac.width / 2;

 }
  if(keyWentDown("space")||(mouseIsPressed) ){

  bird.velocityY=-7;
  }
  
  bird.velocityY= bird.velocityY+1;  
  
 if(bird.isTouching(coinGroup)){
    
    score=score+1;
    coinGroup.destroyEach();
 }
   
  if(bird.isTouching(block1Group)||bird.isTouching(block2Group)||(bird.isTouching(sree1))||(bird.isTouching(sree2))){
    
    gameState=END1;
    
    }
    
    if (frameCount % 32 === 0){
      sec = sec-1;
    }
    if (score==5||sec===0){
gameState =WIN
    }
     
   
  
  }else if(gameState==END1){
    camera.position.y =200
    bird.visible=false;
    bird.velocityY=0;
    bac1.visible=true;
    block1Group.destroyEach();
    block2Group.destroyEach();
    coinGroup.destroyEach();
    bird.y=250;
    bac.visible=false;
    
   
    
    if(mousePressedOver(start)){
      
      gameState=PLAY1;
      bird.visible=true;
      score=0;
  sec=30;
    }
    
  }else if (gameState===WIN){
      background (win);
    bird.y=5000
bac.visible=false;    
    block1Group.destroyEach();
    block2Group.destroyEach();
    coinGroup.destroyEach()
  }
  
    
  
  
  
  
  drawSprites();

  
  fill("black")
   textSize(20); 
  text("score:"+score,600,bird.y-150);  
  text("space for flying",50,bird.y-50)
 fill("black")
   textSize(20); 
  text("sec:"+sec,500,bird.y-150);
   fill("gold")
  text("if your score=5 (or) second=0 you will win",100,bird.y-175)
}

function blockspam(){
    
  if (frameCount % 145 === 0) {
    
    var block =createSprite(750,30,30,30)
    block.velocityX=-5;
   // block.debug=true;
    
    block.scale=3;
    
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: block.addImage(b1);
              break;
      case 2: block.addImage(b2);
              break;
      case 3: block.addImage(b3);
              break;
   
      default: break;
    }
   block1Group.add(block)
}  
  }

function blockspam2(){
    
  if (frameCount % 200 === 0) {
    
    var block1 =createSprite(750,400,30,30)
    block1.velocityX=-5;
    //block1.debug=true;
    block1.scale=3;
    
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: block1.addImage(b4);
              break;
      case 2: block1.addImage(b5);
              break;
      case 3: block1.addImage(b6);
              break;
   
    }
    block1.lifeTime=100;
    block2Group.add(block1);
}  
  }
function coinspam(){
  
  if (frameCount % 200 === 0) {
  
    var coin=createSprite(750,random(75,350))  
    coin.velocityX=-5;
    
       var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: coin.addImage(coin1);
              break;
      case 2: coin.addImage(coin2);
              break;
      case 3: coin.addImage(coin3);
              break;
   
    }
    coin.scale=0.5;
    coin.lifeTime=100;
    coinGroup.add(coin);
    
    }
  
  
}


