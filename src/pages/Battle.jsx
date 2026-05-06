import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BattleCard from "../components/BattleCard";
import BattleResult from "../components/BattleResult";
import { calculateWinner } from "../utils/calculateWinner";

function Battle({ fighterOne, fighterTwo, setFighterOne, setFighterTwo }) {
  const [fightStarted, setFightStarted] = useState(false);

  const navigate = useNavigate();

  const battleResult =
    fighterOne && fighterTwo ? calculateWinner(fighterOne, fighterTwo) : null;

  function handleFight() {
    if (fighterOne && fighterTwo) {
      setFightStarted(true);
    }
  }

  function handleClearFighterOne() {
    setFighterOne(null);
    setFightStarted(false);
  }

  function handleClearFighterTwo() {
    setFighterTwo(null);
    setFightStarted(false);
  }

  return (
    <main className="app">
      <h1>Battle Arena</h1>

      <p className="intro-text">
        Add two characters from the archive, then press Fight to decide the
        winner.
      </p>

      <button className="add-character-btn" onClick={() => navigate("/")}>
        Add Character
      </button>

      <section className="battle-section">
        <BattleCard
          label="Fighter 1"
          hero={fighterOne}
          onClear={handleClearFighterOne}
          isWinner={fightStarted && battleResult?.id === fighterOne?.id}
        />

        <div className="vs-divider">
          <span>VS</span>
        </div>

        <BattleCard
          label="Fighter 2"
          hero={fighterTwo}
          onClear={handleClearFighterTwo}
          isWinner={fightStarted && battleResult?.id === fighterTwo?.id}
        />
      </section>

      <button
        className="fight-btn"
        onClick={handleFight}
        disabled={!fighterOne || !fighterTwo}
      >
        Fight
      </button>

      {fightStarted && (
        <BattleResult
          fighterOne={fighterOne}
          fighterTwo={fighterTwo}
          battleResult={battleResult}
        />
      )}
    </main>
  );
}

export default Battle;