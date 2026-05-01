import { useEffect, useState } from "react";
import Cards from "./components/Cards";

function App() {
  const charcaterLimit = 8;
  const [isGameOver, setIsGameOver] = useState(false);
  const [charactersList, setCharactersList] = useState("");
  const [score, setScore] = useState("");
  const [clickedCharList, setClickedCharsList] = useState([]);

  function handleSetClickedCharList(characterId) {
    if (clickedCharList.includes(characterId)) {
      setIsGameOver(true);
      console.log("You lost");
      return;
    }

    const updatedList = [...clickedCharList, characterId];
    const updatedScore = updatedList.length;
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
