import React, { useEffect } from "react";
import { useAppContext } from "./context/appContext";

const Modal = ({ content }) => {
  const { closeModal } = useAppContext();

  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  });

  return <div>{content}</div>;
};

export default Modal;
