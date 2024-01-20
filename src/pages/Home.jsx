import React, { useState } from 'react';
import './Home.css' ;
import StyledCell from '../compenents/StyledCell';
// Custom styled td component


function Home() {
  const [grid, setGrid] = useState(Array.from({ length: 14 }, () => ({ status: null })));

  const toggleCellStatus = (col) => {
    setGrid(current =>
      current.map((cell, cIdx) => {
        if (cIdx === col) {
          return {
            ...cell,
            status: cell.status === 'red' ? 'green' : cell.status === 'green' ? null : 'red',
          };
        }
        return cell;
      })
    );
  };

  // Render the table based on the grid
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        {/* Header Rows */}
        <thead>
          <tr>
            <th className="headerCell" rowSpan={2}></th>
            <th className="headerCell" colSpan={4}>Film</th>
            <th className="headerCell" colSpan={5}>Day</th>
            <th className="headerCell" colSpan={5}>Time</th>
          </tr>
          <tr>
            <th className="headerCell">88 Minutes</th>
            <th className="headerCell">Donnie Brasco</th>
            <th className="headerCell">Scarface</th>
            <th className="headerCell">The Recruit</th>
            <th className="headerCell">Monday</th>
            <th className="headerCell">Tuesday</th>
            <th className="headerCell">Wednesday</th>
            <th className="headerCell">Thursday</th>
            <th className="headerCell">Friday</th>
            <th className="headerCell">7:35 pm</th>
            <th className="headerCell">7:40 pm</th>
            <th className="headerCell">8:20 pm</th>
            <th className="headerCell">8:30 pm</th>
            <th className="headerCell">8:45 pm</th>
          </tr>
        </thead>
        <tbody>
          {/* Data Row */}
          <tr>
            <td className="headerRowSpan">Jessica</td>
            {grid.map((cell, colIdx) => (
              <StyledCell
                key={colIdx}
                status={cell.status}
                toggleStatus={() => toggleCellStatus(colIdx)}
              />
            ))}
          </tr>
          <tr>
            <td className="headerRowSpan">Laurie</td>
            {grid.map((cell, colIdx) => (
              <StyledCell
                key={colIdx}
                status={cell.status}
                toggleStatus={() => toggleCellStatus(colIdx)}
              />
            ))}
          </tr>
        </tbody>
    </table>
  );
}

export default Home;
