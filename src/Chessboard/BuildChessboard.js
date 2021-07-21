import React from 'react';
import Field from './Field/Field'
import './Chessboard.css'
import NewChessboardData from './NewChessboardData/newChessboardData'

function mapFields(chessBoard) {
    return (chessBoard.map(element => (
        <Field fieldNumber={element.fieldNumber} free={element.free} player={element.player} figure={element.figure}>TU</Field>
    )))
}


function buildChessboard(chessboard) {
    // taking data of starting positions of figures
    return (
        <div className="container">{mapFields(chessboard)}</div>

    );
}


export default buildChessboard