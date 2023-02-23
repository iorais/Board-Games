//board set up
var board=[[],[],[],[],[],[],[],[]];
var select;
var n;
var m;
var i;
var j;
var x;
var y;
var count=0;
var enPassant=0;
var whiteCastleQ=1;
var whiteCastleK=1;
var blackCastleQ=1;
var blackCastleK=1;

for(var n=0;n<8;n++){//initializes array making the board empty
  for(var m=0;m<8;m++){
    board[n][m]=0;
  }
}

for(i=6, j=0;j<8;j++){//puts the white pawn pieces into the array
  board[i][j]="whitePawnButton"+j;
}

for(i=1, j=0;j<8;j++){//puts the black pawn pieces into the array
  board[i][j]="blackPawnButton"+j;
}

//puts the knights into the array
board[7][1]="whiteKnightButton1";
board[7][6]="whiteKnightButton2";
board[0][1]="blackKnightButton1";
board[0][6]="blackKnightButton2";
//puts the bishops into the array
board[7][2]="whiteBishopButton1";
board[7][5]="whiteBishopButton2";
board[0][2]="blackBishopButton1";
board[0][5]="blackBishopButton2";
//puts the rooks into the array
board[7][0]="whiteRookButton1";
board[7][7]="whiteRookButton2";
board[0][0]="blackRookButton1";
board[0][7]="blackRookButton2";
//puts the queens into the array
board[7][3]="whiteQueenButton0";
board[0][3]="blackQueenButton0";
//puts the kings into the array
board[7][4]="whiteKingButton";
board[0][4]="blackKingButton";

var promotion=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function turn(){//keeps track of whose turn it is
    if(count==0){
      count=1;
    } else if(count==1){
      count=0;
    }
    countPiece("white");
    countPiece("black");
    return count;
  }
  
  function move(x,y){//moves pieces to a location on the board
    setPosition(select, x, y);
    playSound("sound://category_app/app_button_5.mp3", false);
    if(enPassant>0)
      enPassant--;
    updatePos();
    turn();
  }

//code for chess board
function checkPos(piece){//fin
  getPos(piece);
  board[i][j]=0;
}

function getPos(piece){//converts the position values on the board to corresponding index numbers for the array
  x=getXPosition(piece);
  y=getYPosition(piece);
  i=(y-30)/40;
  j=x/40;
}

