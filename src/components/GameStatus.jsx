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
      <div className="flex flex-col gap-5 justify-center items-center mb-15">
        <h1 className="text-center">
          {status === "over" ? "Game Over" : "Game Win"}
        </h1>
        <span className="mt-8">Your Score: {score.current}</span>
        <button className="button" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div>
        <h2 className="subt">All CLicked Cards</h2>
        <Cards characters={clickedCards} isClickable={false} />
      </div>

      {notClickedCards.length !== 0 ? (
        <div>
          <h2 className="subt">Missing Cards</h2>
          <Cards characters={notClickedCards} isClickable={false} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default GameStatus;
