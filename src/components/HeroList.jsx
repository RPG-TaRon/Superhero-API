import HeroCard from "./HeroCard";

// HeroList maps hero data into a grid of HeroCard components.
// It delegates card selection back to the Home page.
function HeroList({ heroes, onSelectHero }) {
  return (
    <section className="hero-grid">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} onSelectHero={onSelectHero} />
      ))}
    </section>
  );
}

export default HeroList;