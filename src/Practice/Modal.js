import React, { useEffect } from "react";
import "./modal.css";

const Modal = ({ showContent }) => {
  useEffect(() => {
    setTimeout(() => {}, 3000);
  });

  return (
    <div className="modal-container">
      <div className="container">{showContent}</div>
    </div>
  );
};

export default Modal;
