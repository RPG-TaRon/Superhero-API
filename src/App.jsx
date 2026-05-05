import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHeroes() {
      try {
        const response = await fetch(
          "https://akabab.github.io/superhero-api/api/all.json"
        );

        const data = await response.json();
        setHeroes(data);
      } catch (error) {
        console.error("Failed to fetch heroes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchHeroes();
  }, []);

  return (
    <main className="app">
      <h1>Superhero Battle Arena</h1>

      {loading ? (
        <p>Loading heroes...</p>
      ) : (
        <p>{heroes.length} heroes loaded and ready for battle.</p>
      )}
    </main>
  );
}

export default App;