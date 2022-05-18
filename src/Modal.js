import React, { useEffect } from "react";

const Modal = ({ content }) => {
  useEffect(() => {
    setTimeout(() => {}, 3000);
  });

  return <div>{content}</div>;
};

export default Modal;
