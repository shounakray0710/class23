class Cannon{
    constructor(x,y,w,h,angle){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.angle=angle
    }
    display(){
        push();
        translate(this.x,this.y)
        rotate(this.angle);
        fill("#676e6a")
        rect(-10,-20,this.w,this.h);
        pop();

        push();
        fill("#676e6a")
        arc(this.x-30,this.y+95,140,200,PI,TWO_PI);
        pop();
    }
}

