import React, { useState } from 'react';
import '../styles/PersonnalizedPuzzle.css'
function PersonalizedPuzzle() {
    const [personnes, setPersonnes] = useState([]);
    const [objects, setObjets] = useState([]);
    const [place, setPlaces] = useState([]);
    const [constraint, setConstraint] = useState('');
    const [constraints, setConstraints] = useState([]);
  
    const handleAddElement = () => {
      setConstraints([...constraints, constraint]);
      setConstraint(''); 
    };
  
    return (
      <div>
        {/* <input
          type="text"
          placeholder="Personne"
          value={personnes}
          onChange={e => setPersonnes([...personnes,e.target.value])}
        />
        <input
          type="text"
          placeholder="Objet"
          value={objects}
          onChange={e => setObjets([...objects,e.target.value])}
        />
        <input
          type="text"
          placeholder="Lien"
          value={paces}
          onChange={e => setLien(e.target.value)}
        />
        <textarea
          placeholder="Input"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={handleAddElement}>Add Element</button>
        <div className="box">
          {elements.map((element, index) => (
            <div key={index}>{element}</div>
          ))}
        </div> */}
      </div>
    );
  };
export default PersonalizedPuzzle
