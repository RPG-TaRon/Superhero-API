function BattleResult({ battleResult }) {
  if (!battleResult) {
    return null;
  }

  return (
    <section className="battle-result">
      <h2>Winner: {battleResult.name}</h2>
    </section>
  );
}

export default BattleResult;