function updatePos(){//updates the position of the pieces on the board
  var x;
  var y;
  var n;
  var m;
  
  
  for(n=0;n<64;n++){//hides th movement buttons
      hideElement("button"+(n+1));  
    }
    
  for(n=1;n<9;n++){//places the position of the white pawns on the board into the array
    m=getProperty("whitePawnButton"+n,"hidden");
    if(m==false){
      x=getXPosition("whitePawnButton"+n);
      y=getYPosition("whitePawnButton"+n);
      i=(y-30)/40;
      j=x/40;
      board[i][j]="whitePawnButton"+n;
      setProperty("whitePawnButton"+n,"background-color","rgba(0, 0, 0, 0)");
      promote("white",n);
    }
  }
 for(n=1;n<9;n++){//places the position of the black pawns on the board into the array
  m=getProperty("blackPawnButton"+n,"hidden");
  if(m==false){ 
    x=getXPosition("blackPawnButton"+n);
    y=getYPosition("blackPawnButton"+n);
    i=(y-30)/40;
    j=x/40;
    board[i][j]="blackPawnButton"+n;
    setProperty("blackPawnButton"+n,"background-color","rgba(0, 0, 0, 0)");
    promote("black", n);
  }
 }
 for(n=1;n<3;n++){//places the position of the white knights on the board into the array
  m=getProperty("whiteKnightButton"+n,"hidden");
  if(m==false){ 
    x=getXPosition("whiteKnightButton"+n);
    y=getYPosition("whiteKnightButton"+n);
    i=(y-30)/40;
    j=x/40;
    board[i][j]="whiteKnightButton"+n;
    setProperty("whiteKnightButton"+n,"background-color","rgba(0, 0, 0, 0)");
  }
 }
 for(n=1;n<3;n++){//places the position of the black knights on the board into the array
  m=getProperty("blackKnightButton"+n,"hidden");
  if(m==false){ 
    x=getXPosition("blackKnightButton"+n);
    y=getYPosition("blackKnightButton"+n);
    i=(y-30)/40;
    j=x/40;
    board[i][j]="blackKnightButton"+n;
    setProperty("blackKnightButton"+n,"background-color","rgba(0, 0, 0, 0)");
  }
 }
 for(n=1;n<3;n++){//places the position of the white bishops on the board into the array
  m=getProperty("whiteBishopButton"+n,"hidden");
  if(m==false){ 
    x=getXPosition("whiteBishopButton"+n);
    y=getYPosition("whiteBishopButton"+n);
    i=(y-30)/40;
    j=x/40;
    board[i][j]="whiteBishopButton"+n;
    setProperty("whiteBishopButton"+n,"background-color","rgba(0, 0, 0, 0)");
  }
 }
 for(n=1;n<3;n++){//places the position of the black bishops on the board into the array
  m=getProperty("blackBishopButton"+n,"hidden");
  if(m==false){ 
    x=getXPosition("blackBishopButton"+n);
    y=getYPosition("blackBishopButton"+n);
    i=(y-30)/40;
    j=x/40;
    board[i][j]="blackBishopButton"+n;
    setProperty("blackBishopButton"+n,"background-color","rgba(0, 0, 0, 0)");
  }
 }
 for(n=1;n<3;n++){//places the position of the white rooks on the board into the array
  m=getProperty("whiteRookButton"+n,"hidden");
  if(m==false){ 
    x=getXPosition("whiteRookButton"+n);
    y=getYPosition("whiteRookButton"+n);
    i=(y-30)/40;
    j=x/40;
    board[i][j]="whiteRookButton"+n;
    setProperty("whiteRookButton"+n,"background-color","rgba(0, 0, 0, 0)");
  }
 }
 for(n=1;n<3;n++){//places the position of the black rooks on the board into the array
  m=getProperty("blackRookButton"+n,"hidden");
  if(m==false){ 
    x=getXPosition("blackRookButton"+n);
    y=getYPosition("blackRookButton"+n);
    i=(y-30)/40;
    j=x/40;
    board[i][j]="blackRookButton"+n;
    setProperty("blackRookButton"+n,"background-color","rgba(0, 0, 0, 0)");
  }
 }
 m=getProperty("whiteQueenButton0","hidden");
  if(m==false){//places the position of the white queen on the board into the array
    x=getXPosition("whiteQueenButton0");
    y=getYPosition("whiteQueenButton0");
    i=(y-30)/40;
    j=x/40;
    board[i][j]="whiteQueenButton0";
    setProperty("whiteQueenButton0","background-color","rgba(0, 0, 0, 0)");
  }
  m=getProperty("blackQueenButton0","hidden");
  if(m==false){ //places the position of the black queen on the board into the array
    x=getXPosition("blackQueenButton0");
    y=getYPosition("blackQueenButton0");
    i=(y-30)/40;
    j=x/40;
    board[i][j]="blackQueenButton0";
    setProperty("blackQueenButton0","background-color","rgba(0, 0, 0, 0)");
  }
  m=getProperty("whiteKingButton","hidden");
  if(m==false){ //places the position of the white king on the board into the array
    x=getXPosition("whiteKingButton");
    y=getYPosition("whiteKingButton");
    i=(y-30)/40;
    j=x/40;
    board[i][j]="whiteKingButton";
    setProperty("whiteKingButton","background-color","rgba(0, 0, 0, 0)");
  }
  m=getProperty("blackKingButton","hidden");
  if(m==false){ //places the position of the black king on the board into the array
    x=getXPosition("blackKingButton");
    y=getYPosition("blackKingButton");
    i=(y-30)/40;
    j=x/40;
    board[i][j]="blackKingButton";
    setProperty("blackKingButton","background-color","rgba(0, 0, 0, 0)");
  }
  hideElement("castleButtonK");
  hideElement("castleButtonQ");
}

function capture(piece){//moves the selected piece and captures the piece given as an arguement
  
  playSound("sound://category_app/app_button_6.mp3", false);
  
  checkPos(piece);
  hideElement(piece);
  setPosition(select, x, y);
  updatePos();
  turn();
}

function checkColor(piece){//checks the cholor of a piece
  if(piece==0){
    return 0;
  } else if(piece>"black" && piece<="blackRookButton2"){
    return "black";
  } else {
    return "white";
  }
}

