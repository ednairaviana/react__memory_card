import { useState, useEffect } from "react";

function useMemoryCard() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [cachedCharacterList, setCachedCharacterList] = useState("");
  const [score, setScore] = useState({ current: 0, best: 0 });
  const [clickedCharList, setClickedCharsList] = useState([]);

  function getIds(queryInfo) {
    const ids = [];

    for (let i = 0; i <= queryInfo.limit; i++) {
      const min = 1;
      const max = queryInfo.count;
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      while (ids.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      }

      ids.push(randomNumber);
    }

    return ids;
  }

  function resetGame() {
    setIsGameOver(false);
    setScore({ ...score, current: 0 });
    setClickedCharsList([]);
  }

  function shuffleCards() {
    if (cachedCharacterList === "") return;
    const randomIds = getIds({
      count: cachedCharacterList.length - 1,
      limit: 7,
    });
    const randomList = [];

    randomIds.forEach((id) => {
      randomList.push(cachedCharacterList[id]);
    });

    console.log(randomIds);
    console.log(randomList);

    console.log(clickedCharList);

    return randomList;
  }

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
  }

  useEffect(() => {
    let ignore = false;
    if (ignore) return;

    handleSetCachedList();

    return () => {
      ignore = true;
    };

    async function handleSetCachedList() {
      const ids = getIds({ count: 820, limit: 80 }).join(",");
      const search = `https://rickandmortyapi.com/api/character/${ids}`;

      try {
        const res = await fetch(search);
        const data = await res.json();
        console.log(data);

        if (ignore) return;
        setCachedCharacterList(data);
      } catch (error) {
        return error;
      }
    }
  }, []);

  return {
    isGameOver,
    score,
    cachedCharacterList,
    clickedCharList,
    resetGame,
    shuffleCards,
    handleSetClickedCharList,
  };
}

export default useMemoryCard;
