import React, { useState } from "react";
import './App.css';

function App() {
  const [rank,setRank] = useState("E");
  const ranks =['E','D','C','B','A','S']
  const [quote,setQuote] = useState("The only one who can decide my worth is me.")
  const quotes =  [
    "The only one who can decide my worth is me.",
    "If I’m going to die anyway, I’ll fight to the end.",
    "I am not the same person I was yesterday.",
    "Those who stand in my way… will regret it.",
    "Strength isn’t given. It’s taken.",
    "Even in the face of death, I move forward.",
    "I’ll become strong enough that no one can touch me.",
    "Fear is just another enemy to be crushed.",
    "I don’t need anyone’s approval to survive.",
    "The weak become prey, the strong survive — I choose to survive."
];


  const levelUp = () => {
    let nextindex = ranks.indexOf(rank) + 1
    if(nextindex < ranks.length){
      setRank(ranks[nextindex]);
    }
    else{
      alert("Max ranks reached")
    }

  }
function changequote(){
  let nextindex = quotes.indexOf(quote) + 1
  if(nextindex < quotes.length){
    setQuote(quotes[nextindex])
  }
  else{
    nextindex = 0
    setQuote(quotes[nextindex])
  }
}



  return (
    <div className="container">
      <h1>Paladugu GopiChandu</h1>
      <div className="card">
        <img
          className="img"
          src="https://static.beebom.com/wp-content/uploads/2025/01/jinwoo-solo-leveling.jpg?w=1250&quality=75"
          alt="Jinwoo Hunter"
        />
        <div className="info">
          <h2>{rank} : Rank Hunter</h2>
          <h2>Stats : Levelling Up</h2>
          <button onClick={levelUp}>Level Up</button>
        </div>
      </div>
      <div className="quo">
        <h1>{quote}</h1>
        <button onClick={changequote}>Change Quote</button>
      </div>
    </div>
  );
}
export default App;
