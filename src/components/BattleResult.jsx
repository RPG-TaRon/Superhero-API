function BattleResult({ battleResult }) {
  if (!battleResult) {
    return null;
  }

  return (
    <section className="battle-result">
      <h2>Battle Result</h2>

      {battleResult.winner ? (
        <>
          <h3>Winner: {battleResult.winner.name}</h3>
          <p>{battleResult.resultText}</p>
          <p>
            Final Score: {battleResult.winnerScore} to{" "}
            {battleResult.loserScore}
          </p>
        </>
      ) : (
        <>
          <h3>Draw</h3>
          <p>{battleResult.resultText}</p>
          <p>
            Final Score: {battleResult.winnerScore} to{" "}
            {battleResult.loserScore}
          </p>
        </>
      )}
    </section>
  );
}

export default BattleResult;