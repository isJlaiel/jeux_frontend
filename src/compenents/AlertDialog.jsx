import React from 'react';

const AlertDialog = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;
  return (
    <div style={{
      position: 'fixed',
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      zIndex: 100,
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', 
      borderRadius: '10px', 
    }}>
      <p style={{
        color: '#333', 
        fontSize: '25px', 
        fontWeight : 'bold' ,
      }}>{message}</p>
      <button onClick={onClose} style={{
        backgroundColor: 'green', 
        color: 'white', 
        border: 'none', 
        padding: '10px 20px', 
        borderRadius: '5px', 
        cursor: 'pointer', 
        fontSize: '16px', 
      }}>Close</button>
    </div>
  );
  
};

export default AlertDialog;
