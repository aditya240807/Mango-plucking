class tree{

   constructor(x,y,width,height){

    var options ={
        isStatic:true
     }

     this.body = Bodies.rectangle(x,y,width,height,options)
     this.width = width
     this.height = height;

     this.image = loadImage("tree.png")
   }

   display(){
    var pos =this.body.position;
    var angle = this.body.angle
    push();
    imageMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    image(this.image,700, 200, 450, 450);
    pop();

   }

}

