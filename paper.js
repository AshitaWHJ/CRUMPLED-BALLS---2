class Paper{
    constructor(x,y,diameter){
var options= {
    restitution:0.5,
    friction:0.3,
    density:1.0

}

this.image = loadImage("paper.gif");
this.body = Bodies.circle(x, y, diameter,options,); 
this.diameter = diameter;  
World.add(world, this.body); 
    }
display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y); 
    fill("red"); 
    imageMode(CENTER); 
    image(this.image, 0,0,this.diameter, this.diameter)
    pop(); 
}
}