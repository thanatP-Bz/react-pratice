import React, { useEffect } from "react";
import "./modal.css";

const Modal = ({ hideModal }) => {
  useEffect(() => {
    setTimeout(() => {
      hideModal();
    }, 3000);
  });

  return (
    <div className="modal-container">
      <div className="container">please enter a value</div>
    </div>
  );
};

export default Modal;
