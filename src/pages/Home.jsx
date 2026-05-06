import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import HeroList from "../components/HeroList";
import HeroDetails from "../components/HeroDetails";

function Home({ onAddToBattle, onAddToFavorites }) {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);
  const [selectedHero, setSelectedHero] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchHeroes() {
      try {
        const response = await fetch(
          "https://akabab.github.io/superhero-api/api/all.json",
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
    hero.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const visibleHeroes = filteredHeroes.slice(0, visibleCount);

  function handleSelectHero(hero) {
    setSelectedHero(hero);
  }

  function handleSendToBattle(hero) {
    onAddToBattle(hero);
    navigate("/battle");
  }

  function handleLoadMore() {
    setVisibleCount(visibleCount + 20);
  }

  return (
    <main className="app">
      <h1>Multiverse Archive</h1>

      <p className="intro-text">
        Browse characters, inspect their records, and send your favorites into
        the Battle Arena.
      </p>

      <HeroDetails
        hero={selectedHero}
        onClose={() => setSelectedHero(null)}
        onAddToBattle={handleSendToBattle}
        onAddToFavorites={onAddToFavorites}
      />

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {loading ? (
        <p>Loading characters...</p>
      ) : (
        <>
          <p>
            Showing {visibleHeroes.length} of {filteredHeroes.length}{" "}
            characters.
          </p>

          <HeroList heroes={visibleHeroes} onSelectHero={handleSelectHero} />

          {visibleCount < filteredHeroes.length && (
            <button className="load-more-btn" onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </>
      )}
    </main>
  );
}

export default Home;
