function setup() {
  createCanvas(600,600);
  background(250);

}


function draw() {
  
    strokeWeight(0);
  //head
  fill(217, 167, 144);
  ellipse(300, 300, 300, 350);
  
  //head two
    fill(217, 167, 144);
  ellipse(300, 350, 300, 350);
  
  //left eye
  fill(250);
  ellipse(230, 320, 80, 40);
  
//right eye
  fill(250);
  ellipse(380, 320, 80, 40);
  
  //pupil left
   fill(0);
  ellipse(230, 320, 50, 40);
  
  //pupil right
    fill(0);
  ellipse(380, 320, 50, 40);
  
  //triangle one left eye
  fill(250);
  triangle(180, 320, 200, 333, 200, 307);
  
  //triangle two left eye
   fill(250);
   triangle(280, 320, 260, 333, 260, 307);
   
   //triangle one right eye
   fill(250);
   triangle(330, 320, 350, 333, 350, 307);
   
   //triangle two right eye
   fill(250);
   triangle(430, 320, 410, 333, 410, 307);
   
    strokeWeight(5);
   //line one left eye bottom
   fill(0);
   line(180, 320, 187, 325);
   
    //line two left eye bottom
   fill(0);
   line(199, 333, 187, 325);
   
   //line three left eye bottom
      fill(0);
   line(199, 333, 210, 338);
   
   //line four left eye bottom
   fill(0);
   line(210, 338, 222, 340);
   
   //line five left eye bottom
   fill(0);
   line(222, 340, 235, 340);
   
   //line six left eye bottom
    fill(0);
   line(235, 340, 247, 338);
   
   //line seven left eye bottom
   fill(0);
   line(247, 338, 257, 335);
   
   //line eight left eye bottom
   fill(0);
   line(257, 335, 270, 329);
   
   //line nine left eye bottom
   fill(0);
   line(270, 329, 280, 323);
   
   //new line//
   
   //line one left eye Top
   fill(0);
   line(180, 320, 193, 311);
   
   //line two left eye Top
   fill(0);
   line(193, 311, 202, 306);
   
   //line three left eye Top
   fill(0);
   line(202, 306, 215, 301);
   
   //line four left eye Top
   fill(0);
   line(215, 301, 225, 299);
   
   //line five left eye Top
   fill(0);
   line(225, 299, 238, 299);
   
   //line six left eye Top
   fill(0);
   line(238, 299, 247, 301);
   
   //line seven left eye Top
   fill(0);
   line(247, 301, 259, 306);

}
