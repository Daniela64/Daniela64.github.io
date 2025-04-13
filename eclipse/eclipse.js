function setup() {
  createCanvas(600,600);
  background(250);

}


function draw() {
background(93, 120, 89);
  
//HAIR//
strokeWeight(0)
fill(25, 21, 22);
 
   //hair one LEFT
   circle(269, 230, 222);
   
   //hair two LEFT
   circle(250, 265, 260);
   
   //hair three LEFT
   circle(200, 350, 220);
   
   //hair four LEFT
   circle(180, 460, 220);
   
   //hair five LEFT
   circle(167, 580, 230);
   
   //hair one RIGHT
   circle(345, 230, 222);
   
   //hair two RIGHT
   circle(360, 265, 260);
   
   //hair three LEFT
   circle(400, 350, 220);
   
   //hair four LEFT
   circle(420, 460, 220);
   
   //hair five LEFT
   circle(440, 580, 230);


//NECK/BODY//
strokeWeight(0);

  //neck square
  fill(217, 167, 144);
  square(250, 500, 110);
  
//BODY//

strokeWeight(20);
stroke(46, 48, 102);

  //shoulder RIGHT
  line(255, 560, 130, 603);
  
  //shoulder LEFT
  line(355, 560, 470, 603);
  
  //trianlge filler
  strokeWeight(0);
  fill(46, 48, 102);
  triangle(300, 555, 130, 603, 470, 603);
  
strokeWeight(0);  
  //neck half circle
  fill(217, 167, 144);
  arc (305, 550, 110, 70, TWO_PI, PI) ;
  
  
//HEAD//
  
    strokeWeight(0);
  //head one
  fill(217, 167, 144);
  ellipse(305, 300, 300, 350);
  
  //head two
    fill(217, 167, 144);
  ellipse(305, 350, 300, 350);
  
//BANGS//
  strokeWeight(0);  
  fill(25, 21, 22);
  arc(305, 230, 280, 210, PI, TWO_PI);
  
  //bang lines one LEFT
  strokeWeight(5);
  stroke(217, 167, 144);
   line(250, 180, 245, 230);
   
  //bang line one RIGHT
  line(355, 180, 360, 230);
  
  //bang line two LEFT
  line(249, 182, 240, 230);
  
  //bang line two RIGHT
  line(356, 182, 365, 230);
  
  
//EYELID AND EYEBAG//

strokeWeight(0)
  
  //half circle eyelid RIGHT
  fill(199, 149, 124)
  push();                       
  translate(382, 310);             // Move to the center of the arc (not just x = 50)
  rotate(PI / 1.15); 
  arc(0, 0, 90, 90, 0, PI + QUARTER_PI, OPEN);
  pop();
  
  
  //half circle eyelid LEFT
  fill(199, 149, 124)
  push();                       
  translate(230, 310);             // Move to the center of the arc (not just x = 50)
  rotate(PI / 1.15); 
  arc(0, 0, 90, 90, 0, PI + QUARTER_PI, OPEN);
  pop();
  
  //half circle eyebag LEFT
  fill (187, 131, 113) ;
  arc (382, 323, 90, 60, TWO_PI, PI) ;
  
  //half circle eyebag RIGHT
  fill (187, 131, 113) ;
  arc (230, 323, 90, 60, TWO_PI, PI) ;
  
//eyebrows//
strokeWeight(20);
stroke(25, 21, 22);

  //eyebrow line one LEFT
  line(278, 265, 200, 249);
  
  //eyebrow line two RIGHT
  line(338, 265, 413, 249);
  
 strokeWeight(0) 
 fill(25, 21, 22);
 
  //eyebrow triangle LEFT
  triangle(194, 241, 200, 257, 166, 270);
  
  //eyebrow triangle RIGHT
  triangle(420, 241, 413, 257, 445, 270);
  
//NOSE//
strokeWeight(0);

  //nose triangle
  fill(199, 149, 124);
  triangle(305, 293, 330, 385, 280, 385);
  
  //nose circle
  fill(199, 149, 124);
  ellipse(305, 390, 55, 50);
  
//MOUTH//

  //bottom lip TRIANGLE
  strokeWeight(0);
  fill (194, 128, 131) ;
  triangle(305, 439, 275, 460, 350, 460);
  
  //bottom lip HALF CIRCLE
  strokeWeight(0);
  fill (194, 128, 131) ;
  arc (307, 454, 80, 40, TWO_PI, PI) ;
  
  //mouth line one
  stroke(0);  
  strokeWeight(8);       
  line(349, 457, 305, 440);
  
  //mouth line two
  strokeWeight(8);        
  line(305, 440, 265, 457);
  
//EYES//
strokeWeight(0);
  
  //left eye
  fill(250);
  ellipse(230, 320, 80, 40);
  
  //right eye
  fill(250);
  ellipse(380, 320, 80, 40);
  
  //brown eye left
  fill(41, 27, 19);
  ellipse(232, 320, 50, 40);
  
  //pupil left
   fill(0);
  ellipse(230, 320, 45, 40);
  
  //brown eye right
  fill(41, 27, 19);
  ellipse(382, 320, 50, 40);
  
  //pupil right
    fill(0);
  ellipse(380, 320, 45, 40);
  
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
   
//EYELINER LEFT EYE//
    
    strokeWeight(7);
   //line one left eye bottom
   stroke(0);
   line(180, 320, 187, 325);
   
    //line two left eye bottom
   line(199, 333, 187, 325);
   
   //line three left eye bottom
   line(199, 333, 210, 338);
   
   //line four left eye bottom
   line(210, 338, 222, 340);
   
   //line five left eye bottom
   line(222, 340, 235, 340);
   
   //line six left eye bottom
   line(235, 340, 247, 338);
   
   //line seven left eye bottom
   line(247, 338, 257, 335);
   
   //line eight left eye bottom
   line(257, 335, 270, 329);
   
   //line nine left eye bottom
   line(270, 329, 280, 323);
   
//NEW LINE LEFT EYE//
   
   //line one left eye Top
   line(180, 320, 193, 311);
   
   //line two left eye Top
   line(193, 311, 202, 306);
   
   //line three left eye Top
   line(202, 306, 215, 301);
   
   //line four left eye Top
   line(215, 301, 225, 299);
   
   //line five left eye Top
   line(225, 299, 238, 299);
   
   //line six left eye Top
   line(238, 299, 247, 301);
   
   //line seven left eye Top
   line(247, 301, 259, 306);
   
   //line eight left eye Top
   line(259, 306, 270, 313);
   
   //line nine left eye Top
   line(270, 313, 280, 321);
   
//EYELASHES LEFT EYE//
   
   //eyelash one top
   line(231, 300, 231, 283);
   
   //eyelash two top
   line(200, 307, 189, 294);
   
   //eyelash three top
   line(260, 307, 270, 294);
   
   //eyelash one BOTTOM
   line(231, 356, 231, 284)
   
   //eyelash two BOTTOM
   line(199, 338, 189, 348);
   
   //eyelash three BOTTOM
   line(260, 338, 270, 348);
   
//EYELINER RIGHT EYE//
    
   //line one right eye BOTTOM
   line(333, 320, 347, 331);
   
   //line two right eye BOTTOM
   line(347, 331, 355, 336);
   
   //line three right eye BOTTOM
   line(355, 336, 365, 340);
   
   //line four right eye BOTTOM
   line(365, 340, 377, 341);
   
   //line five right eye BOTTOM
   line(377, 341, 385, 341);
   
   //Line six right eye BOTTOM
   line(385, 341, 399, 338);
   
   //line seven right eye BOTTOM
   fill(0);
   line(399, 338, 412, 332);
   
   //line eight right eye BOTTOM
   line(412, 332, 425, 325);
   
   //line nine right eye BOTTOM
   line(425, 325, 430, 321);
   
//NEW LINE RIGHT EYE//
   
   //line one right eye TOP
   line(333, 320, 348, 308);
   
   // line two right eye TOP
   line(348, 308, 358, 303);
   
   //line three right eye TOP
   line(358, 303, 366, 301);
   
   //line four right eye TOP
   line(366, 301, 379, 300);
   
   //line five right eye TOP
   line(379, 300, 390, 301);
   
   //line six right eye TOP
   line(390, 301, 403, 303);
   
   //line seven right eye TOP
   line(403, 303, 415, 308);
   
   //line eight right eye TOP
   line(415, 308, 423, 313);
   
   //line nine right eye TOP
   line(423, 313, 431, 320);
   
//EYELASHES RIGHT EYE//
   
   //eyelashe one TOP
   line(383, 300, 383, 283);
   
   //eyelashes two TOP
   line(349, 305, 340, 294);
   
   //eyelash three TOP
   line(413, 307, 423, 294);
   
   //eyelash one BOTTOM
   line(383, 356, 383, 284)
   
   //eyelash two BOTTOM
   line(349, 338, 340, 348);
   
   //eyelash three BOTTOM
   line(413, 336, 423, 348);
   
//HAIR SIDE PIECES//
strokeWeight(4);
stroke(25, 21, 22);

   //hair side piece one LEFT
   line(165, 220, 160, 400);
   
   //hair side piece one RIGHT
   line(446, 220, 455, 400);
   
strokeWeight(10);   

   //hair side piece two LEFT
   line(160, 220, 155, 400);
   
   //hair side piece two RIGHT
   line(451, 220, 460, 400);
   

}
