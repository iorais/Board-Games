function pawn(color, num){//allows movement for all pawn pieces
    var opposite;
    var start;
    var passant;
    var forward;
    var countNum;
    var oppCountNum;
    var queenImage;
    var rookImage;
    var bishopImage;
    var knightImage;
    var ID=color+"PawnButton"+num;
    
    if(color=="white"){//determines piece color
      opposite="black";
      start=6;
      passant=3;
      forward=-1;
      countNum=0;
      oppCountNum=1;
      queenImage="kindpng_2581815.png";
      rookImage="chess_piece_white_rook_T.png";
      bishopImage="kindpng_1564822.png";
      knightImage="kindpng_223299.png";
    } else {
      opposite="white";
      start=1;
      passant=4;
      forward=1;
      countNum=1;
      oppCountNum=0;
      queenImage="kindpng_971447.png";
      rookImage="chess_piece_black_rook_T.png";
      bishopImage="kindpng_223452.png";
      knightImage="kindpng_1127048.png";
    }
    
    if(getProperty(ID,"image")==queenImage){//determines if the pawn is promoted
      queen(color, num);
    } else if(getProperty(ID,"image")==rookImage){
      rook(color, num+2);
    } else if(getProperty(ID,"image")==bishopImage){
      bishop(color, num+2);
    } else if(getProperty(ID,"image")==knightImage){
      knight(color, num+2);
    } else {
      if(select>=opposite+"PawnButton1" && select<=opposite+"PawnButton8" && enPassant==1 && count==countNum){//allows the pawn to enPassant
        checkPos(color+"PawnButton"+num);
        if(i==passant && board[i][j+1]==select && j!=7){//checks if another pawn is availble to enPassant on the right of the pawn
          showElement("enPassantButton1");
          setPosition("enPassantButton1", x+40, y+(forward*40));
          select=ID;
        }
        if(i==passant && board[i][j-1]==select && j!=0){//checks if another pawn is availble to enPassant on the left of the pawn
          showElement("enPassantButton2");
          setPosition("enPassantButton2", x-40, y+(forward*40));
          select=ID;
        }
      }
      
      if(getProperty(ID,"background-color")=="rgba(0, 0, 0, 0)" && count==countNum){//checks if the piece is being selected to move
        updatePos();
        select=ID;
        checkPos(select);
        playSound("sound://category_app/app_menu_button_2.mp3",false);
        //determines moves for pawn depending on its position and position of other
        if(board[i+forward][j]==0){
          showElement("button"+((i+forward)*8+j+1));
          if(i==start && board[i+(forward*2)][j]==0){//checks if the pawn can move two spaces forward
            showElement("button"+((i+(forward*2))*8+j+1));
            enPassant=2;
          }
        }
        if(checkColor(board[i+forward][j-1])==opposite && j!=0){
          setProperty(board[i+forward][j-1],"background-color","rgba(1, 125, 250, 0.8)");
        }
        if(checkColor(board[i+forward][j+1])==opposite && j!=7){
          setProperty(board[i+forward][j+1],"background-color","rgba(1, 125, 250, 0.8)");
        }
      } else if(getProperty(ID,"background-color")=="rgba(1, 125, 250, 0.8)" && count==oppCountNum){//checks if the peice is being selected to be captured
        capture(ID);
      }
    }
  }