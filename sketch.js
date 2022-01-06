const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

function preload() {
}

function setup(){
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(0,390,1200,100);
    player = new Player(0,0);
    plataforma = new Plataforma(200, 300, 200, 100);
    plataforma2 = new Plataforma(400, 200, 200, 100);
    inimigo = new Enemy(400,100);
}

function draw(){
    background(255);
    Engine.update(engine);

    ground.display();
    player.display();
    plataforma.display();
    plataforma2.display();
    inimigo.display();
}

function mouseDragged(){
}

function mouseReleased(){
}

function keyPressed(){
    if(keyCode == 39){
        Matter.Body.setVelocity(player.body, {x:4, y:0});
    }
    if(keyCode == 37){
        Matter.Body.setVelocity(player.body, {x:-4, y:0});
    }
    if(keyCode == 38){
        Matter.Body.setVelocity(player.body, {x:0, y:-5});
    }
}

function keyReleased(){
    Matter.Body.setVelocity(player.body, {x:0, y:0});
}