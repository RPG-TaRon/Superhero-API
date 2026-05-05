import HeroCard from "./HeroCard";

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