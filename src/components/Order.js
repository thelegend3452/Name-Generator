import React, { useState } from "react";

const Order = () => {
  const [numPeople, setNumPeople] = useState(5);
  const [names, setNames] = useState(Array(5).fill(""));
  const [randomOrder, setRandomOrder] = useState("________");

  const handleNumPeopleChange = (e) => {
    const value = parseInt(e.target.value);
    setNumPeople(value);
    setNames(Array(value).fill("")); 
    setRandomOrder("________");
  };

  const handleInput = (index, value) => {
    const updatedNames = [...names];
    updatedNames[index] = value;
    setNames(updatedNames);
  };

  const shuffleOrder = () => {
    const newArray = [...names];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    setNames(newArray);
  };

  return (
    <div>
      <label>
        Number of People: 
        <select value={numPeople} onChange={handleNumPeopleChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </label>

      <div className="inputfield">
        {names.map((name, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Enter name ${index + 1}`}
            value={name}
            onChange={(e) => handleInput(index, e.target.value)}
          />
        ))}
      </div>

      

      <ol>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>

      <button className="orderbtn" onClick={shuffleOrder}>
        Shuffle Names
      </button>
    </div>
  );
};

export default Order;
