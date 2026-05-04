import MainButton from "./ui/MainButton";
import Cards from "./Cards";

function GameOver({ score, resetGame, clickedCards }) {
  return (
    <div>
      <div>Game Over!</div>
      <div>Your Score: {score.current}</div>
      <div>Show list of clicked cards</div>

      <div>
        <h2>All CLicked Cards</h2>
        <Cards characters={clickedCards} isClickable={false} />
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default GameOver;
