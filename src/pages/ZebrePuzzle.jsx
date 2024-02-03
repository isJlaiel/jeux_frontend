import React, { useState } from 'react';
import '../styles/ZebrePuzzle.css'
import '../styles/TextStyles.css'
import { clues, intro, womenCount, valuesAge, valuesName, valuesSurname, valuesPasta, valuesWine, cols, valuesShirt } from "../data/DataZebre"

function ZebrePuzzle() {
  const [womans, setWomans] = useState(
    Array.from({ length: womenCount }, (_, index) => ({
      id: index + 1,
      shirt: '',
      name: '',
      surname: '',
      pasta: '',
      wine: '',
      age: '',
    }))
  );

  const [clickedItems, setClickedItems] = useState([]);

  const toggleItem = (index) => {
    setClickedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  const handleSelectionChange = (womanId, field, value) => {
    const updatedWomans = womans.map(woman => {
      if (woman.id === womanId) {
        return { ...woman, [field]: value };
      }
      return woman;
    });
    setWomans(updatedWomans);
  };

  const getValueOptions = (col) => {
    switch (col) {
      case "Shirt": return valuesShirt;
      case "Name": return valuesName;
      case "Surname": return valuesSurname;
      case "Pasta": return valuesPasta;
      case "Wine": return valuesWine;
      case "Age": return valuesAge;
      default: return [];
    }
  };
  const handleClick = () => {
    console.log(womans);
  }
  return (
    <div >

    <div className='title' >
      <h1>Pasta and Wine<small> Zebra Puzzle</small>
      </h1>
      <p>{intro}</p>
      <div className='grid-container'>
        {clues.map((value, index) => (
          <li
            key={index}
            className={clickedItems[index] ? 'strikethrough' : ''}
            onClick={() => toggleItem(index)}>{value}</li>
        ))}
      </div>
      </div>
      <div className="tableContainer">
        <table className='tableZebre'>
          <thead>
            <tr>
              <th></th>
              {womans.map((_, id) => (
                <th key={id}>Woman #{id + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cols.map((col, index) => (
              <tr key={index}>
                <td>{col}</td>
                {womans.map((woman) => (
                  <td key={woman.id} className='col'>
                    <select
                      value={woman[col.toLowerCase()]}
                      onChange={(e) => handleSelectionChange(woman.id, col.toLowerCase(), e.target.value)}
                      className='selectTable'
                    >
                      <option value=""></option>
                      {getValueOptions(col).map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="submitZebre" onClick={handleClick}>Chack Answer</button>

    </div>

  );
}

export default ZebrePuzzle;
