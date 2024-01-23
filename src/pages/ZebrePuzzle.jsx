import React, { useState } from 'react';
import './ZebrePuzzle.css'
const cols = ["Shirt", "Name", "Surname", "Pasta", "Wine", "Age"];
const valuesShirt = ["blue", "green", "red", "white", "yellow"];
const valuesName = ["Andrea", "Holly", "Julie", "Leslie", "Victoria"];
const valuesSurname = ["Brown", "Davis", "Lopes", "Miller", "Wilson"];
const valuesPasta = ["farfalle", "lasagne", "penne", "spaghetti", "ravioli"];
const valuesWine = ["Cabernet", "Merlot", "Pinot Noir", "Sangiovese", "Syrah"];
const valuesAge = ["30 years", "35 years", "40 years", "45 years", "50 years"];
const womenCount = 5; // The number of women

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

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
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
              <td key={woman.id}>
                <select
                  value={woman[col.toLowerCase()]}
                  onChange={(e) => handleSelectionChange(woman.id, col.toLowerCase(), e.target.value)}
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
  );
}

export default ZebrePuzzle;
