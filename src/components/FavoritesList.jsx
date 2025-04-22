// Show list of favorited pet names
function FavoritesList({ favorites }) {
  // Create a container with some margin at the top
  return (
    <div style={{ marginTop: "2rem" }}>
    {/* Add a heading for the favorites section */}
    <h2>⭐ Favorite Names</h2>
    {/* Check if the favorites list is empty and display a message if so */}
    {favorites.length === 0 ? (
      <p>No favorites yet!</p>
    ) : (
      // Otherwise, display the list of favorite names
      <ul style={{ listStyle: "none", padding: 0 }}>
      {/* Map over the favorites array and render each name as a list item */}
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
  
  // Export the FavoritesList component for use in other parts of the app
  export default FavoritesList;