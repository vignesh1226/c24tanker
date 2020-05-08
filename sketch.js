// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var engine,world;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700,380,1400,40);

    tanker1 = new Tanker(150,335,140,50);
    tanker2 = new Tanker(150,290,100,40);
    tanker3 = new Tanker(230,290,60,20);

}

function draw() {
// Remember to update the Matter Engine and set the background.
background(255);
Engine.update(engine);

ground.display();

tanker1.display();
tanker2.display();
tanker3.display();

}


function keyReleased() {
    // Call the shoot method for the cannon.
}