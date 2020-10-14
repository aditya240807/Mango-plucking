class stone{
    constructor(x,y,radius){
      var options={
          isStatic:false,
          restitution:0,
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width
      this.height = height
      this.image = loadImage("stone.png");
      
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        strokeWeight(4);
        stroke("green");
        fill(255);
        image(this.image,100, 100, 40, 40);
        pop();
    }
}