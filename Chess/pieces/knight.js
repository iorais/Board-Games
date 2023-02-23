function knight(color, num){//allows movement for all knight pieces
    var opposite;
    var countNum;
    var oppCountNum;
    var ID;
    
    if(num>2){//checks if the piece is a promoted pawn
      ID=color+"PawnButton"+(num-2);
    } else {
      ID=color+"KnightButton"+num;
    }
    
    if(color=="white"){//determines piece color
      opposite="black";
      countNum=0;
      oppCountNum=1;
    } else {
      opposite="white";
      countNum=1;
      oppCountNum=0;
    }
    
    if(getProperty(ID,"background-color")=="rgba(0, 0, 0, 0)" && count==countNum){//checks if the piece is being selected to move
      updatePos();
      select=ID;
      checkPos(select);
      playSound("sound://category_app/app_menu_button_2.mp3",false);
      //determines moves for knight depending on its position and position of other pieces
      if(i>1){
        if(j>0){  
          if(board[i-2][j-1]==0){
            showElement("button"+((i-2)*8+(j-1)+1));
          } else if(checkColor(board[i-2][j-1])==opposite){
            setProperty(board[i-2][j-1], "background-color", "rgba(1, 125, 250, 0.8)");
          }
        }
        if(j<7){  
          if(board[i-2][j+1]==0){
            showElement("button"+((i-2)*8+(j+1)+1));
          } else if(checkColor(board[i-2][j+1])==opposite){
            setProperty(board[i-2][j+1], "background-color", "rgba(1, 125, 250, 0.8)");
          }
        }
      }
      
      if(i<6){
        if(j>0){  
          if(board[i+2][j-1]==0){
            showElement("button"+((i+2)*8+(j-1)+1));
          } else if(checkColor(board[i+2][j-1])==opposite){
            setProperty(board[i+2][j-1], "background-color", "rgba(1, 125, 250, 0.8)");
          }
        }
        if(j<7){  
          if(board[i+2][j+1]==0){
            showElement("button"+((i+2)*8+(j+1)+1));
          } else if(checkColor(board[i+2][j+1])==opposite){
            setProperty(board[i+2][j+1], "background-color", "rgba(1, 125, 250, 0.8)");
          }
        }
      }
      
      if(i>0){
        if(j>1){  
          if(board[i-1][j-2]==0){
            showElement("button"+((i-1)*8+(j-2)+1));
          } else if(checkColor(board[i-1][j-2])==opposite){
            setProperty(board[i-1][j-2], "background-color", "rgba(1, 125, 250, 0.8)");
          }
        }
        if(j<6){  
          if(board[i-1][j+2]==0){
            showElement("button"+((i-1)*8+(j+2)+1));
          } else if(checkColor(board[i-1][j+2])==opposite){
            setProperty(board[i-1][j+2], "background-color", "rgba(1, 125, 250, 0.8)");
          }
        }
      }
      
      if(i<7){
        if(j>1){  
          if(board[i+1][j-2]==0){
            showElement("button"+((i+1)*8+(j-2)+1));
          } else if(checkColor(board[i+1][j-2])==opposite){
            setProperty(board[i+1][j-2], "background-color", "rgba(1, 125, 250, 0.8)");
          }
        }
        if(j<6){  
          if(board[i+1][j+2]==0){
            showElement("button"+((i+1)*8+(j+2)+1));
          } else if(checkColor(board[i+1][j+2])==opposite){
            setProperty(board[i+1][j+2], "background-color", "rgba(1, 125, 250, 0.8)");
          }
        }
      }
      
    } else if(getProperty(ID,"background-color")=="rgba(1, 125, 250, 0.8)" && count==oppCountNum){//checks if the piece is being selected to be captured
      capture(ID);
    }
  }