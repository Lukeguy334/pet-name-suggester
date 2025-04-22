// Create a functional component to display the current pet name and buttons to interact
function NameCard({ name, onBoyClick, onGirlClick, onFavorite }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
    {/* Display the current name or a default message if no name is provided */}
    <h2 style={{ fontSize: "2rem", minHeight: "2.5rem" }}>{name || "Click a button to get a name!"}</h2>
    <div style={{ margin: "1rem 0" }}>
      {/* Add a button for generating a boy's name */}
      <button onClick={onBoyClick} style={buttonStyle}>🐶 Boy Name</button>
      {/* Add a button for generating a girl's name */}
      <button onClick={onGirlClick} style={buttonStyle}>🐱 Girl Name</button>
      {/* Add a button for adding the current name to favorites */}
      <button onClick={onFavorite} style={{ ...buttonStyle, backgroundColor: "#ff6b81" }}>❤️ Add to Favorites</button>
    </div>
    </div>
  );
  }
  
  // Define a reusable button style object
  const buttonStyle = {
  margin: "0.5rem",
  padding: "0.75rem 1.25rem",
  fontSize: "1rem",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#007bff", // Default button background color
  color: "white", // Button text color
  };
  
  // Export the NameCard component for use in other parts of the app
  export default NameCard;