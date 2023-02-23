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