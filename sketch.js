let numX=4;
let numY=7;
//let nb, nb2, nb3, nb4;
// epty arraylist
let nbs = [];
function setup() {
  createCanvas(400, 400);

  
  //nb = new ourBall(width/2,height/2,50);
  //nb2 = new ourBall(width/3,height/6,25,-3);
  //nb3 = new ourBall(width/4,height/2,10,-3,5);
  //nb4 = new ourBall(width/6,height/3,20);
  // for loop
  
  for (let i=0;i<numX;i=i+1){
      for (let j=0;j<numY;j=j+1){
        nbs.push(new ourBall(
          i*width/numX+width/numX/2,
          j*height/numY+height/numY/2,
          50));
        //circle(i*width/numX+width/numX/2,
        //       j*height/numY+height/numY/2,
        //       20);
               
    }
  } 
  
}
function draw() {
  background(220);
  // 稱 list 裡面的每一個東西為 v 然後執行 v 所擁有的能力   
  nbs.forEach((v)=>{
    v.display();
  })
  
  //nb.run();
  /*
  nb.display();
  nb2.display();
  nb3.display();
  nb4.display();
  */
}
// 物件導向模式
class ourBall {
  // 建構類別需要的參數 (optional)
  constructor(_x,_y,_s, _dx=1, _dy=-2.5){
    this.x = _x;
    this.y = _y;
    this.size = _s;
    // 速度
    this.dx = _dx;
    this.dy = _dy;
    this.color=color(255, 204, 0);
  }
  // 能力 method()
  display(){
    this.checkmouse();
    this.run();
    this.bounce();
    fill(this.color);
    circle(this.x,this.y,this.size);
  }
  run(){
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }
  bounce(){
    // Upper side
    if(this.y-this.size/2<0){
      this.dy = -1*this.dy; 
      this.color=color(255, 0,0);
    }
    // Right
    if(this.x+this.size/2>width){
      this.dx = -1*this.dx;
      this.color=color(255, 0,255);
    } 
    // Lower
    if(this.y+this.size/2>height){
      this.dy = -1*this.dy;
      this.color=color(255, 255,0);
    }
    // left
    if(this.x-this.size/2<0){
      this.dx = -1*this.dx
      this.color=color(255, 255,255);
    } 
  }
  checkmouse(){
    //line(this.x,this.y,mouseX,mouseY);
    if (mouseX < this.x + this.size/2 &&
        mouseX > this.x - this.size/2 &&
        mouseY < this.y + this.size/2 &&
        mouseY > this.y - this.size/2
       ){
        circle(this.x,this.y,this.size*1.5);
        }
  }
}