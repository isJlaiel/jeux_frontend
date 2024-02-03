import LogicPuzzle from './LogicPuzzle';
import React from 'react';
import '../styles/logicPuzzle.css';
import {mainCols,cols ,mainRows , rows , clues , puzzleType , puzzleName ,intro} from "../data/DataNewPersonalComputer"
function NewPersonalComputer() {
//   const [data, setData] = useState(
//     [
// {"Day":"Lundi", "Name": "Mary" , "Film":"88_Minutes" , "Time": "820"},
// {"Day":"Mardi" , "Name":"Mark", "Film":"Scarecrow" , "Time": " 845"},
// {"Day":"Mercredi","Name": "Jessica","Film" :"Donnie_Brasco","Time": "830"},
// {"Day":"Jeudi" , "Name":"Sally", "Film":"Scarface","Time":"740"},
// {"Day": "Vendredi", "Name": "Laurie","Film":"The_recruit","Time": "735"}
//     ]
//   );

  // useEffect(() => {
  //   // const fetchData = async () => {
  //   //   const result = await axios('URL_DE_VOTRE_BACKEND');
  //   //   setData(result.data);
  //   // };

  //   // fetchData();
  // }, []); 

  return (
    <>
      <div>
        <LogicPuzzle mainCols={mainCols} cols={cols} rows={rows} mainRows={mainRows} clues={clues} intro={intro} puzzleType={puzzleType} puzzleName={puzzleName} />
      </div>
    </>
  );
}

export default NewPersonalComputer
