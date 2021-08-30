class Box
{
 constructor(x, y, w,h) 
 {
   let options = {
    restitution:2
   };
   
   this.body = Bodies.rectangle(x, y, w, h, options);
   this.w = w;
   this.h = h;
   World.add(world, this.body);
 }
 show() {
   let pos = this.body.position;
   push();
   rectMode(CENTER);
   noStroke();
   fill("yellow");
   ellipse(pos.x,pos.y, this.w, this.h);
   pop();
 }
}