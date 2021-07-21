import React, { Component } from 'react';
import BuildChessboard from './Chessboard/BuildChessboard';
// import Test from './Chessboard/BuildChessboard'

class App extends Component {
  render() {
    return(
      <div>
      <BuildChessboard></BuildChessboard>
      </div>
    )
  }
}


export default App;
