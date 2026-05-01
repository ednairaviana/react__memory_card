import { useEffect, useState } from "react";
import Cards from "./components/Cards";

function App() {
  const [characters, setCharacters] = useState("");

  useEffect(() => {
    fetchData();

    async function fetchData() {
      try {
        const search = "https://rickandmortyapi.com/api/character";
        const res = await fetch(search);
        const data = await res.json();
        console.log(data);
        setCharacters(data.results);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <section className="main-section">
      <div className="main-container">
        <Cards characters={characters} />
      </div>
    </section>
  );
}

export default App;
