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
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Ajout d'une ombre portée
      borderRadius: '10px', // Bords arrondis
    }}>
      <p style={{
        color: '#333', // Couleur du texte
        fontSize: '25px', // Taille du texte
        fontWeight : 'bold' ,
      }}>{message}</p>
      <button onClick={onClose} style={{
        backgroundColor: 'green', // Couleur de fond du bouton
        color: 'white', // Couleur du texte du bouton
        border: 'none', // Suppression de la bordure du bouton
        padding: '10px 20px', // Ajustement du padding du bouton
        borderRadius: '5px', // Bords arrondis du bouton
        cursor: 'pointer', // Changement du curseur au survol
        fontSize: '16px', // Taille du texte du bouton
      }}>Close</button>
    </div>
  );
  
};

export default AlertDialog;
