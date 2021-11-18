import React from "react";

const Modal = ({ showContent }) => {
  return (
    <div className="modal">
      <h4>{showContent}</h4>
    </div>
  );
};

export default Modal;
