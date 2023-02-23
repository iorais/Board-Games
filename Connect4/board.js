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