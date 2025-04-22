/*
  App: Pet Name Suggester
  Features:
    - Show a random boy or girl pet name
    - User can favorite names
    - Display a list of favorited names
  Components: NameCard, FavoritesList
*/

import { useState } from "react";
import NameCard from "./components/NameCard";
import FavoritesList from "./components/FavoritesList";


// Define arrays of boy and girl pet names
// Prompt: Create two arrays, one for boy pet names and one for girl pet names
const boyNames = [
  "Waffles", "Pickles", "Ziggy", "Toast", "Nugget", 
  "Snickers", "Goose", "Ravioli", "Bingo", "Max",
  "Buddy", "Charlie", "Rocky", "Toby", "Oliver",
  "Potter", "Finn", "Leo", "Milo", "Jack",
  "Cooper", "Duke", "Bear", "Murphy", "Tucker",
  "Zeus", "Gizmo", "Buster", "Rusty", "Sammy",
  "Ollie", "Chester", "Jasper", "Rocco", "Thor",
];

const girlNames = [
  "Luna", "Mochi", "Marshmallow", "Bubbles", "Tater Tot", 
  "Sprinkles", "Pebbles", "Daisy", "Bella", "Cookie",
  "Ranger", "Scout", "Pudding", "Cupcake", "Pumpkin",
  "Zara", "Willow", "Hazel", "Coco", "Nala",
  "Sophie", "Chloe", "Sadie", "Ruby", "Maggie",
  "Penny", "Zoey", "Roxy", "Lola", "Ginger",
  "Molly", "Trixie", "Piper", "Sasha", "Gracie",
];

function App() {
  // Prompt: Use state to track the current name and the list of favorited names
  const [currentName, setCurrentName] = useState("");
  const [favorites, setFavorites] = useState([]);

  // Prompt: Write a function to pick a random name from a given list
  const getNewName = (list) => {
    const random = list[Math.floor(Math.random() * list.length)];
    setCurrentName(random);
  };

  // Prompt: Write a function to add the current name to the favorites list
  const addFavorite = () => {
    if (currentName && !favorites.includes(currentName)) {
      setFavorites([...favorites, currentName]);
    }
  };

  return (
    // Prompt: Create a simple UI with a title, a name card, and a favorites list
    <div style={{ textAlign: "center", fontFamily: "Arial", padding: "2rem" }}>
      <h1>🐾 Pet Name Suggester</h1>
      {/* Prompt: Pass props to the NameCard component for displaying the current name and handling button clicks */}
      <NameCard 
        name={currentName}
        onBoyClick={() => getNewName(boyNames)}
        onGirlClick={() => getNewName(girlNames)}
        onFavorite={addFavorite}
      />
      {/* Prompt: Pass the favorites array to the FavoritesList component */}
      <FavoritesList favorites={favorites} />
    </div>
  );
}

export default App;
