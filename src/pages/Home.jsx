import React, { useEffect, useState } from 'react';
import './Home.css';
import PersonalizedCell from '../compenents/PersonalizedCell';
// Custom styled td component
const MainCols = ["Film", "Day", "Time"];
const cols = [
  "88 Minutes", "	Donnie Brasco", "Scarface", "The Recruit",
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "7:35 pm", "7:40 pm", "8:20 pm", "8:30 pm", "8:45 pm"
]
const names = ["Jessica", "Laurie", "Mark", "Mary", "Sally"];

const initializeGrid = (name,sizeGrid) => Array.from({ length: sizeGrid }, (ele, index) => {
  let type;
  if (index <= 3) {
    type = "Film";
  } else if (index >= 4 && index <= 8) {
    type = "Day";
  } else {
    type = "Time"
  }
  return { typeRow: name, status: null, typeCol: type, disable: false, valueCol: cols[index] }
});


function Home() {
  // const [grid, setGrid] = useState(Array.from({ length: 14 }, () => ({ status: null })));
  const [grids, setGrids] = useState([
    { id: 'grid0', name: 'Jessica', items: initializeGrid('Name',14) },
    { id: 'grid2', name: 'Laurie', items: initializeGrid('Name',14) },
    { id: 'grid3', name: 'Mark', items: initializeGrid('Name',14) },
    { id: 'grid4', name: 'Mary', items: initializeGrid('Name',14) },
    { id: 'grid5', name: 'Sally', items: initializeGrid('Name',14) },




  ]);
  const [cellChecked, setCellChecked] = useState({ _typeRow: "", _typeCol: "", _gridId: "", _index: "" })
  const toggleCellStatus = (gridId, cellIndex) => {
    setGrids(current =>
      current.map(grid => {

        if (grid.id === gridId) {
          return {
            ...grid,
            items: grid.items.map((cell, index) => {
              if (index === cellIndex) {
                if (cell.status === 'red' || cell.status == "green")
                  setCellChecked({ _typeRow: cell.typeRow, _typeCol: cell.typeCol, _gridId: gridId, _index: index, color: cell.status === 'red' ? 'red' : cell.status === 'green' ? null : null });
                return {
                  ...cell,
                  status: cell.status === 'red' ? 'green' : cell.status === 'green' ? null : 'red',
                };
              }

              return cell;
            }),
          };
        }
        return grid;
      })
    );
  };


  const handleClick = () => {
    grids.map((ele) => {
      console.log(ele.items.map(e => console.log(e.valueCol + " " + ele.name + " " + e.status)));

    });
  };
  useEffect(() => {
    setGrids(current => current.map(grid => {
      if (grid.id === cellChecked._gridId) {
        return {
          ...grid,
          items: grid.items.map((cell, i) => {
            if ((cell.typeCol === cellChecked._typeCol && cellChecked._index !== i)) {
              return {
                ...cell,
                disable: true,
                status: cellChecked.color,
              };
            }
            return cell;
          }),
        };
      } else {
        return {
          ...grid,
          items: grid.items.map((cell, i) => {
            if ((cell.typeCol === cellChecked._typeCol && cellChecked._index === i && cell.typeRow === cellChecked._typeRow)) {
              return {
                ...cell,
                disable: true,
                status: cellChecked.color,
              };
            }
            return cell;
          }),
        };
      }
      return grid;
    }));
  }, [cellChecked]);

  // Render the table based on the grid
  return (
    <div>
      <table style={{ borderCollapse: 'collapse', width: '60%' }}>
        {/* Header Rows */}
        <thead>
          <tr>
            <th className="headerCell" rowSpan={2}></th>

            <th className="headerCell" colSpan={4}>{MainCols[0]}</th>
            <th className="headerCell" colSpan={5}>{MainCols[1]}</th>
            <th className="headerCell" colSpan={5}>{MainCols[2]}</th>
          </tr>
          <tr>
            {cols.map(col => (<th className="headerCell">{col}</th>))}

          </tr>
        </thead>
        <tbody>
          {/* Data Row */}
          <>
            {names.map((name, index) => (
              <tr key={index}>
                <td className="headerRowSpan">{name}</td>
                {grids[index].items.map((cell, colIdx) => (
                  <PersonalizedCell
                    key={colIdx}
                    status={cell.status}
                    toggleStatus={() => toggleCellStatus(grids[index].id, colIdx)}
                  />
                ))}
              </tr>
            ))}
          </>

        </tbody>
      </table>
      <button onClick={handleClick}>Submit</button>

    </div>
  );
}

export default Home;
