import HeroCard from "./HeroCard";

function HeroList({ heroes }) {
  return (
    <section className="hero-grid">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </section>
  );
}

export default HeroList;