import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Battle from "./pages/Battle";

function App() {
  const [fighterOne, setFighterOne] = useState(null);
  const [fighterTwo, setFighterTwo] = useState(null);
  const [favorites, setFavorites] = useState([]);

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
    (favorite) => favorite.id === hero.id
  );

  if (!alreadyFavorited) {
    setFavorites([...favorites, hero]);
  }
}

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home onAddToBattle={handleAddToBattle} />}
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
      </Routes>
    </>
  );
}

export default App;