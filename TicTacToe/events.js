var turn = 0;

//slot in the array corresponds to position on screen, index 0 corresponds to winner
var x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var row1x;
var row2x;
var row3x;
var colm1x;
var colm2x;
var colm3x;
var diag1x;
var diag2x;

var row1o;
var row2o;
var row3o;
var colm1o;
var colm2o;
var colm3o;
var diag1o;
var diag2o;

//buttons
onEvent("button1", "click", function( ) {
  if(turn%2==0){
    playSound("sound://category_app/app_interface_button_2.mp3", false);
    x[1] = 1;
    setImageURL("image1", "https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/letter-x-icon-14-256.png");
  } else {
    playSound("sound://category_app/app_interface_button_3.mp3", false);
    setImageURL("image1", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1085px-Letter_o.svg.png");
    o[1] = 1;
  }
  check();
  turn++;
  var m=getProperty("winMessage1","hidden");
  console.log(m);
  console.log(getProperty("button1","hidden"));
});

onEvent("button2", "click", function( ) {
  if(turn%2==0){
    playSound("sound://category_app/app_interface_button_2.mp3", false);
    x[2] = 1;
    setImageURL("image2", "https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/letter-x-icon-14-256.png");
  } else {
    playSound("sound://category_app/app_interface_button_3.mp3", false);
    o[2] = 1;
    setImageURL("image2", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1085px-Letter_o.svg.png");
  }
  check();
  turn++;
});

onEvent("button3", "click", function( ) {
  if(turn%2==0){
    playSound("sound://category_app/app_interface_button_2.mp3", false);
    x[3] = 1;
    setImageURL("image3", "https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/letter-x-icon-14-256.png");
  } else {
    playSound("sound://category_app/app_interface_button_3.mp3", false);
    o[3] = 1;
    setImageURL("image3", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1085px-Letter_o.svg.png");
  }
  check();
  turn++;
});

onEvent("button4", "click", function( ) {
  if(turn%2==0){
    playSound("sound://category_app/app_interface_button_2.mp3", false);
    x[4] = 1;
    setImageURL("image4", "https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/letter-x-icon-14-256.png");
  } else {
    playSound("sound://category_app/app_interface_button_3.mp3", false);
    o[4] = 1;
    setImageURL("image4", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1085px-Letter_o.svg.png");
  }
  check();
  turn++;
});

onEvent("button5", "click", function( ) {
  if(turn%2==0){
    playSound("sound://category_app/app_interface_button_2.mp3", false);
    x[5] = 1;
    setImageURL("image5", "https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/letter-x-icon-14-256.png");
  } else {
    playSound("sound://category_app/app_interface_button_3.mp3", false);
    o[5] = 1;
    setImageURL("image5", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1085px-Letter_o.svg.png");
  }
  check();
  turn++;
});

onEvent("button6", "click", function( ) {
  if(turn%2==0){
    playSound("sound://category_app/app_interface_button_2.mp3", false);
    x[6] = 1;
    setImageURL("image6", "https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/letter-x-icon-14-256.png");
  } else {
    playSound("sound://category_app/app_interface_button_3.mp3", false);
    o[6] = 1;
    setImageURL("image6", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1085px-Letter_o.svg.png");
  }
  check();
  turn++;
});

onEvent("button7", "click", function( ) {
  if(turn%2==0){
    playSound("sound://category_app/app_interface_button_2.mp3", false);
    x[7] = 1;
    setImageURL("image7", "https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/letter-x-icon-14-256.png");
  } else {
    playSound("sound://category_app/app_interface_button_3.mp3", false);
    o[7] = 1;
    setImageURL("image7", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1085px-Letter_o.svg.png");
  }
  check();
  turn++;
});

onEvent("button8", "click", function( ) {
  if(turn%2==0){
    playSound("sound://category_app/app_interface_button_2.mp3", false);
    x[8] = 1;
    setImageURL("image8", "https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/letter-x-icon-14-256.png");
  } else {
    playSound("sound://category_app/app_interface_button_3.mp3", false);
    o[8] = 1;
    setImageURL("image8", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1085px-Letter_o.svg.png");
  }
  check();
  turn++;
});

onEvent("button9", "click", function( ) {
  if(turn%2==0){
    playSound("sound://category_app/app_interface_button_2.mp3", false);
    x[9] = 1;
    setImageURL("image9", "https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/letter-x-icon-14-256.png");
  } else {
    playSound("sound://category_app/app_interface_button_3.mp3", false);
    o[9] = 1;
    setImageURL("image9", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1085px-Letter_o.svg.png");
  }
  check();
  turn++;
});