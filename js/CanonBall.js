class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }

    this.body = bodies.circle(x,y,50,options);
    this.radius = 50;
    this.image = loadImage("canonBall.png");

    World.add(world,this.body);
  };

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("black");
    image(0,0,this.radius);
    pop();
  };
};
