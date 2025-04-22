// Show list of favorited pet names
function FavoritesList({ favorites }) {
    return (
      <div style={{ marginTop: "2rem" }}>
        <h2>⭐ Favorite Names</h2>
        {favorites.length === 0 ? (
          <p>No favorites yet!</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {favorites.map((name, index) => (
              <li key={index} style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default FavoritesList;
  