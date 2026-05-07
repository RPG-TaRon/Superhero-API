// calculateWinner compares the powerstats of two heroes and determines the winner.
export function calculateWinner(hero1, hero2) {
  if (!hero1 || !hero2) {
    return null;
  }

  const stats = [
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
    "combat",
  ];

  const sumStats = (hero) =>
    stats.reduce(
      (total, stat) => total + Number(hero?.powerstats?.[stat] ?? 0),
      0
    );

  const score1 = sumStats(hero1);
  const score2 = sumStats(hero2);

  if (score1 > score2) {
    return hero1;
  }

  if (score2 > score1) {
    return hero2;
  }

  return null;
}