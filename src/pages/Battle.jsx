import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BattleCard from "../components/BattleCard";
import BattleResult from "../components/BattleResult";
import { calculateWinner } from "../utils/calculateWinner";

function Battle({ fighterOne, fighterTwo, setFighterOne, setFighterTwo }) {
  const [battleStage, setBattleStage] = useState("staging");

  const navigate = useNavigate();

  const battleResult =
    fighterOne && fighterTwo ? calculateWinner(fighterOne, fighterTwo) : null;

  const showCountdown =
    battleStage === "ready" ||
    battleStage === "set" ||
    battleStage === "fight";

  const showOnlyWinner = battleStage === "result" && battleResult;

  function handleFight() {
    if (!fighterOne || !fighterTwo) return;

    setBattleStage("ready");

    setTimeout(() => {
      setBattleStage("set");
    }, 1200);

    setTimeout(() => {
      setBattleStage("fight");
    }, 2500);

    setTimeout(() => {
      setBattleStage("clash");
    }, 3000);

    setTimeout(() => {
      setBattleStage("result");
    }, 4100);
  }

  function handleResetBattle() {
    setBattleStage("staging");
  }

  function handleClearFighterOne() {
    setFighterOne(null);
    setBattleStage("staging");
  }

  function handleClearFighterTwo() {
    setFighterTwo(null);
    setBattleStage("staging");
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

      <section className={`battle-section ${battleStage}`}>
        {(!showOnlyWinner || battleResult?.id === fighterOne?.id) && (
          <BattleCard
            label="Fighter 1"
            hero={fighterOne}
            onClear={handleClearFighterOne}
            isWinner={
              battleStage === "result" && battleResult?.id === fighterOne?.id
            }
          />
        )}

        {!showOnlyWinner && (
          <div className="vs-divider">
            <span>VS</span>
          </div>
        )}

        {(!showOnlyWinner || battleResult?.id === fighterTwo?.id) && (
          <BattleCard
            label="Fighter 2"
            hero={fighterTwo}
            onClear={handleClearFighterTwo}
            isWinner={
              battleStage === "result" && battleResult?.id === fighterTwo?.id
            }
          />
        )}
      </section>

      {showCountdown && (
        <section className="countdown-display">
          <h2>
            {battleStage === "ready" && "READY..."}
            {battleStage === "set" && "SET..."}
            {battleStage === "fight" && "FIGHT!"}
          </h2>
        </section>
      )}

      {battleStage === "staging" && (
        <button
          className="fight-btn"
          onClick={handleFight}
          disabled={!fighterOne || !fighterTwo}
        >
          Fight
        </button>
      )}

      {battleStage === "result" && (
        <>
          <BattleResult
            fighterOne={fighterOne}
            fighterTwo={fighterTwo}
            battleResult={battleResult}
          />

          <button className="reset-battle-btn" onClick={handleResetBattle}>
            Reset Battle
          </button>
        </>
      )}
    </main>
  );
}

export default Battle;