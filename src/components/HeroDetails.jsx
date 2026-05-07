// HeroDetails shows the selected hero's full profile inside a modal.
// It also provides actions for battle selection or saving favorites.
function HeroDetails({ hero, onClose, onAddToBattle, onAddToFavorites }) {
  if (!hero) return null;

  // Hero details are shown in a modal so the user can stay on the same page.
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-details-btn" onClick={onClose}>
          Close
        </button>

        <div className="hero-details-layout">
          <img src={hero.images.lg} alt={hero.name} />

          <div className="hero-details-info">
            <h2>{hero.name}</h2>

            <p className="real-name">
              {hero.biography.fullName || "Unknown Identity"}
            </p>

            <div className="details-action-buttons">
              <button
                className="add-battle-btn"
                onClick={() => onAddToBattle(hero)}
              >
                Add to Battle Arena
              </button>

              <button
                className="add-favorite-btn"
                onClick={() => onAddToFavorites(hero)}
              >
                Add to Favorites
              </button>
            </div>

            <div className="details-grid">
              <div>
                <h3>Appearance</h3>
                <p>Gender: {hero.appearance.gender}</p>
                <p>Race: {hero.appearance.race || "Unknown"}</p>
                <p>Height: {hero.appearance.height.join(" / ")}</p>
                <p>Weight: {hero.appearance.weight.join(" / ")}</p>
                <p>Eye Color: {hero.appearance.eyeColor}</p>
                <p>Hair Color: {hero.appearance.hairColor}</p>
              </div>

              <div>
                <h3>Biography</h3>
                <p>Aliases: {hero.biography.aliases.join(", ")}</p>
                <p>
                  Place of Birth: {hero.biography.placeOfBirth || "Unknown"}
                </p>
                <p>First Appearance: {hero.biography.firstAppearance}</p>
                <p>Publisher: {hero.biography.publisher || "Unknown"}</p>
                <p>Alignment: {hero.biography.alignment}</p>
              </div>

              <div>
                <h3>Work</h3>
                <p>Occupation: {hero.work.occupation || "Unknown"}</p>
                <p>Base: {hero.work.base || "Unknown"}</p>
              </div>

              <div>
                <h3>Connections</h3>
                <p>Group: {hero.connections.groupAffiliation || "Unknown"}</p>
                <p>Relatives: {hero.connections.relatives || "Unknown"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroDetails;
