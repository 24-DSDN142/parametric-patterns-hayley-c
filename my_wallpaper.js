//your parameter variables go here!

let background_colour = "rgb(255)"; //changes the background's colour
let snowy = true; //adds a snowy background
let snow_colour = "rgb(139, 168, 201)"; //changes the snowy background's colour
let snow_size = 4; //changes the size of the background's snow
let weight = 3; //changes the snowflake's line weight
let y = -39 ; //changes the snowflake's arm length & no. of snowflakes
let ratio = 5; //changes the position of the snowflake's branches & adds extra elements
let num_arms = 8; //changes the number of arms drawn
let multicolour_snowflake = false; //creates multicolour branches
let top_branch_colour = "rgb(255)"; //changes the top branch colour
let middle_branch_colour = "rgb(75, 75, 75)"; //changes the middle branch colour
let bottom_branch_colour = "rgb(355)"; //changes the bottom branch colour
let base_colour = "rgb(0, 75, 161)"; //changes the centre line colour

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(background_colour); //background colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  //background
  if (snowy){
    draw_snow();
  }

  //draws 3 snowflakes
  if ( y < -25 && y >= -35){
    draw_snowflake(56, 56);
    draw_snowflake(150,83);
    draw_snowflake(90,148);

  }

  //draws 2 snowflakes
  else if ( y < -35 && y >= -45){
     draw_snowflake(55, 55);
     draw_snowflake(145,145);

  //draws 1 snowflake
  } else{
     draw_snowflake(100,100);

  } 
  
}
 

//draws a snowflake arm
function draw_arm(){ 

  let branch_position = y/ratio; //variable dependent on the snowflake's length(y) and the arm's ratios(ratio)
  let rotation = 180/num_arms; //calculates the angle of rotation between arms based on the set number of arms(num_arms)
  strokeWeight (weight); //snowflake's line weight

  //draws basic snowflake arm and sets colours
  if(multicolour_snowflake == true){ //multicolour snowflake
    stroke(base_colour);//centre line colour
    line(0, 0, 0, y); //arm length

    stroke(top_branch_colour); //top branch colour
    line(0, branch_position/(3/11), y/4.5, branch_position/(3/16)); //top left branch
    line(0, branch_position/(3/11), y/-4.5, branch_position/(3/16)); //top right branch

    stroke(middle_branch_colour); //middle branch colour
    line(0, branch_position/(3/7), y/4.5, branch_position/(1/4)); //middle left branch
    line(0, branch_position/(3/7), y/-4.5, branch_position/(1/4)); //middle right branch

    stroke(bottom_branch_colour); //bottom branch colour
    line(0, branch_position, y/4.5, branch_position/(3/8)); //bottom left branch
    line(0, branch_position, y/-4.5, branch_position/(3/8)); //bottom right branch
  }
  else{ //single colour snowflake
    stroke(base_colour); //snowflake's colour
    line(0, 0, 0, y); //arm length
    line(0, branch_position/(3/11), y/4.5, branch_position/(3/16)); //top left branch
    line(0, branch_position/(3/11), y/-4.5, branch_position/(3/16)); //top right branch
    line(0, branch_position/(3/7), y/4.5, branch_position/(1/4)); //middle left branch
    line(0, branch_position/(3/7), y/-4.5, branch_position/(1/4)); //middle right branch
    line(0, branch_position, y/4.5, branch_position/(3/8)); //bottom left branch
    line(0, branch_position, y/-4.5, branch_position/(3/8)); //bottom right branch
  }

  //adds shapes to the snowflakes arms dependent on the ratio
  if (ratio == 4){ //adds a circle between snowflake's arms
   
      push();

      rotate(rotation); //rotates the circle to halfway between snowflake's arms
      noFill(); //empty circle
      strokeWeight(weight); //line's weight
      stroke(base_colour); //circle's colour
      circle (0, y*0.8, 5); //circle's position 

      pop() 
    }
    else if (ratio == 5){ //adds a point at the end of snowflake's arms
      stroke(base_colour); //point's colour
      strokeWeight(weight*2); //larger point
      point (0, y-10); //point's position
    }
    else if (ratio == 6){ //adds a thin line between snowflake's arms
      push();

      rotate(rotation); //rotates the line to halfway between snowflake's arms
      stroke(base_colour); //line's colour
      strokeWeight(weight/2); //line's weight
      line(0, 0, 0, y*0.75); //line's length

      pop()
    }
    else{ //adds a diamond at the end of snowflake's arm
      fill(base_colour); //fills diamond
      strokeWeight(0); //no outline
      quad(0, y-5, y/9, y+5, 0, y+10, y/-9, y+5); //diamond shape & position
    }

  }

  function draw_snow (){ // snowy background

    let snow_array = [[50, 10], 
    [90, 20],
    [24, 30],
    [58, 42],
    [13, 66],
    [26, 108],
    [46, 78],
    [93, 92],
    [83, 68],
    [73, 113],
    [46, 142],
    [89, 137],
    [14, 158],
    [56, 165],
    [32, 191],
    [79, 182],
    [150, 10],
    [190, 20],
    [124, 30],
    [158, 42],
    [113, 66],
    [126, 108],
    [146, 78],
    [193, 92],
    [183, 68],
    [173, 113],
    [146, 142],
    [189, 137],
    [114, 158],
    [156, 165],
    [132, 191],
    [179, 182]
  ];

    strokeWeight(snow_size); //snow's size
    stroke(snow_colour); //snow's colour

    for (let i = 0; i < snow_array.length; i++) {
      
      let x = snow_array[i][0];
      let y = snow_array[i][1];
      point(x, y)
  }
    
  }

  function draw_snowflake(x, y){ //draws a snowflake with 6 arms at x(x-axis), y(y-axis)

    push();
    
    translate(x, y) //co-ordinates of the snowflake's centre

    let rotation = 360/num_arms; //calculates the angle of rotation based on the set number of arms(num_arms)

    for (let i = 0; i < num_arms; i++) {
      rotate(rotation) 
      draw_arm()
    }
   
    pop();
   }