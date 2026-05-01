import "../css/cards.css";

function Cards({ characters, handleSetClickedCharList }) {
  return (
    <ul className="cards_list grid grid-cols-4 gap-4 w-full">
      {characters
        ? characters.map((character) => (
            <li
              onClick={() => {
                handleSetClickedCharList(character.id);
              }}
              key={character.id}
            >
              <img
                className="card"
                src={character.image}
                alt={character.name}
              />
              <h3>{character.name}</h3>
            </li>
          ))
        : ""}
    </ul>
  );
}

export default Cards;
