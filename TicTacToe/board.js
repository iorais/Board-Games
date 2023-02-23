function check() {//checks for a three in a row
  
    if(x[1]==1 && x[2]==1 && x[3]==1){
      row1x = 1;
    }
    
    if(x[4]==1 && x[5]==1 && x[6]==1){
      row2x = 1;
    }
    
    if(x[7]==1 && x[8]==1 && x[9]==1){
      row3x = 1;
    }
    
    if(x[1]==1 && x[4]==1 && x[7]==1){
      colm1x=1;
    }
    
    if(x[2]==1 && x[5]==1 && x[8]==1){
      colm2x=1;
    }
    
    if(x[3]==1 && x[6]==1 && x[9]==1){
      colm3x=1;
    }
    
    if(x[1]==1 && x[5]==1 && x[9]==1){
      diag1x = 1;
    }
    
    if(x[3]==1 && x[5]==1 && x[7]==1){
      diag2x = 1;
    }
    
    if(row1x==1||row2x==1||row3x==1||colm1x==1||colm2x==1||colm3x==1||diag1x==1||diag2x==1){
      x[0]=1;
    }  
      
      
    if(o[1]==1 && o[2]==1 && o[3]==1){
      row1o = 1;
    }
    
    if(o[4]==1 && o[5]==1 && o[6]==1){
      row2o = 1;
    }
    
    if(o[7]==1 && o[8]==1 && o[9]==1){
      row3o = 1;
    }
    
    if(o[1]==1 && o[4]==1 && o[7]==1){
      colm1o=1;
    }
    
    if(o[2]==1 && o[5]==1 && o[8]==1){
      colm2o=1;
    }
    
    if(o[3]==1 && o[6]==1 && o[9]==1){
      colm3o=1;
    }
    
    if(o[1]==1 && o[5]==1 && o[9]==1){
      diag1o = 1;
    }
    
    if(o[3]==1 && o[5]==1 && o[7]==1){
      diag2o = 1;
    }
    
    if(row1o==1||row2o==1||row3o==1||colm1o==1||colm2o==1||colm3o==1||diag1o==1||diag2o==1){
      o[0]=1;
    }
    
    if(x[0]==1){//x wins
      showElement("winMessage1");
      showElement("winMessage2");
      setText("winMessage2", "X Wins!");
      playSound("sound://category_music/birthday_kazoo_positive_game_cue_3.mp3", false);
    }
    
    if(o[0]==1){//o wins
      showElement("winMessage1");
      showElement("winMessage2");
      setText("winMessage2", "O Wins!");
      playSound("sound://category_music/birthday_kazoo_positive_game_cue_3.mp3", false);
    }
    
    if(turn==8 && x[0]!=1 && o[0]!=1){
      showElement("winMessage2");
      setText("winMessage2", "TIE game");
    }
  }  