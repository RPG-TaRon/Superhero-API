import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import HeroList from "./components/HeroList";
import "./App.css";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main className="app">
        <h1>Superhero Battle Arena</h1>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {loading ? (
          <p>Loading heroes...</p>
        ) : (
          <>
            <p>{filteredHeroes.length} heroes found.</p>
            <HeroList heroes={filteredHeroes.slice(0, 20)} />
          </>
        )}
      </main>
    </>
  );
}

export default App;