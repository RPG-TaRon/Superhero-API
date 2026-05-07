// BattleResult shows the final outcome of the battle.
// It only renders once both fighters are present and the match has completed.
function BattleResult({ fighterOne, fighterTwo, battleResult }) {
  if (!fighterOne || !fighterTwo) {
    return null;
  }

  if (battleResult === null) {
    return (
      <section className="battle-result">
        <h2>It's a tie!</h2>
      </section>
    );
  }

  return (
    <section className="battle-result">
      <h2>Winner: {battleResult.name}</h2>
    </section>
  );
}

export default BattleResult;