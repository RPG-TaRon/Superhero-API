import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Battle from "./pages/Battle";
import Favorites from "./pages/Favorites";

function App() {
  const [fighterOne, setFighterOne] = useState(null);
  const [fighterTwo, setFighterTwo] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [favoriteMessage, setFavoriteMessage] = useState("");

  function handleAddToBattle(hero) {
    if (!fighterOne) {
      setFighterOne(hero);
    } else if (!fighterTwo) {
      setFighterTwo(hero);
    } else {
      setFighterOne(hero);
      setFighterTwo(null);
    }
  }

  function handleAddToFavorites(hero) {
    const alreadyFavorited = favorites.some(
      (favorite) => favorite.id === hero.id,
    );

    if (alreadyFavorited) {
      setFavoriteMessage(`${hero.name} is already in Favorites`);
    } else {
      setFavorites([...favorites, hero]);
      setFavoriteMessage(`${hero.name} added to Favorites`);
    }

    setTimeout(() => {
      setFavoriteMessage("");
    }, 2000);
  }

  function handleRemoveFromFavorites(heroId) {
    setFavorites(favorites.filter((hero) => hero.id !== heroId));
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAddToBattle={handleAddToBattle}
              onAddToFavorites={handleAddToFavorites}
              favoriteMessage={favoriteMessage}
            />
          }
        />

        <Route
          path="/battle"
          element={
            <Battle
              fighterOne={fighterOne}
              fighterTwo={fighterTwo}
              setFighterOne={setFighterOne}
              setFighterTwo={setFighterTwo}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              onRemoveFromFavorites={handleRemoveFromFavorites}
              onAddToBattle={handleAddToBattle}
              onAddToFavorites={handleAddToFavorites}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
