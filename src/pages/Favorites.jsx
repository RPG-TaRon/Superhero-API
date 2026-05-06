import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroDetails from "../components/HeroDetails";

function Favorites({ favorites, onRemoveFromFavorites, onAddToBattle }) {
  const [selectedHero, setSelectedHero] = useState(null);
  const navigate = useNavigate();

  function handleSendToBattle(hero) {
    onAddToBattle(hero);
    navigate("/battle");
  }

  return (
    <main className="app">
      <h1>Favorites</h1>

      <p className="intro-text">
        Your saved characters live here.
      </p>

      <HeroDetails
        hero={selectedHero}
        onClose={() => setSelectedHero(null)}
        onAddToBattle={handleSendToBattle}
        onAddToFavorites={() => {}}
      />

      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <section className="hero-grid">
          {favorites.map((hero) => (
            <div className="favorite-card-wrapper" key={hero.id}>
              <button
                className="hero-card"
                onClick={() => setSelectedHero(hero)}
              >
                <img src={hero.images.sm} alt={hero.name} />

                <div className="hero-card-content">
                  <h3>{hero.name}</h3>
                  <p>{hero.biography.fullName || "Unknown Identity"}</p>

                  <span className="hero-card-tag">
                    {hero.biography.publisher || "Unknown Publisher"}
                  </span>
                </div>
              </button>

              <button
                className="remove-favorite-btn"
                onClick={() => onRemoveFromFavorites(hero.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default Favorites;