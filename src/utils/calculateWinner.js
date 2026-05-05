export function calculateWinner(hero1, hero2) {
  // Placeholder logic
  if (hero1.power > hero2.power) {
    return hero1;
  } else if (hero2.power > hero1.power) {
    return hero2;
  } else {
    return null; // Tie
  }
}