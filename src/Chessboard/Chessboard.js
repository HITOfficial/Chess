import NewChessBoard from './NewChessboardData/newChessboardData'

function move()



function updateMove(data) {
    document.getElementsByClassName()
}


function moveFigure (chessboard){
    chessboard.forEach((fieldData, index,array) => {
        array[index].addEvenListener("click", move(fieldData, index))
    });
}