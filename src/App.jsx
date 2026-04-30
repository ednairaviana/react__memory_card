import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetchData();

    async function fetchData() {
      try {
        const search = "https://api.thecatapi.com/v1/images/search?limit=10";
        const res = await fetch(search);
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return <></>;
}

export default App;
