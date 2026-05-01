import { useEffect, useState } from "react";
import Cards from "./components/Cards";

function App() {
  const charcaterLimit = 8;
  const [isGameOver, setIsGameOver] = useState(false);
  const [charactersList, setCharactersList] = useState("");
  const [score, setScore] = useState({ current: 0, best: 0 });
  const [clickedCharList, setClickedCharsList] = useState([]);

  function handleSetClickedCharList(characterId) {
    if (clickedCharList.includes(characterId)) {
      setIsGameOver(true);
      console.log("You lost");
      return;
    }

    const updatedList = [...clickedCharList, characterId];
    const currentScore = updatedList.length;
    const updatedScore =
      score.best > currentScore
        ? { ...score, current: currentScore }
        : { current: currentScore, best: currentScore };
    setClickedCharsList(updatedList);
    setScore(updatedScore);

    console.log(updatedScore, updatedList);
  }

  function handleSetCharactersList(list) {
    setCharactersList(list.slice(0, charcaterLimit));
  }

  useEffect(() => {
    fetchData();

    async function fetchData() {
      try {
        const search = "https://rickandmortyapi.com/api/character";
        const res = await fetch(search);
        const data = await res.json();
        console.log(data);
        handleSetCharactersList(data.results);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <section className="main-section">
      <div className="main-container">
        <header>
          <ul>
            <li>Current Score: {score.current}</li>
            <li>Best Score: {score.best}</li>
          </ul>
        </header>
        {isGameOver ? (
          "you lost"
        ) : (
          <Cards
            characters={charactersList}
            handleSetClickedCharList={handleSetClickedCharList}
          />
        )}
      </div>
    </section>
  );
}

export default App;
