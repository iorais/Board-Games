var turn=0;
var red=1;
var black=2;
var flag=0;
var row=0;
var colm=0;
var diag1=0;
var diag2=0;
var win=0;
var num;
var i;
var j;
var x=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];

update();

onEvent("button1", "click", function( ) {
  if(turn%2==0)
    place(1,red);
  else
    place(1,black);
    update();
});

onEvent("button2", "click", function( ) {
  if(turn%2==0)
    place(2,red);
  else
    place(2,black);
    update();
});

onEvent("button3", "click", function( ) {
  if(turn%2==0)
    place(3,red);
  else
    place(3,black);
    update();
});

onEvent("button4", "click", function( ) {
  if(turn%2==0)
    place(4,red);
  else
    place(4,black);
    update();
});

onEvent("button5", "click", function( ) {
  if(turn%2==0)
    place(5,red);
  else
    place(5,black);
    update();
});

onEvent("button6", "click", function( ) {
  if(turn%2==0)
    place(6,red);
  else
    place(6,black);
    update();
});

onEvent("button7", "click", function( ) {
  if(turn%2==0)
    place(7,red);
  else
    place(7,black);
    update();
});

onEvent("button8", "click", function( ) {
  for(i=0; i<6; i++)
    for(j=0; j<7; j++)
      x[i][j]=0;
  turn=0;
  win=0;
  row=0;
  colm=0;
  diag1=0;
  diag2=0;
  red=1;
  black=2;
  hideElement("labelWin");
  update();
});


function place(column,color){//places the piece with the column and color received as argument
  for(i=0; i<6;i++){
    if(x[i][column-1]==0){
      x[i][column-1]=color;
      flag=1;
      if(turn%2==0){
        playSound("sound://category_swish/karate_whoosh_14.mp3", false);
        check(red);
      } else {
        playSound("sound://category_swish/karate_whoosh_8.mp3", false);
        check(black);
      }
      turn++;
      
      break;
    }
  }
}

function update(){//updates the board
  for(i=0; i<6; i++){
    for(j=0; j<7; j++){
      num=i*7+j+1;
      if(x[i][j]==0){
        setProperty("image"+num,"icon-color",rgb(255, 224, 73));
      } else if(x[i][j]==red){
        setProperty("image"+num,"icon-color","red");
      } else if(x[i][j]==black){
        setProperty("image"+num,"icon-color","black");
      }  
    }
  }
  if(turn%2==0){
    setText("labelColor","red");
    setProperty("labelColor", "text-color", "red");
  } else {
    setText("labelColor","black");
    setProperty("labelColor", "text-color", "black");
  }
  if(win==red){
    setText("labelWin", "RED WINS!");
    setProperty("labelWin", "text-color", "red");
    showElement("labelWin");
    playSound("sound://category_instrumental/trumpet.mp3",false);
    end();
  } else if(win==black){
    setText("labelWin", "BLACK WINS!");
    setProperty("labelWin", "text-color", "black");
    showElement("labelWin");
    playSound("sound://category_instrumental/trumpet.mp3",false);
    end();
  } else if(win==0 && turn==42){
    setText("labelWin", "TIE GAME");
    setProperty("labelWin", "text-color", "white");
    showElement("labelWin");
    playSound("sound://category_digital/whistle_down.mp3",false);
    end();
  }
}

function check(color) {//checks for win condition of the color received as argument
 for(i=0; i<6; i++){
   for(j=0; j<4; j++){
     if(x[i][j]==color && x[i][j+1]==color && x[i][j+2]==color &&x[i][j+3]==color){
       row=1;
     }
   }
 }
  for(i=0; i<3; i++){
    for(j=0; j<7; j++){
     if(x[i][j]==color && x[i+1][j]==color && x[i+2][j]==color &&x[i+3][j]==color){
       colm=1;
     }
    }
  }
  for(i=0; i<3; i++){
    for(j=0; j<4; j++){
     if(x[i][j]==color && x[i+1][j+1]==color && x[i+2][j+2]==color &&x[i+3][j+3]==color){
       diag1=1;
     }
    }
  }
  for(i=5; i>=3; i--){
    for(j=0; j<4; j++){
     if(x[i][j]==color && x[i-1][j+1]==color && x[i-2][j+2]==color &&x[i-3][j+3]==color){
        diag2=1;
     }
    }
  }
 if(row==1 || colm==1 || diag1==1 || diag2==1){
   win=color;
 }
}

function end(){//ends the game
  red=0;
  black=0;
  return;
}