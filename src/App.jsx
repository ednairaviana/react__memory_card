import useMemoryCard from "./hooks/useMemoryCard";
import GameOver from "./components/GameOver";
import Cards from "./components/Cards";

function App() {
  const {
    isGameOver,
    score,
    cachedCharacterList,
    clickedCharList,
    resetGame,
    shuffleCards,
    handleSetClickedCharList,
  } = useMemoryCard();

  return (
    <section className="main-section">
      <div className="main-container">
        {isGameOver ? (
          <GameOver
            score={score}
            resetGame={resetGame}
            allCards={cachedCharacterList}
            clickedCards={clickedCharList}
          />
        ) : (
          <>
            <header>
              <ul>
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

export default App;
