import MainButton from "./ui/MainButton";
import Cards from "./Cards";

function GameStatus({
  score,
  resetGame,
  clickedCards,
  notClickedCards,
  status,
}) {
  return (
    <div>
      <div>{status === "over" ? "Game Over" : "Game Win"}</div>
      <div>Your Score: {score.current}</div>
      <div>Show list of clicked cards</div>

      <div>
        <h2>All CLicked Cards</h2>
        <Cards characters={clickedCards} isClickable={false} />
      </div>
      <button onClick={resetGame}>Reset Game</button>

      {notClickedCards.length !== 0 ? (
        <div>
          <h2>Missing Cards</h2>
          <Cards characters={notClickedCards} isClickable={false} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default GameStatus;
