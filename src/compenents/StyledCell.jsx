const StyledCell = ({ status, toggleStatus, children }) => {
    const getBackgroundColor = () => {
      if (status === 'red') return 'red';
      if (status === 'green') return 'green';
      return 'white';
    };
  
    const getColor = () => {
      if (status === 'red' || status === 'green') return 'white';
      return 'black';
    };
  
    return (
      <td
        onClick={toggleStatus}
        style={{
          border: '1px solid black',
          textAlign: 'center',
          cursor: 'pointer',
          width: '100px',
          height: '50px',
          backgroundColor: getBackgroundColor(),
          color: getColor(),
        }}
      >
        {status === 'red' ? 'X' : status === 'green' ? 'Yes' : children}
      </td>
    );
  };
  export default StyledCell