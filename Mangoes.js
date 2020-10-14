class mango{
    constructor(x,y,radius){
      var options={
          isStatic:true,
          restitution:0,
          friction:1
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius
      this.image = loadImage("mango.png")
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        image(this.image,this.body.position.x, this.body.position.y, 80, 80);
        pop();
    }
}