import BattleCard from "../components/BattleCard";
import BattleResult from "../components/BattleResult";
import { calculateWinner } from "../utils/calculateWinner";
import { useNavigate } from "react-router-dom";

function Battle({ fighterOne, fighterTwo, setFighterOne, setFighterTwo }) {
  const navigate = useNavigate();

  const battleResult =
    fighterOne && fighterTwo ? calculateWinner(fighterOne, fighterTwo) : null;
  return (
    <main className="app">
      <h1>Battle Arena</h1>

      <p className="intro-text">
        Add two characters from the archive and let the powerstats decide the
        winner.
      </p>
      <button className="add-character-btn" onClick={() => navigate("/")}>
        Add Character
      </button>

      <section className="battle-section">
        <BattleCard
          label="Fighter 1"
          hero={fighterOne}
          onClear={() => setFighterOne(null)}
          isWinner={battleResult?.id === fighterOne?.id}
        />

        <div className="vs-divider">
          <span>VS</span>
        </div>

        <BattleCard
          label="Fighter 2"
          hero={fighterTwo}
          onClear={() => setFighterTwo(null)}
          isWinner={battleResult?.id === fighterTwo?.id}
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
