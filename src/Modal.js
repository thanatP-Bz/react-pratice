import React, { useEffect } from "react";

const Modal = ({ content, showModal }) => {
  useEffect(() => {
    setTimeout(() => {
      showModal();
    }, 3000);
  });

  return <div>{content}</div>;
};

export default Modal;
