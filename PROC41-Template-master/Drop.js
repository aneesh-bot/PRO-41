class Drops{
    constructor(x,y){
      var opt={
        restitution: 0.5
      }
      this.body=Bodies.circle(x,y,10,opt);
      this.x = x;
      this.y = y;
     // this.width = 10/2;
     // this.height = 10/2;
      World.add(world,this.body);
    }

    update(){
      if(this.body.position.y >= 600){
        this.body.update({
            y : this.y
        })
      }
    }

    display(){
      var pos = this.body.position;
      ellipseMode(RADIUS);
      fill("lightblue");
      ellipse(this.x,this.y,10,10);
    }
}