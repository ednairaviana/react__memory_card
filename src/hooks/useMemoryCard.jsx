import { useState, useEffect } from "react";

function useMemoryCard() {
  const [fetchNewCards, setFetchNewCards] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [cachedCharacterList, setCachedCharacterList] = useState([]);
  const [score, setScore] = useState({ current: 0, best: 0 });
  const [clickedCharList, setClickedCharsList] = useState([]);

  function getIds(min = 1, max = 820, limit = 16) {
    const ids = [];

    for (let i = 0; i < limit; i++) {
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
    setFetchNewCards(true);
  }

  function shuffleCards() {
    if (cachedCharacterList.length === 0) return;
    const maxCardsDisplay = 8;
    const clickedCards = getClickedCards();
    const cachedCards = getCachedCards();
    const mergedCards = mergeRandom(clickedCards, cachedCards);

    console.log(cachedCharacterList);

    return mergedCards;

    function mergeRandom(arr1, arr2) {
      const merged = [...arr1, ...arr2];

      for (let i = merged.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [merged[i], merged[j]] = [merged[j], merged[i]];
      }

      return merged;
    }

    function getCachedCards() {
      if (cachedCharacterList.length === 0) return;
      const maxLimit =
        maxCardsDisplay - clickedCards.length < cachedCharacterList.length
          ? maxCardsDisplay - clickedCards.length
          : cachedCharacterList.length;

      return getRandomCards(maxLimit, cachedCharacterList);
    }

    function getRandomCards(limit, array) {
      if (array.length === 0) return;
      const randomIds = getIds(0, array.length - 1, limit);
      const randomCards = [];

      randomIds.forEach((id) => {
        randomCards.push(array[id]);
      });

      return randomCards;
    }

    function getClickedCards() {
      if (clickedCharList.length === 0) return [];
      const minLimit =
        cachedCharacterList.length < maxCardsDisplay
          ? maxCardsDisplay - cachedCharacterList.length
          : 0;
      const maxLimit = clickedCharList.length < 8 ? clickedCharList.length : 7;
      const randomLimit =
        Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;

      return getRandomCards(randomLimit, clickedCharList);
    }
  }

  function handleSetClickedCharList(character) {
    if (clickedCharList.includes(character)) {
      setIsGameOver(true);
      return;
    }

    const updatedList = [
      ...clickedCharList,
      { ...character, wasClicked: true },
    ];
    const currentScore = updatedList.length;
    const updatedScore =
      score.best > currentScore
        ? { ...score, current: currentScore }
        : { current: currentScore, best: currentScore };

    setCachedCharacterList(
      cachedCharacterList.filter((char) => char.id !== character.id),
    );
    setClickedCharsList(updatedList);
    setScore(updatedScore);
  }

  useEffect(() => {
    let ignore = false;
    if (!fetchNewCards) return;

    handleSetCachedList();

    return () => {
      ignore = true;
    };

    async function handleSetCachedList() {
      const ids = getIds().join(",");
      const search = `https://rickandmortyapi.com/api/character/${ids}`;
      setCachedCharacterList([]);

      try {
        const res = await fetch(search);
        const data = await res.json();
        console.log(data);

        if (ignore) return;
        setCachedCharacterList(data);
        setFetchNewCards(false);
      } catch (error) {
        return error;
      }
    }
  }, [fetchNewCards]);

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
