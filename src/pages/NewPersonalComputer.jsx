import LogicPuzzle from './LogicPuzzle';
import React from 'react';
import '../styles/logicPuzzle.css';
import {mainCols,cols ,mainRows , rows , clues , puzzleType , puzzleName ,intro} from "../data/DataNewPersonalComputer"
function NewPersonalComputer() {

  return (
    <>
      <div>
        <LogicPuzzle mainCols={mainCols} cols={cols} rows={rows} mainRows={mainRows} clues={clues} intro={intro} puzzleType={puzzleType} puzzleName={puzzleName} />
      </div>
    </>
  );
}

export default NewPersonalComputer
