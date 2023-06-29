import "./styles.css";
import { useState } from "react";
export default function App() {
  const epic = [
    "Time to Pretend",
    "O-o-oh Child",
    "Wish You Were Here",
    " Heroes",
    " I Put a Spell on You",
    "Call Me",
    "Paper Planes",
    "Jolene",
    "You Don't Own Me",
    "Fast Car",
    "Run the World (Girls)",
    "Superstition",
    "erfhjkbh4tb"
  ];
  const [song, setSong] = useState(0);
  function handleClick() {
    if (song < epic.length - 1) {
      setSong(song + 1);
    } else {
      setSong(0);
    }
  }
  return (
    <>
      {epic[song]}
      {epic && epic.map((song) => <h3>{song}</h3>)}
      <button onClick={handleClick}>select your favourite song</button>
    </>
  );
}
