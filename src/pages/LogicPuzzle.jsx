import React, { useEffect, useState } from 'react';
import './logicPuzzle.css';
import PersonalizedCell from '../compenents/PersonalizedCell';



function LogicPuzzle({ mainCols, cols, rows, mainRows }) {

  const initializeGrid = (name, sizeGrid) => Array.from({ length: sizeGrid }, (ele, index) => {
    let type;
    if (index <= 4) {
      type = mainRows[0];
    } else if (index >= 5 && index <= 9) {
      type = mainRows[1];
    } else {
      type = mainRows[2];
    }
    return { typeRow: name, status: null, typeCol: type, isAble: true, valueCol: cols[index], changedBy: [] }
  });

  const initializeGrids = () => {
    const grids = [];
    for (let i = 0; i < rows.length; i++) {
      let type, count;
      if (i < 5) {
        type = mainRows[0];
        count = 15;
      } else if (i < 10) {
        type = mainRows[1];
        count = 10;
      } else {
        type = mainRows[2];
        count = 5;
      }
      grids.push({ id: `grid${i}`, name: rows[i], items: initializeGrid(type, count) });
    }
    return grids;
  };
  const [grids, setGrids] = useState(initializeGrids());
  const [cellChecked, setCellChecked] = useState({ _typeRow: "", _typeCol: "", _gridId: "", _index: "", _isAble: "" })

  const toggleCellStatus = (gridId, cellIndex) => {
    setGrids(current =>
      current.map(grid => {

        if (grid.id === gridId) {
          return {
            ...grid,
            items: grid.items.map((cell, index) => {
              if (index === cellIndex) {
                if (cell.status === 'red' || cell.status == "green")
                  setCellChecked({ _typeRow: cell.typeRow, _typeCol: cell.typeCol, _gridId: gridId, _index: index, color: cell.status === 'red' ? 'green' : cell.status === 'red' ? null : null, _isAble: cell.status !== 'red' });
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
    grids.forEach((ele) => {
      const greenItems = ele.items.filter(e => e.status === "green");
      greenItems.forEach(e => console.log(e.valueCol + " " + ele.name + " "));
    });
  };


  useEffect(() => {
    setGrids(current => current.map(grid => {
      if (grid.id === cellChecked._gridId) {
        return {
          ...grid,
          items: grid.items.map((cell, i) => {
            if (cell.typeCol === cellChecked._typeCol && cellChecked._index !== i) {
              let passedStatus = cellChecked.color === 'green' ? 'red' : null;
              const updatedChangedBy = passedStatus === null ? cell.changedBy.filter(item => item !== cellChecked._index) : [...cell.changedBy, cellChecked._index];
              return {
                ...cell,
                isAble: cellChecked._isAble,
                status: updatedChangedBy.length !== 0 ? 'red' : null,
                changedBy: updatedChangedBy,
              };
            }
            return cell;
          }),
        };
      } else {
        return {
          ...grid,
          items: grid.items.map((cell, i) => {
            if (cell.typeCol === cellChecked._typeCol && cellChecked._index === i && cell.typeRow === cellChecked._typeRow) {
              let passedStatus = cellChecked.color === 'green' ? 'red' : null;
              const updatedChangedBy = passedStatus === null ? cell.changedBy.filter(item => item !== cellChecked._index) : [...cell.changedBy, cellChecked._index];
              return {
                ...cell,
                isAble: cellChecked._isAble,
                status: updatedChangedBy.length !== 0 ? 'red' : null,
                changedBy: updatedChangedBy,
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
    <div >
      <table className='table'>
        {/* Header Rows */}
        <thead>
          <tr>
            <th className="headerCell" colSpan={2} rowSpan={2}></th>

            <th className="headerCell" colSpan={5}>{mainCols[0]}</th>
            <th className="headerCell" colSpan={5}>{mainCols[1]}</th>
            <th className="headerCell" colSpan={5}>{mainCols[2]}</th>
          </tr>
          <tr>
            {cols.map(col => (<th className="headerCell">{col}</th>))}
          </tr>
        </thead>
        <tbody>
          <>
            {rows.map((value, index) => (
              <tr key={index}>
                {
                  (index === 0 || index === 5 || index === 10) ?
                    <td className="rowSpanCell" rowSpan={5}>
                      {index === 0 ? mainRows[0] : (index === 5 ? mainRows[2] : mainRows[1])}
                    </td> : null
                }
                <td className="headerRowSpan">

                  {value}</td>
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

export default LogicPuzzle;
