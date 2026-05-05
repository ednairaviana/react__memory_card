import "../css/cards.css";

function Cards({ characters, handleSetClickedCharList, isClickable }) {
  return (
    <ul
      className={`cards_list gap-4 w-full ${!isClickable ? "not-clickable" : ""}`}
    >
      {characters
        ? characters.map((character, index) => (
            <li
              style={character.wasClicked && { color: "green" }}
              onClick={() => {
                if (isClickable) {
                  handleSetClickedCharList(character);
                }
              }}
              key={index}
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
