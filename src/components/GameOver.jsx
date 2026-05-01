import MainButton from "./ui/MainButton";

function GameOver({ score, resetGame }) {
  return (
    <div>
      <div>Game Over!</div>
      <div>Your Score: {score.current}</div>
      <div>Show list of clicked cards</div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default GameOver;
