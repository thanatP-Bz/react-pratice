import React, { useReducer, useState } from "react";
import Modal from "./Modal";
const Index = () => {
  const [modal, setModal] = useState(false);
  return <div>{modal && <Modal />}</div>;
};

export default Index;
