import React from 'react';
import './modal.module.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Only render the modal if it’s open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
