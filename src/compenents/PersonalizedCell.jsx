const PersonalizedCell = ({ status, toggleStatus, children, isAble }) => {
  const getBackgroundColor = () => {
    if (status === 'red') return 'red';
    if (status === 'green') return 'green';
    return 'white';
  };

  const getColor = () => {
    if (status === 'red' || status === 'green') return 'white';
    return 'black';
  };

  const handleClick = () => {
     if (isAble) { 
      toggleStatus();
    }
  };

  return (
    <td
      onClick={handleClick}
      style={{
        border: '1px solid black',
        textAlign: 'center',
        cursor: isAble  ? 'pointer' : 'not-allowed',

        backgroundColor: getBackgroundColor(),
        color: getColor(),
      }}
    >
      {status === 'red' ? 'X' : status === 'green' ? 'Yes' : children}
    </td>
  );
};
export default PersonalizedCell;
