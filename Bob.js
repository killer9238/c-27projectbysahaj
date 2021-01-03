class Bob{
    constructor(x,y){
        var option={
            isStatic:false,
            restituition:1,
            friction:0.5,
            density:5
            
        }
        this.body = Bodies.circle(x,y,25,option);
        
        World.add(world,this.body)
        
    }
    display(){
        push();
        ellipseMode(RADIUS)
        fill(254,0,255)
        ellipse(this.body.position.x,this.body.position.y,25,25) 
        pop();
    }
}