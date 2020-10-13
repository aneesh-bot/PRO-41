const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var drops;
var maxDrops = 100 ;

function preload(){
    
}

function setup(){
createCanvas(1200,600);   
engine = Engine.create();
world = engine.world;
drops = new Drops(width/2,height/2);    
}

function draw(){
    background("gray");
    Engine.update(engine);
    //drops.display();
    //for(var i=0; i<maxDrops; i=i+0){
    //  drops=new Drops(random(0,400),random(0,400));
      drops.display();
  //[-[]]  }
    
}   

