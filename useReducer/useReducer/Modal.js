import React, { useEffect } from "react";

const Modal = ({ showContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });

  return (
    <div className="modal">
      <h4>{showContent}</h4>
    </div>
  );
};

export default Modal;
