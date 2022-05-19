import React, { useEffect } from "react";

const Modal = ({ content, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  });

  return <div>{content}</div>;
};

export default Modal;
