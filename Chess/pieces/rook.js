function rook(color, num){
    var opposite;
    var countNum;
    var oppCountNum;
    var ID;
    
    if(num>2){
      ID=color+"PawnButton"+(num-2);
    } else {
      ID=color+"RookButton"+num;
    }
    
    if(color=="white"){
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
      if(color=="white"){
        if(num==1 && (i!=7 || j!=0)){
          whiteCastleQ=0;
        }
        if(num==2 && (i!=7 || j!=7)){
          whiteCastleK=0;
        }
      } else {
        if(num==1 && (i!=0 || j!=0)){
          blackCastleQ=0;
        }
        if(num==2 && (i!=7 || j!=7)){
          blackCastleK=0;
        }
      }
      playSound("sound://category_app/app_menu_button_2.mp3",false);
      
      var n=1;
      var m=0;
      while(i+n<=7 && j+m<=7 && board[i+n][j+m]==0){
        showElement("button"+((i+n)*8+(j+m)+1));
        n++;
      }
      if(i+n<=7 && j+m<=7 && checkColor(board[i+n][j+m])==opposite){
         setProperty(board[i+n][j+m], "background-color", "rgba(1, 125, 250, 0.8)");
      }
      
      n=-1;
      m=0;
      while(i+n>=0 && j+m>=0 && board[i+n][j+m]==0){
        showElement("button"+((i+n)*8+(j+m)+1));
        n--;
      }
      if(i+n>=0 && j+m>=0 && checkColor(board[i+n][j+m])==opposite){
         setProperty(board[i+n][j+m], "background-color", "rgba(1, 125, 250, 0.8)");
      }
      
      n=0;
      m=-1;
      while(i+n<=7 && j+m>=0 && board[i+n][j+m]==0){
        showElement("button"+((i+n)*8+(j+m)+1));
        m--;
      }
      if(i+n<=7 && j+m>=0 && checkColor(board[i+n][j+m])==opposite){
         setProperty(board[i+n][j+m], "background-color", "rgba(1, 125, 250, 0.8)");
      }
      
      n=0;
      m=1;
      while(i+n>=0 && j+m<=7 && board[i+n][j+m]==0){
        showElement("button"+((i+n)*8+(j+m)+1));
        m++;
      }
      if(i+n>=0 && j+m<=7 && checkColor(board[i+n][j+m])==opposite){
         setProperty(board[i+n][j+m], "background-color", "rgba(1, 125, 250, 0.8)");
      }
    } else if(getProperty(ID,"background-color")=="rgba(1, 125, 250, 0.8)" && count==oppCountNum){
      capture(ID);
    }
  }