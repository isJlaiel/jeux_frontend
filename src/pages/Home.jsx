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
const rows = [
  "Jessica", "Laurie", "Mark", "Mary", "Sally",
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "7:35 pm", "7:40 pm", "8:20 pm", "8:30 pm", "8:45 pm"
]
const mainRows = ["Name","Time","Day"]
const initializeGrid = (name,sizeGrid) => Array.from({ length: sizeGrid }, (ele, index) => {
  let type;
  if (index <= 3) {
    type = mainRows[0];
  } else if (index >= 4 && index <= 8) {
    type = mainRows[1];
  } else {
    type =mainRows[2];
  }
  return { typeRow: name, status: null, typeCol: type, isAble: true, valueCol: cols[index] , changedBy:''}
});

const initializeGrids = () => {
  const grids = [];
  for (let i = 0; i < rows.length; i++) {
    let type, count;
    if (i < 5) {
      type = 'Name';
      count = 14;
    } else if (i < 10) {
      type = 'Time';
      count = 10;
    } else {
      type = 'Day';
      count = 5;
    }
    grids.push({ id: `grid${i}`, name: rows[i], items: initializeGrid(type, count) });
  }
  return grids;
};

function Home() {
  // const [grid, setGrid] = useState(Array.from({ length: 14 }, () => ({ status: null })));
  const [grids, setGrids] = useState(initializeGrids());

  const [cellChecked, setCellChecked] = useState({ _typeRow: "", _typeCol: "", _gridId: "", _index: "", _isAble:"" })
  const toggleCellStatus = (gridId, cellIndex) => {
    setGrids(current =>
      current.map(grid => {

        if (grid.id === gridId) {
          return {
            ...grid,
            items: grid.items.map((cell, index) => {
              if (index === cellIndex) {
                if (cell.status === 'red' || cell.status == "green")
                  setCellChecked({ _typeRow: cell.typeRow, _typeCol: cell.typeCol, _gridId: gridId, _index: index, color: cell.status === 'red' ? 'green' : cell.status === 'red' ? null : null ,_isAble:cell.status!=='red'});
                return {
                  ...cell,
                  status: cell.status === 'red' ? 'green' : cell.status === 'green' ? null : 'red',
                  changedBy : -1,
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
            if (((cell.typeCol === cellChecked._typeCol && cellChecked._index !== i ) && (cell.changedBy===''|| cell.changedBy===cellChecked._index))) {
              return {
                ...cell,
                isAble: cellChecked._isAble,
                status: cellChecked.color==='green' ? 'red' : null  ,
                changedBy:cellChecked._index,
              };
            }
            return cell;
          }),
        };
      } else {
        return {
          ...grid,
          items: grid.items.map((cell, i) => {
            if (((cell.typeCol === cellChecked._typeCol && cellChecked._index === i && cell.typeRow === cellChecked._typeRow )&& (cell.changedBy===''|| cell.changedBy===cellChecked._index))) {
              return {
                ...cell,
                isAble: cellChecked._isAble,
                status: cellChecked.color==='green' ? 'red' : null  ,
                changedBy:cellChecked._index,

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
          <>
            {rows.map((value, index) => (
              <tr key={index}>
                <td className="headerRowSpan">{value}</td>
                {grids[index].items.map((cell, colIdx) => (
                  <PersonalizedCell
                    key={colIdx}
                    status={cell.status}
                    toggleStatus={() => toggleCellStatus(grids[index].id, colIdx)}
                    able={cell.isAble}
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
