var plano,block1,block2,block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

    var plano_options={

     isStatic : true
	}
	var block1_options={

     restitution:1,
     friction:1,
     frictionAir:0.0009
		
	   } 
	   var block2_options={
		restitution:0.7,
		friction:0.000000001,
		frictionAir:0.0008
		
	   } 
	   var block3_options={
		restitution:1,
		friction:0.5,
		frictionAir:1
		
	   }

	//Crie os Corpos Aqui.
    plano= Bodies.rectangle(300,600,600,2,plano_options);
	World.add(world,plano);
	block1= Bodies.circle(220,10,80,block1_options);
	World.add(world,block1);
	block2= Bodies.rectangle(110,50,70,40,block2_options);
	World.add(world,block2);
	block3= Bodies.rectangle(350,50,50,50,block3_options);
	World.add(world,block3);



	Engine.run(engine);
	rectMode(CENTER);
}


function draw() {
	background("orange");
	Engine.update(engine);

	fill("red");
	ellipse(block1.position.x,block1.position.y,80);
	fill("blue");
	rect(plano.position.x,plano.position.y,600,2);
	fill("blue");
	rect(block2.position.x,block2.position.y,70,40);
	fill("blue");
	rect(block3.position.x,block3.position.y,50,50);
  
  
  drawSprites();
 
}



