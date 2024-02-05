import React, { useEffect, useState } from 'react';
import '../styles/PersonnalizedPuzzle.css'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import AlertDialog from '../compenents/AlertDialog';

const constraint = [
  "Veut voyager par train",
  "Ne veut pas Voyager par avion",
  "Ne veut pas Voyager par train",
  "Veut voyager par bâteau",
  "À le mal de mer",
  "Veut  voyager par Avion",
  "Veut visiter la Belgique",
  "Veut aller en Angleterre",
  "Veut aller en Italie",
  "Ne veut pas aller en Angleterre",
  "Ne veut pas aller Italie",
  "Ne veut pas aller en Belgique",
]


const constraintValue = {
  "Veut voyager par train": "constraint voyage_par[-] == Train",
  "Ne veut pas Voyager par avion": "constraint voyage_par[-] != Plane",
  "Ne veut pas Voyager par train": "constraint voyage_par[-]  != Train",
  "À le mal de mer": "constraint voyage_par[-] != Boat",
  "Veut  voyager par Avion": "constraint voyage_par[-] == Plane",
  "Veut voyager par bâteau": "constraint voyage_par[-] == Boat",
  "Veut visiter la Belgique": "constraint va_en[-] == Belgique",
  "Veut aller en Angleterre": "constraint va_en[-]  == Angleterre",
  "Veut aller en Italie": "constraint va_en[-] == Italie",
  "Ne veut pas aller en Angleterre": "constraint va_en[-] != Angleterre",
  "Ne veut pas aller Italie": "constraint va_en[-]  != Italie",
  "Ne veut pas aller en Belgique": "constraint va_en[-]  != Belgique"
}
function PersonalizedPuzzle() {

  const location = useLocation();
  const { people } = location.state; // Accéder à `people` passé
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedConstraint, setSelectedConstraint] = useState(null);
  const [associations, setAssociations] = useState([]);
  const [constraintsAccep, setContraintsAccep] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [solutions, setSolutions] = useState([]);
  const [showSolutions, setShowSolutions] = useState(false);

  const handleChangePerson = (event) => {
    setSelectedPerson(event.target.value);
  };

  const handleChangeConstraint = (event) => {
    setSelectedConstraint(event.target.value);
  };
  const handleClose = () => {
    setIsAlertOpen(false);
  };
  const handleSubmit = () => {
    setShowSolutions(false);

    if (selectedPerson && selectedConstraint) {
      let data = "";
      for (const element of constraintsAccep) {
        data += element + " | ";
      }

      data += constraintValue[selectedConstraint].replace('-', selectedPerson)
      console.log(data)
      axios.get(`http://localhost:8000/modelresolver/addConstraints/${data}`)
        .then(function (response) {
          // handle success
          console.log(response.data)
          if (response.data.hasSolution === true) {
            setContraintsAccep([...constraintsAccep, constraintValue[selectedConstraint].replace('-', selectedPerson)])
            setAssociations([
              ...associations,
              { person: selectedPerson, constraint: selectedConstraint },
            ]);
            setContraintsAccep([...constraintsAccep, constraintValue[selectedConstraint].replace('-', selectedPerson)])
            setSolutions([]);

            setSolutions([...solutions, response.data.solutions])
          } else {
            setIsAlertOpen(true);

          }

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

    } else {
      alert('Veuillez sélectionner une personne et une contrainte.');
    }
    // console.log(associations)
  };

  const handleSolution = () => {
    setShowSolutions(true);
  };

  return (
    <>
      <>
        <h1  >Définissez vos contraintes: </h1>

        <div className="container">

          <div className="half-page constraints-list">

            <div className='titlePerso'>Contraintes</div>
            {constraint.map((c, index) => (
              <div className="list-item" key={c.id || index}>
                <input
                  type="radio"
                  name="constraint"
                  value={c}
                  onChange={handleChangeConstraint}
                />
                <label>{c}</label>
              </div>
            ))}
          </div>
          <div className="half-page people-list">
            <div className='titlePerso' >Personnes</div>
            {people.map((person, index) => (
              <div className="list-item" key={person.id || index}>
                <input
                  type="radio"
                  name="person"
                  value={person}
                  onChange={handleChangePerson}
                />
                <label>{person}</label>
              </div>
            ))}
          </div>
        </div>

        <button className="submit-button" type='button' onClick={handleSubmit}>AJOUTER</button>
        <div className='titlePerso' >Liste des contraintes retenues: </div>
        {associations.map((assoc, index) => (

          <div>{assoc.person} : {assoc.constraint}</div>
        ))}
        {
          solutions.length !== 0 && <button onClick={handleSolution}>Solve</button>
        }
        {
          showSolutions && <p >{solutions.length !== 0 ? solutions[solutions.length - 1] : ""}</p>

        }
        <AlertDialog isOpen={isAlertOpen} onClose={handleClose} message={"le modele n'est pas satisfiable"} />

      </>

    </>
  );
}

export default PersonalizedPuzzle
