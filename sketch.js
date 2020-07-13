var Engine = Matter.Engine
var World = Matter.World
var Events = Matter.Events
var Bodies = Matter.Bodies
 
var divisions = [];
var particles = [];
var plinkos = [];
var turn = 0;


var divisionHeight=300;
var score =0;
var count = 0;
var scoreState1 = "1";
var scoreState2 = "1";
var scoreState3 = "1";
var scoreState4 = "1";
var scoreState5 = "1";
var scoreState6 = "1";
var scoreState7 = "1";
var scoreState8 = "1";
var scoreState9 = "1";
var scoreState10 = "1";
var gameState="start";



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);

  textSize(30);
  fill("white");
  text("Score: "+score,20,30);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 


  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  
 if(count>=5){
   gameState="end";
   textSize(60)
   fill("red")
   text("Game Over!!!",200,200)
 }
 
  
}


function mousePressed(){
  if(gameState==="start"){
    count++;
    particles.push(new particle(mouseX,10,10,10))
    //gameState="play";
    //console.log(particles);
    
    
    
  }
}