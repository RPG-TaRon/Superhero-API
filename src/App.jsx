import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import HeroList from "./components/HeroList";
import BattleCard from "./components/BattleCard";
import "./App.css";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [fighterOne, setFighterOne] = useState(null);
  const [fighterTwo, setFighterTwo] = useState(null);

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

  function handleSelectHero(hero) {
    if (!fighterOne) {
      setFighterOne(hero);
    } else if (!fighterTwo) {
      setFighterTwo(hero);
    } else {
      setFighterOne(hero);
      setFighterTwo(null);
    }
  }

  return (
    <>
      <Navbar />

      <main className="app">
        <h1>Superhero Battle Arena</h1>

        <section className="battle-section">
          <BattleCard
            label="Fighter 1"
            hero={fighterOne}
            onClear={() => setFighterOne(null)}
          />

          <BattleCard
            label="Fighter 2"
            hero={fighterTwo}
            onClear={() => setFighterTwo(null)}
          />
        </section>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {loading ? (
          <p>Loading heroes...</p>
        ) : (
          <>
            <p>{filteredHeroes.length} heroes found.</p>
            <HeroList
              heroes={filteredHeroes.slice(0, 20)}
              onSelectHero={handleSelectHero}
            />
          </>
        )}
      </main>
    </>
  );
}

export default App;