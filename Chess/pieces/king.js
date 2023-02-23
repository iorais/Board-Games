function king(color){
    var opposite;
    var countNum;
    var oppCountNum;
    var ID=color+"KingButton";
    
    if(color=="white"){
      opposite="black";
      countNum=0;
      oppCountNum=1;
    } else {
      opposite="white";
      countNum=1;
      oppCountNum=0;
    }
    
    if(count==countNum){
      updatePos();
      select=ID;
      checkPos(select);
      if(color=="white" && (i!=7 || j!=4)){
        whiteCastleK=0;
        whiteCastleQ=0;
      } else if(color=="black" && (i!=0 || j!=4)){
        blackCastleK=0;
        blackCastleQ=0;
      }
      playSound("sound://category_app/app_menu_button_2.mp3",false);
      if(i<7){
        if(board[i+1][j]==0){
          showElement("button"+((i+1)*8+(j)+1));
        } else if(checkColor(board[i+1][j])==opposite){
          setProperty(board[i+1][j], "background-color", "rgba(1, 125, 250, 0.8)");
        }
        if(j<7){
          if(board[i+1][j+1]==0){
           showElement("button"+((i+1)*8+(j+1)+1));
          } else if(checkColor(board[i+1][j+1])==opposite){
            setProperty(board[i+1][j+1], "background-color", "rgba(1, 125, 250, 0.8)");
          }
        } 
        if(j>0){
          if(board[i+1][j-1]==0){
           showElement("button"+((i+1)*8+(j-1)+1));
          } else if(checkColor(board[i+1][j-1])==opposite){
            setProperty(board[i+1][j-1], "background-color", "rgba(1, 125, 250, 0.8)");
          }
        }
      }
      if(i>0){
        if(board[i-1][j]==0){
          showElement("button"+((i-1)*8+(j)+1));
        } else if(checkColor(board[i-1][j])==opposite){
          setProperty(board[i-1][j], "background-color", "rgba(1, 125, 250, 0.8)");
        }
        if(j<7){
          if(board[i-1][j+1]==0){
           showElement("button"+((i-1)*8+(j+1)+1));
          } else if(checkColor(board[i-1][j+1])==opposite){
            setProperty(board[i-1][j+1], "background-color", "rgba(1, 125, 250, 0.8)");
          }
        } 
        if(j>0){
          if(board[i-1][j-1]==0){
           showElement("button"+((i-1)*8+(j-1)+1));
          } else if(checkColor(board[i-1][j-1])==opposite){
            setProperty(board[i-1][j-1], "background-color", "rgba(1, 125, 250, 0.8)");
          }
        }
      }
      if(j<7){
        if(board[i][j+1]==0){
          showElement("button"+((i)*8+(j+1)+1));
          if(color=="white" && whiteCastleK==1 && board[i][j+2]==0){
            showElement("castleButtonK");
            setPosition("castleButtonK", x+80, y);
          } 
          if(color=="black" && blackCastleK==1 && board[i][j+2]==0){
            showElement("castleButtonK");
            setPosition("castleButtonK", x+80, y);
          }
        } else if(checkColor(board[i][j+1])==opposite){
          setProperty(board[i][j+1], "background-color", "rgba(1, 125, 250, 0.8)");
        }
      }
      if(j>0){
        if(board[i][j-1]==0){
          showElement("button"+((i)*8+(j-1)+1));
          if(color=="white" && whiteCastleQ==1 && board[i][j-2]==0 && board[i][j-3]==0){
            showElement("castleButtonQ");
            setPosition("castleButtonQ", x-80, y);
          } 
          if(color=="black" && blackCastleQ==1 && board[i][j-2]==0 && board[i][j-3]==0){
            showElement("castleButtonQ");
            setPosition("castleButtonQ", x-80, y);
          }
        } else if(checkColor(board[i][j-1])==opposite){
          setProperty(board[i][j-1], "background-color", "rgba(1, 125, 250, 0.8)");
        }
      }
    }
  }