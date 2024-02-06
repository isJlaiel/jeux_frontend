import React, { useEffect, useState } from 'react';
import '../styles/ZebrePuzzle.css'
import '../styles/TextStyles.css'
import { clues, intro, womenCount, valuesAge, valuesName, valuesSurname, valuesPasta, valuesWine, cols, valuesShirt } from "../data/DataZebre"
import axios from 'axios';
import AlertDialog from '../compenents/AlertDialog';

function ZebrePuzzle() {
  const [womans, setWomans] = useState(
    Array.from({ length: womenCount }, (_, index) => ({
      id: index + 1,
      Name: '',
      Shirt: '',
      Surname: '',
      Pasta: '',
      Wine: '',
      Age: '',
    }))
  );

  const [message, setMessage] = useState("");
  const [clickedItems, setClickedItems] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [activateAnswerButton, setActivateAnswerButton] = useState(false);
  const [activatePropButton, setActivatePropButton] = useState(false);
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
  const handleClick = (arg) => {
    const data = ""
    const womansCopy = womans.map(({ id, ...rest }) => rest);
    womansCopy.forEach(w => {
      delete w.id;
    })

    const womansCopyNonVides = womansCopy.map(w => {
      const newObjet = {};
      for (const [cle, valeur] of Object.entries(w)) {
        if (valeur !== "") {
          newObjet[cle] = valeur;
        }
      }
      return newObjet;
    });
    
    let dataStr = JSON.stringify(womansCopyNonVides);

    dataStr = dataStr.trim().slice(1, -1).replace(/},{/g, "}|{");
    console.log(dataStr);

    axios.get(`http://localhost:8000/modelresolver/${arg}/3/${dataStr}`)
      .then(function (response) {
        console.log(response.data);
        if (response.data === "True") {
          let m = arg === "testsol" ? "GG YOUR PARTIAL ANSWER IS CORRECT 🥳🥳🥳🥳🥳🥳🥳🥳🥳" : "GG your answer is correct 🥳🥳🥳🥳🥳🥳🥳🥳🥳";
          setMessage(m)
          setIsAlertOpen(true);
        } else {
          let m = arg === "testsol" ? "Check your partial answer because there is something wrong 😭😭😭😭😭😭😭" : "Check your  answer because there is something wrong 😭😭😭😭😭😭😭";

          setMessage(m)

          setIsAlertOpen(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
  };

  const handleClose = () => {
    setIsAlertOpen(false);
  };
  const activateButton = () => {

    const newWomans = womans.filter(e => e.Age !== "" && e.Name !== "" && e.Pasta !== "" && e.Shirt !== "" && e.Wine !== "");
    const newWomansProp = womans.filter(e => e.Age !== "" || e.Name !== "" || e.Pasta !== "" || e.Shirt !== "" || e.Wine !== "");
    setActivatePropButton(newWomansProp.length > 0 && newWomans.length < 5 )
    setActivateAnswerButton(newWomans.length == 5)
  }

  useEffect(()=>{
    activateButton()
  },[womans])
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
                      value={woman[col]}
                      onChange={(e) => handleSelectionChange(woman.id, col, e.target.value)}
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
      <div className="conteneur-bouton">

      <button disabled={!activatePropButton} className="submitZebre" onClick={() => handleClick("testsol")} >Check proposition</button>
      <button disabled={!activateAnswerButton} className="submitZebre" onClick={() => handleClick("solve")}>Check Answer</button>
</div>

      <div>
        <AlertDialog isOpen={isAlertOpen} onClose={handleClose} message={message} />

      </div>
    </div>

  );
}

export default ZebrePuzzle;
