var bg
var player
var playerImg
var enemy1
var enemy1Img
var enemy2
var enemy2Img
var bullet
var bulletImg
var enemycounter=0
var gamestate="play"
function preload(){
bg=loadImage("GROUND.png")
playerImg=loadImage("Player.png")
enemy1Img=loadImage("ENEMY1.png")
enemy2Img=loadImage("ENEMY2.png")
bulletImg=loadImage("BULLET.png")

}

function setup(){
 createCanvas(displayWidth-20,displayHeight-140)
 player=createSprite(70,displayHeight/2)
 player.addImage(playerImg)
 player.scale=0.5
bullet=createSprite(70,displayHeight/2)
bullet.addImage(bulletImg)
bullet.scale=0.1
 
}


function draw(){
  background(bg)
  player.x=mouseX
player.y=mouseY
bullet.x=player.x+70
bullet.y=player.y+25
  enemy();  
drawSprites();
if (enemycounter===10){
  
}

}
function keyPressed(){
  if (keyCode===32){
    bullet.velocityX=5
  }
}
function enemy(){
  if (World.frameCount%80===0){
    enemy1=createSprite(displayWidth-100,random(20,displayHeight-150))
    var rand=Math.round(random(1,2))
    if (rand===1){
      enemy1.addImage(enemy1Img)
      enemy1.scale=0.5
      enemy1.rotation=-90
    }
    else{
      enemy1.addImage(enemy2Img)
      enemy1.scale=0.3
      enemy1.rotation=90 
    }
enemycounter++
enemy1.velocityX=-2
console.log(enemycounter)    
    
     
  }
}
