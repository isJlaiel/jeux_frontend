import React, { useEffect, useState } from 'react';
import '../styles/logicPuzzle.css';
import PersonalizedCell from '../compenents/PersonalizedCell';
import AlertDialog from '../compenents/AlertDialog';
import axios from 'axios';
function LogicPuzzle({ mainCols, cols, rows, mainRows, clues, intro, puzzleType, puzzleName, idGame }) {
  const idGameValue = idGame ? idGame : 0;
  const initializeGrid = (name, value, sizeGrid) => Array.from({ length: sizeGrid }, (ele, index) => {
    let type;
    if (index <= 4) {
      type = mainCols[0];
    } else if (index >= 5 && index <= 9) {
      type = mainCols[1];
    } else {
      type = mainCols[2];
    }
    return { typeRow: name, valueRow: value, status: null, typeCol: type, isAble: true, valueCol: cols[index], changedBy: [] }
  });

  const initializeGrids = () => {
    const grids = [];
    for (let i = 0; i < rows.length; i++) {
      let type, count, valueRow;
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
      valueRow = rows[i];

      grids.push({ id: `grid${i}`, name: rows[i], items: initializeGrid(type, valueRow, count) });
    }
    return grids;
  };
  const [grids, setGrids] = useState(initializeGrids());
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [cellChecked, setCellChecked] = useState({ _typeRow: "", _typeCol: "", _gridId: "", _index: "", _isAble: "" })
  const [clickedItems, setClickedItems] = useState([]);
  const [activateAnswerButton, setActivateAnswerButton] = useState(false);
  const [activatePropButton, setActivatePropButton] = useState(true);
  const [count, setCount]= useState(0)
  const toggleItem = (index) => {
    setClickedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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


  const handleClick = (arg) => {
    const _data = [];
    grids.forEach((ele) => {
      const greenItems = ele.items.filter(e => (e.status === "green" && e.typeRow == mainRows[0]));
      greenItems.forEach(e => {
        let found = false;
        for (let obj of _data) {

          if ((obj.hasOwnProperty(e.typeRow)) && (obj[e.typeRow] == e.valueRow) || (obj.hasOwnProperty(e.typeCol) && obj[e.typeCol] == e.valueCol)) {

            found = true;
            obj[e.typeRow.replace(/\s/g, '')] = e.valueRow; // Mettre à jour ou ajouter la valeur pour e.typeRow
            obj[e.typeCol.replace(/\s/g, '')] = e.valueCol; // Mettre à jour ou ajouter la valeur pour e.typeCol
            break;
          }

        }

        if (!found) {
          const newObj = {
            [e.typeRow.replace(/\s/g, '')]: e.valueRow,
            [e.typeCol.replace(/\s/g, '')]: e.valueCol,
          };
              console.log(newObj)
          _data.push(newObj);

        }

      });
    });
    let dataStr = JSON.stringify(_data);
    dataStr = dataStr.trim().slice(1, -1).replace(/},{/g, "}|{");
     console.log(dataStr);

    axios.get(`http://localhost:8000/modelresolver/${arg}/${idGameValue}/${dataStr}`)
      .then(function (response) {
        // handle success

        if (response.data === "True") {
          let m = arg==="testsol"? "GG YOUR PARTIAL ANSWER IS CORRECT 🥳🥳🥳🥳🥳🥳🥳🥳🥳" :"GG your answer is correct 🥳🥳🥳🥳🥳🥳🥳🥳🥳";
          setMessage(m)
          setIsAlertOpen(true);
        } else {
          let m = arg==="testsol"? "Check your partial answer because there is something wrong 😭😭😭😭😭😭😭" :"Check your  answer because there is something wrong 😭😭😭😭😭😭😭";

          setMessage(m)

          setIsAlertOpen(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      })

  };

  const handleClose = () => {
    setIsAlertOpen(false);
  };
  const activateButton = () => {

    const newGrids = grids.map((ele) => {
      // Filtrer les items pour ne garder que ceux avec un status "green"
      const filteredItems = ele.items.filter(e => e.status === "green");
      
      // Retourner un nouvel objet avec les items filtrés
      return {
        ...ele,
        items: filteredItems
      };
    });
    var count = 0 ;
    newGrids.forEach(ele => {
      count += ele.items.length;
    });
    setActivatePropButton(count  < 15 && count> 0)
    setActivateAnswerButton(count === 15)
  }
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
    activateButton();
  }, [cellChecked]);


  return (
    <div>
      <div className='title' >
        <h1>{puzzleName}<small>{puzzleType}</small>
        </h1>
        <p>{intro}</p>

      </div>
      <div className='container' >

        <table className='table'>
          {/* Header Rows */}
          <thead>
            <tr>
              <th colSpan={2} rowSpan={2}></th>

              <th className="headerCell" colSpan={5}>{mainCols[0]}</th>
              <th className="headerCell" colSpan={5}>{mainCols[1]}</th>
              <th className="headerCell" colSpan={5}>{mainCols[2]}</th>
            </tr>
            <tr>
              {cols.map(col => (<th className="vertical-header">{col}</th>))}
            </tr>
          </thead>
          <tbody>
            <>
              {rows.map((value, index) => (
                <tr key={index}>
                  {
                    (index === 0 || index === 5 || index === 10) ?
                      <td className="rowSpanCell" rowSpan={5}>
                        {index === 0 ? mainRows[0] : (index === 5 ? mainRows[1] : mainRows[2])}
                      </td> : null
                  }
                  <td className="headerRowSpan">

                    {value}</td>
                  {grids[index].items.map((cell, colIdx) => (
                    <PersonalizedCell
                      key={colIdx}
                      status={cell.status}
                      toggleStatus={() => toggleCellStatus(grids[index].id, colIdx)}
                      isAble={cell.changedBy.filter((item) => item != -1).length == 0}
                    />
                  ))}
                </tr>
              ))}
            </>

          </tbody>
        </table>
        <div>

        </div>
        <div className='clues'>
          {clues.map((value, index) => (
            <li
              key={index}
              className={clickedItems[index] ? 'strikethrough' : ''}
              onClick={() => toggleItem(index)}>{value}</li>))
          }
          <div className="conteneur-bouton">
          <button  disabled={!activatePropButton} className="submit" onClick={()=>handleClick("testsol")} >Check proposition</button>

            <button disabled={!activateAnswerButton} className="submit" onClick={()=>handleClick("solve")}>Check Answer</button>

          </div>
        </div>
        <AlertDialog isOpen={isAlertOpen} onClose={handleClose} message={message} />

      </div>

    </div >
  );
}

export default LogicPuzzle;
