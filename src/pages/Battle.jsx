import { useState } from "react";
import BattleCard from "../components/BattleCard";
import BattleResult from "../components/BattleResult";
import calculateWinner from "../utils/calculateWinner";

function Battle({ selectedHeroes, onClearFighters }) {
  const [fighterOne, setFighterOne] = useState(null);
  const [fighterTwo, setFighterTwo] = useState(null);

  function handleAddFighter(hero) {
    if (!fighterOne) {
      setFighterOne(hero);
    } else if (!fighterTwo) {
      setFighterTwo(hero);
    } else {
      setFighterOne(hero);
      setFighterTwo(null);
    }
  }

  const battleResult =
    fighterOne && fighterTwo
      ? calculateWinner(fighterOne, fighterTwo)
      : null;

  return (
    <main className="app">
      <h1>Battle Arena</h1>

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

      <BattleResult battleResult={battleResult} />

      <div className="battle-instructions">
        <p>Select heroes from the archive to send them into battle.</p>
      </div>
    </main>
  );
}

export default Battle;