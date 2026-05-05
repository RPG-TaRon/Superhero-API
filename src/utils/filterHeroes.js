export function filterHeroes(heroes, query) {
  return heroes.filter(hero =>
    hero.name.toLowerCase().includes(query.toLowerCase())
  );
}