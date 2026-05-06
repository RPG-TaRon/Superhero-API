import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Battle from "./pages/Battle";

function App() {
  const [fighterOne, setFighterOne] = useState(null);
  const [fighterTwo, setFighterTwo] = useState(null);

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