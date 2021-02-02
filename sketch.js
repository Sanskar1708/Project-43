function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  
  translate(width/2, height/2);
  rotate(270);

  var sec = second();
  var secondBackground = map(sec, 0,60,0,360);

  var min = minute();
  var minuteBackground = map(min,0,60,0,360);

  var hor = hour();
  var hourBackground = map(hor % 12,0,12,0,360);

  background(minuteBackground,secondBackground,hourBackground);
  

  var hr = hour();
  var mn = minute();
  var sc = second();

  strokeWeight(8);
  noFill();
  
// Second Arc.
  stroke(secondBackground,2,138);
  var secondHandArc = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondHandArc);

// Second Stroke.
   push();
  rotate(secondHandArc);
  stroke(secondBackground,2,138);
  line(0, 0, 100, 0);
   pop();

// Minute Arc.
  stroke(40,minuteBackground,16);
  var minuteHandArc = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteHandArc);

// Minute Stroke.
   push();
  rotate(minuteHandArc);
  stroke(40,minuteBackground,16);
  line(0, 0, 75, 0);
   pop();

// Hour Arc.
  stroke(3,170,hourBackground);
  var hourHandArc = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourHandArc);

// Hour Storke.
   push();
  rotate(hourHandArc);
  stroke(3,170,hourBackground);
  line(0, 0, 50, 0);
   pop();

// Numbering on the clock

  rotate(90);
  
  fill("red"); 
  strokeWeight(4);
  stroke("blue")
  textSize(20);
  text("6",0- 10,0 + 180);
 
  fill("red");
  strokeWeight(4);
  stroke("blue")
  textSize(20);
  text("3",0 + 180,0 + 10); 

  fill("red");
  strokeWeight(4);
  stroke("blue")
  textSize(20);
  text("9",0 - 180,0 + 10); 

  fill("red"); 
  strokeWeight(4);
  stroke("blue")
  textSize(20);
  text("12",0 - 10,0 - 180);


}