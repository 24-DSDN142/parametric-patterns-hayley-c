//your parameter variables go here!

let snowflake_colour = "rgb(171, 181, 194)"; //changes the snowflake's colour
let weight = 5; //changes the snowflake's line weight
let y = -8; // changes the snowflake's arm length & no. of snowflakes
let ratio = 7 //changes the position of the snowflake's branches & adds extra elements
let snowy = true // adds a snowy background



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(218, 229, 240); //light blue background
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  //background
  if (snowy){
    draw_snow();
  }

  //draws 3 snowflakes
  if ( y < -27 && y >= -30){
    draw_snowflake(56, 56);
    draw_snowflake(150,83);
    draw_snowflake(90,148);

  }

  //draws 2 snowflakes
  else if ( y < -30 && y >= -33){
     draw_snowflake(55, 55);
     draw_snowflake(140,140);

  //draws 1 snowflake
  } else{
     draw_snowflake(100,100);

  } 
  
}
 

function draw_arm(){ //draws a snowflake arm

  stroke (snowflake_colour); //snowflake's colour
  strokeWeight (weight); //snowflake's line weight
  let branch_position = y/ratio;
  line(0, 0, 0, y); //arm length
  line(0, branch_position/(3/11), y/4.5, branch_position/(3/16)); //top left branch
  line(0, branch_position/(3/11), y/-4.5, branch_position/(3/16)); //top right branch
  line(0, branch_position/(3/7), y/4.5, branch_position/(1/4)); //middle left branch
  line(0, branch_position/(3/7), y/-4.5, branch_position/(1/4)); //middle right branch//top left branch
  line(0, branch_position, y/4.5, branch_position/(3/8)); //bottom left branch
  line(0, branch_position, y/-4.5, branch_position/(3/8)); //bottpom right branch

  if (ratio == 4){ //adds a circle between snowflake's arms
    noFill(); //empty circle
    circle (y/1.8, y, 5); //circle's position 
  }
  else if (ratio == 5){ //adds a point at the end of snowflake's arms
    strokeWeight(weight*2); //larger point
    point (0, y-10); //point's position
  }
  else if (ratio == 6){ //adds a thin line between snowflake's arms
    strokeWeight(weight/2); //line's weight
    line(0, 0, y/2.7, y/1.5); // line's length
  }
  else{ //adds a diamond at the end of snowflake's arm
    fill(snowflake_colour); //fills diamond
    quad(0, y-5, y/9, y+5, 0, y+10, y/-9, y+5); //diamond shape & position
  }

  }

  function draw_snow (){ // snowy background

    strokeWeight(7); //snow's size
    stroke(255); //white snow
    point(50, 10);
    point(90, 20);
    point(24, 30);
    point(58, 42);
    point(13, 66);
    point(26, 108);
    point(46, 78);
    point(93, 92);
    point(83, 68);
    point(73, 113);
    point(46, 142);
    point(89, 137);
    point(14, 158);
    point(56, 165);
    point(32, 191);
    point(79, 182);
    point(150, 10);
    point(190, 20);
    point(124, 30);
    point(158, 42);
    point(113, 66);
    point(126, 108);
    point(146, 78);
    point(193, 92);
    point(183, 68);
    point(173, 113);
    point(146, 142);
    point(189, 137);
    point(114, 158);
    point(156, 165);
    point(132, 191);
    point(179, 182);
    
  }

  function draw_snowflake(x, y){ //draws a snowflake with 6 arms at x(x-axis), y(y-axis)

    let rotation = 60; //set rotation of 60 degrees for 6 arms

    push();
    
    translate(x, y) //co-ordinates of the snowflake's centre
   
    rotate(0) //arm at 12 o'clock
    draw_arm()
   
    rotate(rotation) //arm at 2 o'clock
    draw_arm()
   
    rotate(rotation) //arm at 4 o'clock
    draw_arm()
   
    rotate(rotation) //arm at 6 o'clock
    draw_arm()
   
    rotate(rotation) //arm at 8 o'clock
    draw_arm()
   
    rotate(rotation) //arm at 10 o'clock
    draw_arm()
   
    pop();
   }