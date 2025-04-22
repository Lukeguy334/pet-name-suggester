import { useState } from "react";
import NameCard from "./components/NameCard";
import FavoritesList from "./components/FavoritesList";

/*
  App: Pet Name Suggester
  Features:
    - Show a random boy or girl pet name
    - User can favorite names
    - Display a list of favorited names
  Components: NameCard, FavoritesList
*/

const boyNames = [
  "Waffles", "Pickles", "Ziggy", "Toast", "Nugget", 
  "Snickers", "Goose", "Ravioli", "Bingo", "Max"
];

const girlNames = [
  "Luna", "Mochi", "Marshmallow", "Bubbles", "Tater Tot", 
  "Sprinkles", "Pebbles", "Daisy", "Bella", "Cookie"
];

function App() {
  const [currentName, setCurrentName] = useState("");
  const [favorites, setFavorites] = useState([]);

  // Pick a random name from the specified list
  const getNewName = (list) => {
    const random = list[Math.floor(Math.random() * list.length)];
    setCurrentName(random);
  };

  // Add current name to favorites
  const addFavorite = () => {
    if (currentName && !favorites.includes(currentName)) {
      setFavorites([...favorites, currentName]);
    }
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", padding: "2rem" }}>
      <h1>🐾 Pet Name Suggester</h1>
      <NameCard 
        name={currentName}
        onBoyClick={() => getNewName(boyNames)}
        onGirlClick={() => getNewName(girlNames)}
        onFavorite={addFavorite}
      />
      <FavoritesList favorites={favorites} />
    </div>
  );
}

export default App;
