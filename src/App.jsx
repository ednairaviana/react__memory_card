import useMemoryCard from "./hooks/useMemoryCard";
import GameStatus from "./components/GameStatus";
import Cards from "./components/Cards";
import FetchStatus from "./components/FetchStatus";

function App() {
  const {
    fetchStatus,
    gameStatus,
    score,
    cachedCharacterList,
    clickedCharList,
    resetGame,
    shuffleCards,
    handleSetClickedCharList,
  } = useMemoryCard();

  console.log(gameStatus);

  if (fetchStatus !== "success") {
    return (
      <section className="main-section">
        <div className="main-container">
          <FetchStatus status={fetchStatus} resetGame={resetGame} />
        </div>
      </section>
    );
  } else {
    return (
      <section className="main-section">
        <div className="main-container">
          {gameStatus !== null ? (
            <GameStatus
              score={score}
              resetGame={resetGame}
              clickedCards={clickedCharList}
              notClickedCards={cachedCharacterList}
              status={gameStatus}
            />
          ) : (
            <>
              <header>
                <ul className="flex gap-4 justify-between">
                  <li>Current Score: {score.current}</li>
                  <li>Best Score: {score.best}</li>
                </ul>
              </header>
              <Cards
                characters={shuffleCards()}
                handleSetClickedCharList={handleSetClickedCharList}
                isClickable={true}
              />
            </>
          )}
        </div>
      </section>
    );
  }
}

export default App;
