import React from 'react';
import LogicPuzzle  from './LogicPuzzle';
import  { mainCols, cols , rows , clues , mainRows,  puzzleName , puzzleType , intro} from "../data/DataAlPacinoMovies"

function AlPacinoMovies() {
const idGame ="1";
  return (
    <div>
     <LogicPuzzle mainCols={mainCols}  cols={cols} rows={rows} mainRows={mainRows} clues={clues} intro={intro} puzzleType={puzzleType} puzzleName={puzzleName} idGame={idGame}/>
    </div>
  );
}

export default AlPacinoMovies;
