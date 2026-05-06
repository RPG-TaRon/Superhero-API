import { useState } from "react";
import BattleCard from "../components/BattleCard";
import BattleResult from "../components/BattleResult";
import calculateWinner from "../utils/calculateWinner";

function Battle() {
  const [fighterOne, setFighterOne] = useState(null);
  const [fighterTwo, setFighterTwo] = useState(null);

  const battleResult =
    fighterOne && fighterTwo ? calculateWinner(fighterOne, fighterTwo) : null;

  return (
    <main className="app">
      <h1>Battle Arena</h1>

      <p className="intro-text">
        Choose two fighters from the archive and compare their powerstats.
      </p>

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

      <p className="intro-text">
        We will connect this page to the archive picks in the next step.
      </p>
    </main>
  );
}

export default Battle;