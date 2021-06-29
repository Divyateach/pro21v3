class Ground{
    constructor(x,y,w,h){
var option={
    isStatic:true
}
this.w=w;
this.h=h;
this.body=Bodies.rectangle(x,y,w,h,option);
World.add(world,this.body)
    }
    display(){
        rectMode(CENTER);
        fill ("brown")
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}