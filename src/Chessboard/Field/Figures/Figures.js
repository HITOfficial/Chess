function figures(props) {
    switch(props.figure) {
        case 'black-pawn': return "♟"
        case 'white-pawn': return "♙"
        case 'black-rook': return "♜"
        case 'white-rook': return "♖"
        case 'black-knight': return "♞"
        case 'white-knight': return "♘"
        case 'black-bishop': return "♝"
        case 'white-bishop': return "♗"
        case 'black-queen': return "♛"
        case 'white-queen': return "♕"
        case 'black-king': return "♚"
        case 'white-king': return "♔"
        default:
            return ""
    } 
}


export default figures