import BuildChessboard from '../Chessboard/BuildChessboard'
import NewChessboardData from '../Chessboard/NewChessboardData/newChessboardData'




function functionality(flag = false) {
    board = NewChessboardData()
    // first render
    if (flag === false) {
        flag = true
        return (
            <BuildChessboard></BuildChessboard>
        )
    }
}


export default functionality