function Favorites({ favorites }) {
  return (
    <main className="app">
      <h1>Favorites</h1>

      <p className="intro-text">
        Your saved characters live here.
      </p>

      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <section className="hero-grid">
          {favorites.map((hero) => (
            <div className="hero-card" key={hero.id}>
              <img src={hero.images.sm} alt={hero.name} />

              <div className="hero-card-content">
                <h3>{hero.name}</h3>
                <p>{hero.biography.fullName || "Unknown Identity"}</p>

                <span className="hero-card-tag">
                  {hero.biography.publisher || "Unknown Publisher"}
                </span>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default Favorites;