// Display the current pet name and buttons to interact
function NameCard({ name, onBoyClick, onGirlClick, onFavorite }) {
    return (
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "2rem", minHeight: "2.5rem" }}>{name || "Click a button to get a name!"}</h2>
        <div style={{ margin: "1rem 0" }}>
          <button onClick={onBoyClick} style={buttonStyle}>🐶 Boy Name</button>
          <button onClick={onGirlClick} style={buttonStyle}>🐱 Girl Name</button>
          <button onClick={onFavorite} style={{ ...buttonStyle, backgroundColor: "#ff6b81" }}>❤️ Add to Favorites</button>
        </div>
      </div>
    );
  }
  
  const buttonStyle = {
    margin: "0.5rem",
    padding: "0.75rem 1.25rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
  };
  
  export default NameCard;
  