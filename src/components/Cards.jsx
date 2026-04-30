import "../css/cards.css";

function Cards({ characters }) {
  return (
    <ul className="cards_list grid grid-cols-4 gap-4 w-full">
      {characters.map((character) => {
        <li>
          <img
            className="card"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt=""
          />
          <h3>Rick Sanchez</h3>
        </li>;
      })}
    </ul>
  );
}

export default Cards;
