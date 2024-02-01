import React from 'react';
import LogicPuzzle  from './LogicPuzzle';
// Custom styled td component
const _mainCols = ["Film", "Day", "Time"];
const _cols = [
  "88 Minutes", "	Donnie Brasco","Scarecrow", "Scarface", "The Recruit",
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "7:35 pm", "7:40 pm", "8:20 pm", "8:30 pm", "8:45 pm"
]
const _rows = [
  "Jessica", "Laurie", "Mark", "Mary", "Sally",
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "7:35 pm", "7:40 pm", "8:20 pm", "8:30 pm", "8:45 pm"
]
const _mainRows = ["Name","Time","Day"]
function AlPacinoMovies() {

  return (
    <div>
     <LogicPuzzle mainCols={_mainCols}  cols={_cols} rows={_rows} mainRows={_mainRows}/>
    </div>
  );
}

export default AlPacinoMovies;
