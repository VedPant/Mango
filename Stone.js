class Stone{
    constructor(x,y,width,height){
        var options={
            isStatic: false,
            restitution: 0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,options);
        this.width=r;
        this.height=r;
        World.add(world,this.body)
        
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}