function countPiece(color){//tracks the pieces

  var ID;
  var pawn=0;
  var knight=0;
  var bishop=0;
  var rook=0;
  var queen=0;
  
  var queenImage;
  var rookImage;
  var bishopImage;
  var knightImage;
  var pawnImage;
  
  if(color=="white"){//determines the color of the piece
    pawnImage="https://www.clker.com/cliparts/M/T/n/x/F/K/white-pawn-hi.png";
    queenImage="kindpng_2581815.png";
    rookImage="chess_piece_white_rook_T.png";
    bishopImage="kindpng_1564822.png";
    knightImage="kindpng_223299.png";
  } else {
    pawnImage="https://www.clker.com/cliparts/m/E/7/l/G/n/black-pawn-hi.png";
    queenImage="kindpng_971447.png";
    rookImage="chess_piece_black_rook_T.png";
    bishopImage="kindpng_223452.png";
    knightImage="kindpng_1127048.png";
  }
  ID=color+"PawnButton"+n;
  for(n=1; n<9; n++){
    ID=color+"PawnButton"+n;
    if(getProperty(ID, "hidden")==true){//checks if the piece has been captured
      if(getProperty(ID, "image")==queenImage){//determines if the pawn was promoted and what it was promoted to
        queen++;
      } else if(getProperty(ID, "image")==rookImage){
        rook++;
      } else if(getProperty(ID, "image")==bishopImage){
        bishop++;
      } else if(getProperty(ID, "image")==knightImage){
        knight++;
      } else {
        pawn++;
      }
    }
  }
  for(n=1; n<3; n++){//checks if and which knights were captured
    ID=color+"KnightButton"+n;
    if(getProperty(ID, "hidden")==true){
     knight++;
    }
  }
  for(n=1; n<3; n++){//checks if and which bishops were captured
    ID=color+"BishopButton"+n;
    if(getProperty(ID, "hidden")==true){
     bishop++;
    }
  }
  for(n=1; n<3; n++){//checks if and which rooks were captured
    ID=color+"RookButton"+n;
    if(getProperty(ID, "hidden")==true){
     rook++;
    }
  }
  ID=color+"QueenButton0";//checks if the queen was captured
  if(getProperty(ID, "hidden")==true){
     queen++;
    }
  
  n=0;
  while(n<pawn){//places the captured pawn below the board
    setImageURL(color+"Image"+(n+1), pawnImage);
    showElement(color+"Image"+(n+1));
    n++;
  }
  while(n-pawn<knight){//places the captured knight below the board
    setImageURL(color+"Image"+(n+1), knightImage);
    showElement(color+"Image"+(n+1));
    n++;
  }
  while(n-(pawn+knight)<bishop){//places the captured bishop below the board
    setImageURL(color+"Image"+(n+1), bishopImage);
    showElement(color+"Image"+(n+1));
    n++;
  }
  while(n-(pawn+knight+bishop)<rook){//places the captured rook below the board
    setImageURL(color+"Image"+(n+1), rookImage);
    showElement(color+"Image"+(n+1));
    n++;
  }
  while(n-(pawn+knight+bishop+rook)<queen){//places the captured queen below the board
    setImageURL(color+"Image"+(n+1), queenImage);
    showElement(color+"Image"+(n+1));
    n++;
  }
}

function promote(color, n){//promotes the pawn when it reaches the opposite end
  n--;
  var end;
  
  if(color=="white"){//checks the color of the pawn
    end=0;
    m=n;
  } else {
    end=7;
    m=n+8;
  }
  if(i==end && promotion[m]==0){//checks if the pawn is at the end of the board
    promotion[m]=1;
    if(j!=0 && j!=7){//determines the positioning of pawn
      count=3;
      checkPos(select);
      setPosition(color+"QueenButton", x-20, y-20);
      setPosition(color+"RookButton", x+20, y-20);
      setPosition(color+"BishopButton", x-20, y+20);
      setPosition(color+"KnightButton", x+20, y+20);
      showElement(color+"QueenButton");
      showElement(color+"RookButton");
      showElement(color+"BishopButton");
      showElement(color+"KnightButton");
    } else if(j==7){
      count=3;
      checkPos(select);
      setPosition(color+"QueenButton", x-40, y-20);
      setPosition(color+"RookButton", x, y-20);
      setPosition(color+"BishopButton", x-40, y+20);
      setPosition(color+"KnightButton", x, y+20);
      showElement(color+"QueenButton");
      showElement(color+"RookButton");
      showElement(color+"BishopButton");
      showElement(color+"KnightButton");
    } else if(j==0){
      count=3;
      checkPos(select);
      setPosition(color+"QueenButton", x, y-20);
      setPosition(color+"RookButton", x+40, y-20);
      setPosition(color+"BishopButton", x, y+20);
      setPosition(color+"KnightButton", x+40, y+20);
      showElement(color+"QueenButton");
      showElement(color+"RookButton");
      showElement(color+"BishopButton");
      showElement(color+"KnightButton");
    }
  }
}
