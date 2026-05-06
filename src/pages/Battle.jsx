import BattleCard from "../components/BattleCard";
import BattleResult from "../components/BattleResult";
import { calculateWinner } from "../utils/calculateWinner";

function Battle({ fighterOne, fighterTwo, setFighterOne, setFighterTwo }) {
  const battleResult =
    fighterOne && fighterTwo ? calculateWinner(fighterOne, fighterTwo) : null;

  return (
    <main className="app">
      <h1>Battle Arena</h1>

      <p className="intro-text">
        Add two characters from the archive and let the powerstats decide the
        winner.
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

      <BattleResult
        fighterOne={fighterOne}
        fighterTwo={fighterTwo}
        battleResult={battleResult}
      />
    </main>
  );
}

export default Battle;
