import React from 'react'

function Player1({trigger1,increasePlayerOne,trigger2,increasePlayerTwo,resetGame,playerOne,playerTwo}) {
  return (
    <div>
        <p>player1:{trigger1}</p>
      {<button onClick={increasePlayerOne}disabled={playerOne}>player1</button>}
      <p>player2:{trigger2}</p>
      {<button onClick={increasePlayerTwo} disabled={playerTwo}>player2</button>}
    {<button onClick={resetGame}>Reset</button>}
    </div>
  )
}
export default Player1

