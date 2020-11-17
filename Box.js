class Box{
    constructor(x,y){
    
        var options = {
    
        restitution: 0.8,
        friction: 1,
        density : 1.0
          }
    
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = 30;
        this.height= 40;
        World.add(world,this.body)
    
    }
    
    display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        fill("lightblue")
        rect(0,0,30,40);
        pop ();
    
    }
    
    
    
    
    
    
    }