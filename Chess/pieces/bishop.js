function bishop(color, num){//allows movement for all bishop peices
    var opposite;
    var countNum;
    var oppCountNum;
    var ID;
    
    if(num>2){//checks if the piece is a promoted pawn
      ID=color+"PawnButton"+(num-2);
    } else {
      ID=color+"BishopButton"+num;
    }
    
    if(color=="white"){//determines color
      opposite="black";
      countNum=0;
      oppCountNum=1;
    } else {
      opposite="white";
      countNum=1;
      oppCountNum=0;
    }
    
    if(getProperty(ID,"background-color")=="rgba(0, 0, 0, 0)" && count==countNum){
      updatePos();
      select=ID;
      checkPos(select);
      playSound("sound://category_app/app_menu_button_2.mp3",false);
      //determines moves for bishop depending on its position and position of other pieces
      var n=1;
      var m=1;
      while(i+n<=7 && j+m<=7 && board[i+n][j+m]==0){
        showElement("button"+((i+n)*8+(j+m)+1));
        n++;
        m++;
      }
      if(i+n<=7 && j+m<=7 && checkColor(board[i+n][j+m])==opposite){
         setProperty(board[i+n][j+m], "background-color", "rgba(1, 125, 250, 0.8)");
      }
      
      n=-1;
      m=-1;
      while(i+n>=0 && j+m>=0 && board[i+n][j+m]==0){
        showElement("button"+((i+n)*8+(j+m)+1));
        n--;
        m--;
      }
      if(i+n>=0 && j+m>=0 && checkColor(board[i+n][j+m])==opposite){
         setProperty(board[i+n][j+m], "background-color", "rgba(1, 125, 250, 0.8)");
      }
      
      n=1;
      m=-1;
      while(i+n<=7 && j+m>=0 && board[i+n][j+m]==0){
        showElement("button"+((i+n)*8+(j+m)+1));
        n++;
        m--;
      }
      if(i+n<=7 && j+m>=0 && checkColor(board[i+n][j+m])==opposite){
         setProperty(board[i+n][j+m], "background-color", "rgba(1, 125, 250, 0.8)");
      }
      
      n=-1;
      m=1;
      while(i+n>=0 && j+m<=7 && board[i+n][j+m]==0){
        showElement("button"+((i+n)*8+(j+m)+1));
        n--;
        m++;
      }
      if(i+n>=0 && j+m<=7 && checkColor(board[i+n][j+m])==opposite){
         setProperty(board[i+n][j+m], "background-color", "rgba(1, 125, 250, 0.8)");
      }
      
    } else if(getProperty(ID,"background-color")=="rgba(1, 125, 250, 0.8)" && count==oppCountNum){
      capture(ID);
    }
  }