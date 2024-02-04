import React, { useState } from 'react';
import '../styles/PersonnalizedPuzzle.css'
function PersonalizedPuzzle() {
  const [names, setNames] = useState([]);
  const [constraints, setConstraints] = useState([]);
  const [constraint, setConstraint] = useState("");

  const handleAddElement = () => {
    setConstraints([...constraints, constraint]);
    setConstraint("");
  };
  const handleAddName = (e) => {
    e.preventDefault(); 
    const newName = e.target.value; 
    if (newName.trim() !== "") {
      setNames([...names, newName]); 
      e.target.value = "";
    }
  };

  const handleRemoveName = (indexToRemove) => {
    setNames(names.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <p>paragraphe 1</p>
      <div>
      <input
        className='persoInput'
        type="text"
        placeholder="Name"
        onKeyPress={e => e.key === 'Enter' && handleAddName(e)}
      />
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name} 
            <span 
              onClick={() => handleRemoveName(index)}
              className="deleteButton"
            >
              X
            </span>
            
           </li>
        ))}
      </ul>
    </div>
    
      <textarea
        className='persotextarea'
        placeholder="Input"
        onChange={e => setConstraint([...constraint, e.target.value])}
      />
      <button onClick={handleAddElement}>Add Element</button>
      <div className="box">
        {constraints.map((c, index) => (
          <div key={index}>{c}</div>
        ))}
      </div>
    </div>
  );
};
export default PersonalizedPuzzle
