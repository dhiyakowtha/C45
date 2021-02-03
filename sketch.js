const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var viking;
var cave;

function preload(){
cave_image = loadImage("images/cave.png");
 viking_image = loadImage("images/vikinggirl2.png");
ground_image = loadImage("images/ground.png");
knife_image = loadImage("images/knife.png");
}

function spawnKnives(){
if (frameCount % 40 === 0){
    var knife = createsprite( 30, 0, 20,20);
    knife.x = Math.round(random(0, displayWidth));
    knife.addImage("knife1", knife_image);
    knife.velocityY = 3


}
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    cave = createSprite(displayWidth, displayHeight);
    cave.addImage("Cave1", cave_image)
    cave.scale = 7;
    ground = createSprite(displayWidth/2, displayHeight-30, 100, 20);
    ground.addImage("ground1", ground_image);
    viking = createSprite(displayWidth/2, displayHeight-148, 20, 80);
    viking.addImage("Viking1", viking_image);
    viking.scale = 0.2;

} 

function draw(){
    background ("white");
    edges = createEdgeSprites();


    if(keyDown(RIGHT_ARROW)) {
        viking.x = viking.x+5;
        ground.x  = ground.x +5;
      }
        
       if(keyDown(LEFT_ARROW)) {
         viking.x = viking.x -5;
         ground.x = ground.x -5;
       }
    
    ground.bounce (edges[0]);
    ground.bounce(edges[1]);
    viking.collide(edges[0]);
    viking.collide(edges[1]);



    drawSprites();
}