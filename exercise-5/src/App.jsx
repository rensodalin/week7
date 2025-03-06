import React from "react";
import { Information } from "./data.js";
import Card from "./components/card.jsx";
function App() {
  return (
    <>
    <header>
      <h1>My Items</h1>
    </header>

    <div className="cards-view">
      <div className="cards-grid">
        {Information.map((item) => (
          <Card
            name={item.name}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  </>
  )
  {/* Your code  here */};
}

export default App;
