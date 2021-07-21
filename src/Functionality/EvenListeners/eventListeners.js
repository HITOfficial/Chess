function updateMove() {

}


function eventListeners(board) {
    board.forEach((element, index) => {
        element.addEvenListener('click', updateMove)
    });
}