//Log all returned parameters to the console in a neat and formatted fashion

// 1. **x** - the starting x coordinate of the chess board
//     2. **y** - the starting y coordinate of the chess board
//     3. **n** - The size of the chess board


function chessKnight(x,y,size) {
    let board = [];
    for(i=0;i<size;i++) {
        for(j=0; j<size; j++) {
            board.push([i,j]);
        }
    }

    if(!board.includes(x, y)) {
        return [];
    }
    else {
        getMoves(x,y,size);
    }
}

function getMoves(x,y,size) {

    let possibleMoves = [];

    let xMoves = [x+2, x-2, x+1, x-1].filter(function(item) {
        return(item>0 && item<n);
    });
    let yMoves = [y+2, y-2, y+1, y-1].filter(function(item) {
        return(item>0 && item<n);
    });

    for(i=0; i<xMoves.length; i++) {
        for(j=0; j<yMoves.length; j++) {

            if(Math.abs(x-xMoves[i]) + (y-yMoves[j]) === 3 ){
                if(!possibleMoves.includes([xMoves[i], yMoves[j]])) {
                    possibleMoves.push([xMoves[i], yMoves[j]]);
                }
            }
        
        }
    }

    console.log('starting position', x,y);
    console.log('size of board', size);

    console.log("no of moves possible", possibleMoves.length);
    console.log('Possible moves', possibleMoves);

    return possibleMoves;
}

