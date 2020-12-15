class dustbins
{
  constructor(x,y,width,height)
  {
      var op = 
      {
          isStatic:true
      }
     this.image=loadImage("paper1-main/dustbingreen.png")
      this.width=width;
      this.height=height;
      this.x=x;
      this.y=y;
      World.add(world,this.body);
  }

  display()
  {
      var pos = this.body.position;
      rect(this.x,this.y,this.width,this.height);
      image(this.image,pos.x,pos.y,this.width,this.height)
  }

}